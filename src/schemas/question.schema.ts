import { object, string, TypeOf } from "zod";

// Params para operaciones que requieren ID
const params = {
  params: object({
    questionId: string(),
  }),
};

// Esquema para crear pregunta (solo body)
export const createQuestionSchema = object({
  body: object({
    question: string({
      required_error: "Question is required",
    }),
  }),
});

// Esquema para obtener una pregunta específica
export const getQuestionSchema = object({
  ...params,
});

// Esquema para actualizar pregunta
export const updateQuestionSchema = object({
  ...params,
  body: object({
    question: string(),
  }).partial(),
});

// Esquema para eliminar pregunta
export const deleteQuestionSchema = object({
  ...params,
});

// Tipos TypeScript
export type CreateQuestionInput = TypeOf<typeof createQuestionSchema>['body'];
export type GetQuestionInput = TypeOf<typeof getQuestionSchema>['params'];
export type UpdateQuestionInput = TypeOf<typeof updateQuestionSchema>;
export type DeleteQuestionInput = TypeOf<typeof deleteQuestionSchema>['params'];