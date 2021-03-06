import { Request, Response, NextFunction } from 'express';
import { Alias } from '../../../../models/alias';
import * as sanitize from 'mongo-sanitize';

export default () => {
  return (req: Request, res: Response, next: NextFunction) => {
    Alias
      .findOne({
        'user': req.session.userId,
        'name': sanitize(req.body.name)
       })
      .then(alias => {
        res.locals.alias = alias;
        next();
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500);
      });
  };
};
