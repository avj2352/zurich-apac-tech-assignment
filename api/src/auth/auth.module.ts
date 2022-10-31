import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// Custom components
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserSchema } from './models/user.model';
import { GoogleStrategy } from './strategies/google.strategy';
import { RequestHeader } from './decorators/auth.decorators';

@Module({
  imports: [            
    MongooseModule.forFeature([
      {
          name: 'User',
          schema: UserSchema,
      },
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}