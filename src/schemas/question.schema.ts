import { array, object, string, TypeOf } from "zod";

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
      required_error: "Se necesita una pregunta",
    }).min(1, "Debe tener al menos un caracter")
      .max(255, "La pregunta no puede tener más de 255 caracteres"),  // Validación de longitud máxima

    questionEn: string({
      required_error: "Se necesita una pregunta en inglés",
    }).min(1, "Debe tener al menos un caracter")
      .max(255, "La pregunta en inglés no puede tener más de 255 caracteres"),  // Validación de longitud máxima

    options: array(
      object({
        label: string({
          required_error: "La etiqueta de la opción es requerida",
        }).min(1, "La etiqueta debe tener al menos un caracter")
          .max(100, "La etiqueta no puede tener más de 100 caracteres"),

        labelEn: string({
          required_error: "La etiqueta en inglés de la opción es requerida",
        }).min(1, "La etiqueta en inglés debe tener al menos un caracter")
          .max(100, "La etiqueta en inglés no puede tener más de 100 caracteres"),
      })
    ).min(1, "Debe haber al menos una opción")  // Validación para que haya al menos una opción
      .max(5, "No puede haber más de 5 opciones"),  // Validación de máximo número de opciones
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