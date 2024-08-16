import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller'; // Adjust the path as needed

const router = Router();

router.get('/o-auth', AuthController.preLogin);
router.get('/google', AuthController.login);
router.get('/google/callback', AuthController.googleCallback);

export default router;