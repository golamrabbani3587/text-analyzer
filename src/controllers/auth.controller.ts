import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import axios from 'axios';

import path from 'path';

export class AuthController {
    static async preLogin(req: Request, res: Response) {
        try {
          res.sendFile(path.join(__dirname, 'views', 'login.html'));
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }

    static login(req: Request, res: Response, next: NextFunction) {
        passport.authenticate('google', { scope: ['email', 'profile'] })(req, res, next);
    }

      static async googleCallback(req: Request, res: Response) {
        const code = req.query.code as string;
        if (code) {
          try {
            res.redirect(`/views/index.html?code=${encodeURIComponent(code)}`);
          } catch (error) {
            console.error('Error handling the callback:', error);
            res.status(500).send('Error handling the callback');
          }
        } else {
          res.send('Google OAuth2 callback failed');
        }
      }

}
