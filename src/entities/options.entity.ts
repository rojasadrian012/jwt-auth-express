import { Column, Entity, ManyToOne } from "typeorm";
import Model from "./model.entity";
import { Question } from "./question.entity";

@Entity("options")
export class Option extends Model {
    @Column()
    label: string;

    @Column()
    labelEn: string;

    @Column({
        type: "int",
        default: 0
    })
    value: number;

    @ManyToOne(() => Question, (question) => question.options)
    question: Question
}
