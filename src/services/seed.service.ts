import { DeepPartial } from "typeorm";
import { Question } from "../entities/question.entity";
import { AppDataSource } from "../utils/data-source";
import { Option } from "../entities/options.entity";
import { UserQuestionResponse } from "../entities/userQuestionResponse.entity";

const questionRepository = AppDataSource.getRepository(Question);
const optionRepository = AppDataSource.getRepository(Option);
const userQuestionRepository = AppDataSource.getRepository(UserQuestionResponse);


export const createQuestionFromSeed = async (data: DeepPartial<Question>[]) => {
    await userQuestionRepository.delete({});
    await optionRepository.delete({});
    await questionRepository.delete({});
    return await questionRepository.save(questionRepository.create(data))
}