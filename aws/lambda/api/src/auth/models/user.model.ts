import { Schema } from 'mongoose';
import { PROVIDER, USER_ROLE, USER_SUBSCRIPTION_TYPE } from '../../common/enums';

export type IUser = {
    id?: string,
    firstName: string,   
    lastName: string,   
    email: string,
    provider: PROVIDER,
    role: USER_ROLE,    
    accessToken: string,
    subscribed: number,
    subscriptionType: USER_SUBSCRIPTION_TYPE
};

export type IDisplayUser = Pick<IUser, 'id' | 'firstName' | 'lastName' | 'email' | 'role' | 'subscribed' | 'subscriptionType'>;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Last name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },    
    provider: {
        type: String,
        required: 'OAuth Provider name required'
    },
    role: {
        type: String,
        default: USER_ROLE.FREE
    },
    accessToken: {
        type: String,
        default: ''
    },
    subscribed: {
        type: Number,
        default: 0
    },
    subscriptionType: {
        type: String,
        default: 'none'
    }
});