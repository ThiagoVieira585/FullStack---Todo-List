import { Request, Response } from 'express';
import taskModel from '../models/taskModel';

export class TaskController {

  async getAll(req:Request, res:Response){
    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks);
  }

  async createTask(req:Request,res:Response){
    const createdTask = await taskModel.createTask(req.body);
    return res.status(201).json(createdTask);
  }
}