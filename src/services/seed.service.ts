import { DeepPartial } from "typeorm";
import { Question } from "../entities/question.entity";
import { AppDataSource } from "../utils/data-source";
import { Option } from "../entities/options.entity";

const questionRepository = AppDataSource.getRepository(Question);
const optionRepository = AppDataSource.getRepository(Option);

export const createQuestionFromSeed = async (data: DeepPartial<Question>[]) => {
    await optionRepository.delete({});
    await questionRepository.delete({});
    return await questionRepository.save(questionRepository.create(data))
}