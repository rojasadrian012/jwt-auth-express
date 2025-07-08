import { Column, Entity } from "typeorm";
import Model from "./model.entity";

@Entity("questions")
export class Question extends Model {
    @Column({
        unique: true,
    })
    question: string;
}