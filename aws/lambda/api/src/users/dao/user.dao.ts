import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { COMMON_ERROR, PAGE_ERROR } from '../../common/enums';
import fetch from 'cross-fetch';
import { getRequestResponseURL } from '../../util/config.util';

@Injectable()
export class UserDao {
    private logger: Logger;
    private apiURL: string;

    constructor (        
    ) {
        this.logger = new Logger('UserDao');
        this.apiURL = getRequestResponseURL();
    }

    /**
     * fetch Request response users info
     * @param {number} page number
     * @returns Promise<any>
     */
     async fetchUsers (page?: number): Promise<any> {
        const endpoint: string = page ? `${this.apiURL}/users?page=${page}` : `${this.apiURL}/users`;
        this.logger.verbose(`Calling API: ${endpoint}`);
        try {
            const res = await fetch(endpoint);
            const result = await res.json();
            // this.logger.verbose(`Response: ${JSON.stringify(result)}`);
            return result;
        } catch (err) {
            this.logger.verbose(`Error retrieving from API`, (err as Error).message);
            throw new BadRequestException(COMMON_ERROR.RECORD_NOT_FOUND);
        }
    }
}