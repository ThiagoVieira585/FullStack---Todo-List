import express from 'express';
import { TaskController } from '../controllers/tasksController';
import { Validator } from '../middleware/taskMiddleware';


const taskController = new TaskController();
const validator = new Validator();
const router = express.Router();

router.get('/tasks',taskController.getAll);
router.post('/tasks',validator.validateBody,taskController.createTask);

export default router;