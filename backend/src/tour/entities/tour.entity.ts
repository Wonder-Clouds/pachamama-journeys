import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tour {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  location: string;

  @Column({ type: 'text' })
  time: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category;

  @Column({ type: 'text', array: true })
  gallery: string[];

  @Column({ type: 'text' })
  cover: string;

  @Column({ type: 'boolean', default: false })
  status: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
