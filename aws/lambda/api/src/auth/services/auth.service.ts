import { Injectable, UnauthorizedException, InternalServerErrorException, Logger, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PROVIDER, USER_ROLE, USER_SUBSCRIPTION_TYPE } from '../../common/enums';
// Custom Components
// Custom Components
import { IUser, IDisplayUser } from '../models/user.model';

@Injectable()
export class AuthService {
    private logger = new Logger('AuthService');

    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>,        
    ) { }

    private async _checkIfGoogleRecordExists (email: string): Promise<boolean> {
        const promise = new Promise <any> (async (resolve: (result: boolean) => void, reject: (error: boolean) => void): Promise<any> => {
            try {
                this.logger.verbose(`Checking User record entry...`);
                const user = await this.userModel.findOne({email, provider: PROVIDER.GOOGLE});
                if (user && user.email) resolve(true);
                else resolve(false);
            } catch (err) {
                reject(false);
            }
        });
        return promise;
    }

    private async _updateAccessTokenByEmail (email: string, accessToken: string, provider: PROVIDER = PROVIDER.GOOGLE): Promise<string> {
        const promise = new Promise <any> (async (resolve: (accessToken: string) => void, reject: (error: string) => void): Promise <any> => {
            try {
                this.logger.verbose(`User exists, updating record`);
                const record = await this.userModel.findOneAndUpdate({email, provider}, {
                    accessToken
                },{new: true});
                resolve(record.accessToken);
            } catch (error) {                
                reject(`Updating record`);
            }
        });
        return promise;
    }

    private async _createNewRecord (user: any): Promise<string> {
        const promise = new Promise <any> (async (resolve: (accessToken: string) => void, reject: (error: string) => void): Promise <any> => {
            try {
                this.logger.verbose(`User doesn't exist, creating new record`);
                const record  = new this.userModel({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    provider: PROVIDER.GOOGLE,
                    role: USER_ROLE.FREE,                    
                    accessToken: user.accessToken,
                    subscribed: 0,
                    subscriptionType: USER_SUBSCRIPTION_TYPE.NONE
                });
                await record.save();
                resolve(user.accessToken);
            } catch (error) {                
                reject(`Creating new record`);
            }
        });
        return promise;
    }

    async googleLogin (req: any): Promise<any> {
        const promise = new Promise <any> (async (resolve: (accessToken: string) => void, reject: (error: any) => void): Promise <any> => {
            if (!req.user) {
                this.logger.verbose(`Unable to fetch Google profile`);
                reject(new BadRequestException(`Invalid Username / Password`));            
            } else {
                this.logger.verbose(`Able to fetch Google profile - ${req?.user}`);
                try {
                    if (await this._checkIfGoogleRecordExists(req.user.email)) {
                        // Update the record
                        const accessToken: string = await this._updateAccessTokenByEmail(req.user.email, req.user.accessToken);
                        resolve(accessToken);
                    } else {
                        const accessToken: string = await this._createNewRecord(req.user);
                        resolve(accessToken);
                    }
                } catch (error) {
                    this.logger.verbose(`Error while signing up: ${JSON.stringify(error)}`);
                    reject(new InternalServerErrorException(error));
                }
            }
        });
        return promise;
    }

    /**
     * Retrieve user details by accessToken
     * ONLY to be used internally, not mapped to APIs
     * @param id {string}
     * @returns Promise {IDisplayUser}
     */
     async getUserById (id: string): Promise<IDisplayUser> {
        try {
            const user = await this.userModel.findOne({_id: id});
            return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                subscribed: user.subscribed,
                subscriptionType: user.subscriptionType
            };
        } catch (err) {
            throw new UnauthorizedException('Invalid User / user not authorized');
        }
    }


    /**
     * Validate user role
     * ONLY to be used internally, not mapped to APIs
     * @param id {string}
     * @returns Promise {Boolean}
     */
    async checkUserRole(id: string, role: USER_ROLE): Promise<Boolean> {
        try {
            const user = await this.userModel.findOne({_id: id});
            return user.role === role;
        } catch (err) {
            throw new UnauthorizedException('Invalid User / user not authorized');
        }
    }

    /**
     * Update user subscription date by user Id
     * @param id {string} 
     * @returns Promise<string>
     */
    async updateSubscriptionDateById (id: string) : Promise<string> {
        const promise = new Promise <any> (async (resolve: (result: string) => void, reject: (error: string) => void): Promise <any> => {
            try {
                // this.logger.verbose(`User exists, updating record`);
                const record = await this.userModel.findOneAndUpdate({_id:id}, {
                    role: USER_ROLE.PREMIUM,
                    subscribed: Date.now(),
                    subscriptionType: USER_SUBSCRIPTION_TYPE.ONE_TIME
                },{new: true});
                // this.logger.verbose(`User record updated successfully`);
                resolve(`User ${JSON.stringify(record)} - subscription confirmed`);
            } catch (error) {
                // this.logger.verbose(`Error updating user record`);
                reject(`Error updating User subscription`);
            }
        });
        return promise;
    }

    /**
     * Retrieve user details by accessToken
     * ONLY to be used internally, not mapped to APIs
     * @param accessToken {string}
     */
    async getUserByToken (accessToken: string): Promise<IDisplayUser> {
        try {
            const user = await this.userModel.findOne({accessToken});
            return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                subscribed: user.subscribed,
                subscriptionType: user.subscriptionType
            };
        } catch (err) {
            throw new UnauthorizedException('Invalid User / user not authorized');
        }
    }

    /**
     * Logout user by accessToken
     * ONLY to be used internally, not mapped to APIs
     * @param accessToken {string}
     */
     async logout (accessToken: string): Promise<any> {
        const promise = new Promise <any> (async (resolve: (value: void) => void, reject: () => void): Promise <any> => {
            try {
                this.logger.verbose(`User exists, updating record`);
                const result = await this.userModel.findOneAndUpdate({accessToken}, {
                    accessToken: ''
                },{new: true});
                if (result.firstName) resolve();
                else reject();
            } catch (error) {                
                reject();
            }
        });
        return promise;
    }

    
}