import { NextFunction, Request, Response } from "express";
import { CreateQuestionInput } from "../schemas/question.schema";
import { findUserById } from "../services/user.service";
import { createQuestion, findQuestions } from "../services/question.service";
import { createQuestionInputToQuestionEntity } from "../mappers/question.mapper";
import { UserResponseInput } from "../schemas/userResponse.schema";
import { createUserQuestionResponse, createUserQuestionResponses } from "../services/userQuestion.service";
import { userResponseInputToUserQuestionResponse } from "../mappers/userQuestionResponse.mapper";


export const createQuestionHandler = async (
    req: Request<{}, {}, CreateQuestionInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await findUserById(res.locals.user.id as string);
        console.log("User", { user });

        const question = await createQuestion(createQuestionInputToQuestionEntity(req.body));

        res.status(201).json({
            status: "success",
            data: {
                question,
            },
        });
    } catch (err: any) {
        if (err.code === '23505') {
            return res.status(409).json({
                status: 'fail',
                message: 'Post with that title already exist',
            });
        }
        next(err);
    }

}

export const getQuestionsHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const questions = await findQuestions({}, {});

        res.status(200).json({
            status: "success",
            count: questions.length,
            data: {
                questions,
            },
        });
    } catch (err) {
        next(err);
    }
}

export const createUserQuestionHandler = async (
    req: Request<{}, {}, UserResponseInput>, 
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await findUserById(res.locals.user.id as string);
        if (!user)
            throw new Error(`User with ID ${res.locals.user.id} not found`);

        const questions = await findQuestions({}, {});

        if (!questions || questions.length === 0)
            throw new Error("No questions found");

        const userQuestionResponse = await createUserQuestionResponses(
            userResponseInputToUserQuestionResponse(
                req.body,
                user,
                questions
            )
        )        

        res.status(201).json({
            status: "success",
            data: {
                userQuestionResponse,
            },
        });
    } catch (err) {
        next(err);
    }
}


/*
export const getQuestionHandler = async (
    req: Request<GetQuestionInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        const question = await getQuestion(req.params.questionId);
        if (!question) {
            return next(new AppError(404, `Question with that ID: ${req.params.questionId} not found`));
        }
        res.status(200).json({
            status: "success",
            data: {
                question,
            },
        });
    } catch (err) {
        next(err);
    }
};

export const updateQuestionHandler = async (
    req: Request<UpdateQuestionInput['params'], {}, UpdateQuestionInput['body']>,
    res: Response,
    next: NextFunction
) => {
    try {
        const question = await getQuestion(req.params.questionId);

        if (!question) {
            return next(new AppError(404, `Question with that ID: ${req.params.questionId} not found`));
        }

        Object.assign(question, req.body);

        const updatedQuestion = await question.save();

        res.status(200).json({
            status: 'success',
            data: {
                post: updatedQuestion,
            },
        });
    } catch (err: any) {
        next(err);
    }
}

export const deleteQuestionHandler = async (
    req: Request<DeleteQuestionInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        const question = await getQuestion(req.params.questionId);

        if (!question) {
            return next(new AppError(404, `Question with that ID: ${req.params.questionId} not found`));
        }

        await question.remove();

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err: any) {
        next(err);
    }
};*/