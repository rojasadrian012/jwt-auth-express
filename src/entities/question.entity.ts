import { Column, Entity, OneToMany } from "typeorm";
import Model from "./model.entity";
import { Option } from "./options.entity";

@Entity("questions")
export class Question extends Model {
    @Column({
        unique: true,
    })
    question: string;

    @Column({
        default: "",
    })
    questionEn: string;

    @OneToMany(() => Option, (option) => option.question,{
        cascade: true,
    })
    options: Option[];
}