import { FindOptionsSelect, FindOptionsWhere } from "typeorm";
import { Question } from "../entities/question.entity";
import { AppDataSource } from "../utils/data-source";

const questionRepository = AppDataSource.getRepository(Question);

export const createQuestion = async (input: Partial<Question>) => {
    return await questionRepository.save(questionRepository.create(input));
}

export const getQuestion = async (questionId: string) => {
    return await questionRepository.findOneBy({ id: questionId });
}

export const findQuestions = async (
    where: FindOptionsWhere<Question> = {},
    select: FindOptionsSelect<Question> = {}
) => {
    return await questionRepository.find({
        where,
        select,
    });
}