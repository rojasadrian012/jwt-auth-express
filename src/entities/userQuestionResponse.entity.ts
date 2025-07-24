import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import Model from "./model.entity";
import { User } from "./user.entity";
import { Question } from "./question.entity";
import { Option } from "./options.entity";

@Entity("user_question_responses")
export class UserQuestionResponse extends Model {

    @ManyToOne(() => User, { eager: false })
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToOne(() => Question, { eager: false })
    @JoinColumn({ name: "question_id" })
    question: Question;

    @ManyToOne(() => Option, { eager: false })
    @JoinColumn({ name: "option_id" })
    option: Option;

}