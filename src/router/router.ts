import express from 'express';
import { TaskController } from '../controllers/tasksController';
import { Validator } from '../middleware/taskMiddleware';


const taskController = new TaskController();
const validator = new Validator();
const router = express.Router();

router.get('/tasks',taskController.getAll);
router.post('/tasks',validator.validateBody,taskController.createTask);
router.delete('/tasks/:id',taskController.deleteTask);
router.put('/tasks/:id',validator.validateBody,taskController.updateTask);

export default router;