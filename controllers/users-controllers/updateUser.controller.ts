import { Request, Response } from "express";

export const updateUser = ( req: Request, res: Response ) => {
  const { id } = req.params;

  res.json({
    msg: 'updateUser',
    id
  });
}
