import { NextFunction, Request, Response } from "express";
import { seedCbi } from "../data/seed.data"
import { createQuestionFromSeed } from "../services/seed.service";
import { seedCbiToQuestionEntity } from "../mappers/seed.mapper";

export const seedHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await createQuestionFromSeed(seedCbiToQuestionEntity(seedCbi))
        res.status(201).json({
            message: "Questions seeded successfully",
            count: result.length,
            data: result
        });
    } catch (error) {
        next(error);
    }
}