import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("admin")
export class AdminEntity {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        firstName: string;

        @Column()
        lastName: string;

        @Column({default: true})
        isActive: boolean;
}