import { object, string, number, record, TypeOf } from "zod";

export const createUserQuestionSchema = object({
    body: object({
        answers: record(string(), string()),
        completedAt: string().datetime(),
        totalQuestions: number().int().positive()
    })
});


export type UserResponseInput = TypeOf<typeof createUserQuestionSchema>['body'];