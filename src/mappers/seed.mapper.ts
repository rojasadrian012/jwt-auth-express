
import { DeepPartial } from "typeorm";
import { Question } from "../entities/question.entity";
import { ISeedCbi } from "../types/seed.types";
import { Option } from "../entities/options.entity";

export const seedCbiToQuestionEntity = (seedData: ISeedCbi): DeepPartial<Question>[] => {
    return seedData.questions.map(q => ({
        question: q.question,
        questionEn: q.questionEn,
        options: q.options.map(option => ({
            label: option.label,
            labelEn: option.labelEn,
            value: option.value
        } as DeepPartial<Option>))
    }))
}