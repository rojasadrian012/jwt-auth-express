import { UserQuestionResponse } from "../entities/userQuestionResponse.entity";
import { AppDataSource } from "../utils/data-source";

const userQuestionResponseRepository = AppDataSource.getRepository(UserQuestionResponse)

export const createUserQuestionResponse = async (input: UserQuestionResponse) => {
    const response = await userQuestionResponseRepository.create(input);
    return response
}

export const createUserQuestionResponses = async (input: UserQuestionResponse[]) => {
    console.log(input);    
    const response = await userQuestionResponseRepository.save(input);
    return response
}