import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { AuthModule } from '../auth/auth.module';
import { UserDao } from './dao/user.dao';

@Module({
  imports: [    
    AuthModule
  ],
  controllers: [UserController],
  providers: [UserService, UserDao],
  exports: [UserService, UserDao]
})
export class UserModule {}
