import { Request, Response, NextFunction } from 'express';
import { Command } from '../../../models/command';

export default () => {
  return (req: Request, res: Response, next: NextFunction) => {
    Command.find({
      user: req.session.userId
    })
    .then(commands => res.send(commands))
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
  };
};
