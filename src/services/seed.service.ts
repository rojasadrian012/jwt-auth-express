import { DeepPartial } from "typeorm";
import { Question } from "../entities/question.entity";
import { AppDataSource } from "../utils/data-source";

const questionRepository = AppDataSource.getRepository(Question);

export const createQuestionFromSeed = async (data: DeepPartial<Question>[]) => {
    await questionRepository.delete({});
    return await questionRepository.save(questionRepository.create(data))
}