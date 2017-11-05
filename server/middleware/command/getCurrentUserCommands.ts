import { Request, Response, NextFunction } from 'express';
import { User } from '../../../models/user';

export default () => {
  return (req: Request, res: Response, next: NextFunction) => {
    User
      .findById(req.session.userId)
      .populate('commands')
      .then((user) => {
        res.send(JSON.stringify(user.commands));
      });
  };
};
