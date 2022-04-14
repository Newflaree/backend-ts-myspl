import { Request, Response } from "express";

export const registerUser = ( req: Request, res: Response ) => {
  const { body } = req;

  res.json({
    msg: 'registerUser',
    body
  });
}
