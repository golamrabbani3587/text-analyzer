import { Request, Response, NextFunction } from 'express';

export const checkAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }
  next();
};