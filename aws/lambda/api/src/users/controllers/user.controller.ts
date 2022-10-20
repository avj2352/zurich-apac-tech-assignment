import { Controller, Get, ValidationPipe, Logger, UnauthorizedException, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
// custom
import { RequestHeader } from '../../auth/decorators/auth.decorators';
import { IDisplayUser } from '../../auth/models/user.model';
import { UserService } from '../services/user.service';
import { UserQueryDTO } from '../dto/user.dto';
import { AuthService } from '../../auth/services/auth.service';
import { BadRequestException } from '@nestjs/common';
import { COMMON_ERROR } from '../../common/enums';

@Controller('users')
export class UserController {
    private logger: Logger;

    constructor(
         private userService: UserService,
         private authService: AuthService
         ) {
        this.logger = new Logger('UserController');
    }
    
    @Get()
    @ApiOperation({ description: 'Fetch user information based on Request Response API. *Requires Access Token' })
    async search (
        @RequestHeader() accessToken: string,
        @Query(ValidationPipe) query: UserQueryDTO): Promise<any> {         
        // check if authenticated
        const user: IDisplayUser = await this.authService.getUserByToken(accessToken);
        if (!Boolean(user)) throw new UnauthorizedException(COMMON_ERROR.NOT_AUTHORIZED);
        const {page} = query;        
        try {            
            this.logger.verbose(`Search page is: ${page}`);
            return await this.userService.fetchUsers(page);                            
        } catch (err) {
            this.logger.verbose(`Error searching : ${JSON.stringify(err)}`);
            throw new BadRequestException(COMMON_ERROR.INVALID_SEARCH_QUERY);
        }
    }
}