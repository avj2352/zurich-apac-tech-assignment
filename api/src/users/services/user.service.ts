import { Injectable, Logger } from '@nestjs/common';
// custom
import { UserDao } from '../dao/user.dao';

@Injectable()
export class UserService {
    private logger: Logger;
    constructor (        
        private userDao: UserDao        
    ) {         
        this.logger = new Logger('UserService');
    }

    
    /**
     * fetch users information
     * @param {number} page number
     * @returns Promise<any>
     */
     async fetchUsers (page?: number): Promise<any> {
         this.logger.verbose('Fetching user information', );
        if (page) this.logger.verbose(`Fetch page number: ${page}`);
        else this.logger.verbose(`Call first page of API`);
        return await this.userDao.fetchUsers(page);
    }
    
}