import {CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number

    @CreateDateColumn({
        type: "date"
    })
    createdAt: Date

    @UpdateDateColumn({
        type: "date"
    })
    updatedAt: Date

    @DeleteDateColumn({
        type: "date"
    })
    deletedAt: Date
}