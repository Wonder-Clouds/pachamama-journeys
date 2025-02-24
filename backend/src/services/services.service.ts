import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { unlink, writeFile, mkdir } from 'fs/promises';
import { extname, join } from 'path';
import * as fs from 'fs';
import * as sharp from 'sharp';

type ValidMimeType = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/jpg';

interface FileUpload {
  mimetype: string;
  originalname: string;
  buffer: Buffer;
}

@Injectable()
export class ServicesService {
  private readonly ALLOWED_IMAGE_TYPES: ValidMimeType[] = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/jpg',
  ];

  async uploadImages(
    files: FileUpload | FileUpload[],
    folder: string,
  ): Promise<string[]> {
    if (!files || (Array.isArray(files) && files.length === 0)) {
      throw new BadRequestException('No files uploaded');
    }

    const fileArray = Array.isArray(files) ? files : [files];
    const imagePaths: string[] = [];

    for (const file of fileArray) {
      if (!this.ALLOWED_IMAGE_TYPES.includes(file.mimetype as ValidMimeType)) {
        throw new BadRequestException(`Invalid file type: ${file.mimetype}`);
      }

      const uniqueName = this.generateUniqueName(file.originalname);
      const relativePath = `/uploads/${folder}`;
      const fullPath = join(process.cwd(), relativePath);
      const filePath = join(fullPath, uniqueName);

      try {
        await this.ensureDirectoryExists(fullPath);

        const sharpOptions: sharp.SharpOptions = {};
        const webpBuffer = await sharp(file.buffer, sharpOptions)
          .webp({ quality: 75 })
          .toBuffer();

        const webpFilePath = filePath.replace(extname(filePath), '.webp');
        await writeFile(webpFilePath, webpBuffer);

        imagePaths.push(
          join(relativePath, uniqueName.replace(extname(uniqueName), '.webp')),
        );
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        throw new BadRequestException(
          `Error saving image ${file.originalname}: ${errorMessage}`,
        );
      }
    }

    return imagePaths;
  }

  async deleteImages(imagePaths: string[]): Promise<void> {
    const errors: string[] = [];

    for (const path of imagePaths) {
      try {
        const fullPath = join(process.cwd(), path);
        if (fs.existsSync(fullPath)) {
          await unlink(fullPath);
        } else {
          throw new Error('File does not exist');
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        errors.push(`Failed to delete ${path}: ${errorMessage}`);
      }
    }

    if (errors.length > 0) {
      throw new InternalServerErrorException(errors.join(', '));
    }
  }

  private generateUniqueName(originalName: string): string {
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');

    return `${randomName}${extname(originalName)}`;
  }

  private async ensureDirectoryExists(directory: string): Promise<void> {
    try {
      await mkdir(directory, { recursive: true });
    } catch (error) {
      if (
        error instanceof Error &&
        'code' in error &&
        error.code !== 'EEXIST'
      ) {
        throw error;
      }
    }
  }
}
