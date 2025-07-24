import { User } from "../entities/user.entity";
import { UserQuestionResponse } from "../entities/userQuestionResponse.entity";
import { Question } from "../entities/question.entity";
import { UserResponseInput } from "../schemas/userResponse.schema";

export const userResponseInputToUserQuestionResponse = (
    input: UserResponseInput, 
    user: User,
    questions: Question[]
): UserQuestionResponse[] => {

    const { answers } = input;

    return Object.entries(answers).map(([questionId, selectedAnswer]) => {

        const question = questions.find(q => q.id === questionId);
        if (!question) {
            throw new Error(`Question with ID ${questionId} not found`);
        }

        const selectedOption = question.options.find(opt => opt.id === selectedAnswer);
        if (!selectedOption) {
            throw new Error(`Option with ID ${selectedAnswer} not found for question ${questionId}`);
        }

        const userQuestionResponse = new UserQuestionResponse();
        userQuestionResponse.user = user;
        userQuestionResponse.question = question;
        userQuestionResponse.option = selectedOption

        return userQuestionResponse;
    });
};
