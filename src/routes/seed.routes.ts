import express from 'express';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { seedHandler } from '../controllers/seed.controller';


const router = express.Router();

router.use(deserializeUser, requireUser);

router.get("/run", deserializeUser, requireUser, seedHandler);

export default router;