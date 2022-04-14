import { Request, Response } from "express";
import User from "../../models/user.model";

export const getUser = async( req: Request, res: Response ) => {
  const { id } = req.params;
  const user = await User.findByPk( id );

  if ( !user ) {
    return res.status( 404 ).json({
      ok: false,
      msg: 'There are no user with that id'
    });
  }

  res.json({
    ok:true,
    user
  });
}
