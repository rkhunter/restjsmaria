import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

    @Column("timestamp")
    reg_date: Date;

}