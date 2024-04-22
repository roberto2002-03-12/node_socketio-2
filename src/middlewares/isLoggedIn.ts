import { Request, Response, NextFunction } from 'express'

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  
  if (req.cookies.username) {
    next();
  } else {
    res.redirect("/login");
  }

};