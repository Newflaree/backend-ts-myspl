import { Request, Response } from "express";
// Models
import User from "../../models/user.model";

export const getUsers = async( req: Request, res: Response ) => {
  const users = await User.findAll();

  res.json({
    ok: true,
    users
  });
}
