import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { MongooseConfigService } from '../db/mongoose.config.service';
import { HealthModule } from '../health/health.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../users/user.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
    HealthModule,
    AuthModule,
    UserModule,    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
