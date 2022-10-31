import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { Injectable } from '@nestjs/common';
import { PROVIDER } from '../../common/enums';
import { getGoogleClientId, getGoogleClientSecret, getGoogleRedirectURI } from '../../util/config.util';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, PROVIDER.GOOGLE) {

  constructor() {
    super({
      clientID: getGoogleClientId(),
      clientSecret: getGoogleClientSecret(),
      callbackURL: getGoogleRedirectURI(),
      scope: ['email', 'profile'],
    });
  }

  // eslint-disable-next-line prettier/prettier
  async validate (accessToken: string, 
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}