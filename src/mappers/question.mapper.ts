
import { DeepPartial } from "typeorm";
import { Question } from "../entities/question.entity";
import { CreateQuestionInput } from "../schemas/question.schema";
import { Option } from "../entities/options.entity";

export const createQuestionInputToQuestionEntity = (
    input: CreateQuestionInput
): Partial<Question> => {
    return ({
        question: input.question,
        questionEn: input.questionEn,
        options: input.options.map(option => ({
            label: option.label,
            labelEn: option.labelEn,
        } as Option))
    })
}