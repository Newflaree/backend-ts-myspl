import { Request, Response } from "express";

export const registerUser = ( req: Request, res: Response ) => {
  const { body } = req;

  res.json({
    ok: true,
    msg: 'registerUser',
    body
  });
}
