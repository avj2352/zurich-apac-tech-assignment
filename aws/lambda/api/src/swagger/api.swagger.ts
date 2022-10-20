import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HealthModule } from '../health/health.module';
import { getServerVersion, getServerName } from '../util/config.util';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../users/user.module';


const API_VERSION = getServerVersion();
const SERVER_NAME = getServerName();

export function apiDocumentation(app: INestApplication): void {

    // define api
    const healthAPI = new DocumentBuilder()
    .setTitle(`Health check for ${SERVER_NAME}`)
    .setDescription(`contains simple API to check if the server - ${SERVER_NAME} is up & running!`)
    .setVersion(API_VERSION)
    .addTag('Health')
    .build();

    // define api
    const authAPI = new DocumentBuilder()
    .setTitle(`Authentication flow of ${SERVER_NAME}`)
    .setDescription(`The Auth Module contains API requests for authentication & registration flow in ${SERVER_NAME}`)
    .setVersion(API_VERSION)
    .addTag('Auth')
    .build();

    // define api
    const userAPI = new DocumentBuilder()
    .setTitle(`Fetch user info in ${SERVER_NAME}`)
    .setDescription(`Users Module contains API fetch user info from Request Response Free API ${SERVER_NAME}`)
    .setVersion(API_VERSION)
    .addTag('User')
    .build();
    
    
    // bind view
    const document01 = SwaggerModule.createDocument(app, healthAPI, {include: [HealthModule], });
    const document02 = SwaggerModule.createDocument(app, authAPI, {include: [AuthModule], });  
    const document03 = SwaggerModule.createDocument(app, userAPI, {include: [UserModule], });

    // bind route
    SwaggerModule.setup('swagger/api/health', app, document01);
    SwaggerModule.setup('swagger/api/auth', app, document02);   
    SwaggerModule.setup('swagger/api/users', app, document03);    

}
