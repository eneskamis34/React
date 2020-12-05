const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const key = require("../config/key");


passport.use(
    new GoogleStrategy(
      {
        clientID: key.googleClientID,
        clientSecret: key.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken,refreshToken,profile,done) => {
        console.log('access token',accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile',profile);
      }
    )
  );
  