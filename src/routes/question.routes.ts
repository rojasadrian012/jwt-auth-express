import express from 'express';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { validate } from '../middleware/validate';
import { createQuestionHandler, getQuestionsHandler, getQuestionHandler, updateQuestionHandler, deleteQuestionHandler } from '../controllers/question.controller';
import { createQuestionSchema, getQuestionSchema, updateQuestionSchema, deleteQuestionSchema } from '../schemas/question.schema';

const router = express.Router();

router.use(deserializeUser, requireUser);
router
    .route('/')
    .post(validate(createQuestionSchema), createQuestionHandler)
    .get(getQuestionsHandler);

router
    .route('/:questionId')
    .get(validate(getQuestionSchema), getQuestionHandler)
    .patch(validate(updateQuestionSchema), updateQuestionHandler)
    .delete(validate(deleteQuestionSchema), deleteQuestionHandler);

export default router;

