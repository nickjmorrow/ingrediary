import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'ing', name: 'products' })
export class Product {
    @PrimaryGeneratedColumn({ name: 'product_id' })
    public productId!: number;

    @Column({ name: 'name' })
    public name!: string;
}