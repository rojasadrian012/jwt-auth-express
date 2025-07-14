
import { DeepPartial } from "typeorm";
import { Question } from "../entities/question.entity";
import { ISeedCbi } from "../types/seed.types";

export const seedCbiToQuestionEntity = (seedData: ISeedCbi): DeepPartial<Question>[] => {
    return seedData.questions.map(q => ({
        question: q.question
    }))
}