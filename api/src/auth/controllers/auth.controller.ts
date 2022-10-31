import { HttpStatus, Res, UnauthorizedException } from '@nestjs/common';
import { Controller, Get, InternalServerErrorException, Post, Redirect, Req, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { getGoogleClientURL } from '../../util/config.util';
import { RequestHeader } from '../decorators/auth.decorators';
import { IDisplayUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { BadRequestException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @ApiOperation({ description: `Authenticate using Google OAuth 2.0` })
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @ApiOperation({ description: `Google OAuth 2.0 URI Redirect Handler` })
  @UseGuards(AuthGuard('google'))
  @Redirect(getGoogleClientURL())
  async googleAuthRedirect(@Req() req) {
    try {
        const result: string = await this.authService.googleLogin(req);
        if (result !== '') {
            return {
                url: `${getGoogleClientURL()}?accessToken=${result}`,
                statusCode: 302,
            };
        }
    } catch(err) {
        throw new InternalServerErrorException();
    }
  }


  @Get('userinfo')
  @ApiOperation({ description: `Retrieve User Information. Requires Access Token*` })
  async retrieveUserInfo (@RequestHeader() accesstoken) : Promise <IDisplayUser> {
      try {
        const result: IDisplayUser = await this.authService.getUserByToken(accesstoken);
        return result;
      } catch (err) {
        throw new UnauthorizedException(`Unable to retrieve token`);
      }
  }
  

  @Post('logout')
  @ApiOperation({ description: `Logout User. Requires Access Token*` })
  async logoutUser(@RequestHeader() accesstoken, @Res()res: Response) : Promise <any> {
    try {
      await this.authService.logout(accesstoken);
      res.status(HttpStatus.CREATED).send();
    } catch (err) {
      throw new BadRequestException(`Unable to logout`);
    }
  }
}