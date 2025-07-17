import express from 'express';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { validate } from '../middleware/validate';
import { createQuestionHandler, createUserQuestionHandler, getQuestionsHandler } from '../controllers/question.controller';
import { createQuestionSchema } from '../schemas/question.schema';
import { createUserQuestionSchema } from '../schemas/userResponse.schema';

const router = express.Router();

router.use(deserializeUser, requireUser);

router.post('/', validate(createQuestionSchema), createQuestionHandler)

router.get('/', getQuestionsHandler);

router.post("/cbi/create", validate(createUserQuestionSchema), createUserQuestionHandler)

export default router;

