import { Request, Response, NextFunction } from 'express';

export class Validator {

  async validateBody(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    
    if (body.title === undefined) {
      return res.status(400).json({ message: 'The field "title" is required' });
    }
  
    if (body.title === '') {
      return res.status(400).json({ message: 'Title cannot be empty' });
    }
  
    try {
      next();
    } catch (error) {
      
      next(error);
    }
  }
}
