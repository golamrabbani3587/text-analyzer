import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth2';
import { Request } from 'express';

const GOOGLE_CLIENT_ID = "example.com";
const GOOGLE_CLIENT_SECRET = "example";

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true,
  },
  function(
    request: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
  ) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user: Express.User, done: (err: any, id?: unknown) => void) {
  done(null, user);
});

passport.deserializeUser(function(user: Express.User, done: (err: any, user?: Express.User | false | null) => void) {
  done(null, user);
});
