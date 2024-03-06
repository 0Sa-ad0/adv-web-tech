//LAB TASK = 3

//ADMIN.ENTITY.TS

import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class AdminEntity {

        @PrimaryGeneratedColumn()
        id: number;

        @Column({ default: true })
        isActive: boolean;

        @Column({ nullable: true })
        fullName: string;

        @Column({ type: 'bigint', unsigned: true, nullable: true })
        phone: number;

        @BeforeInsert()
        generateRandomNumber() {
                this.id = Math.floor(Math.random() * 1000);
        }
}