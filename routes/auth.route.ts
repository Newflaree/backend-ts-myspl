import { Router } from 'express';
// Controllers
import { registerUser } from '../controllers/auth-controllers';


/*
Path: /api/auth
*/
const router: Router = Router();

router.post( '/register', registerUser );

export default router;
