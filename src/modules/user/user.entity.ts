import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'Primary Key'
    })

    id: number;

    @Column({
        type: 'varchar',
    })

    name: string;

    @Column({
        type: 'varchar',
    })

    title: string;
}