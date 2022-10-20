export type IDisplayUser = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    role: 'admin' | 'free' | 'premium',
    subscriptionType: string
};

export enum USER_ACTION_TYPE {    
    USER_PROFILE_UPDATE = 'user/profile-update',
    TOKEN_UPDATE = 'user/token-update',
};

export type IUserState = {
    token: string,
    profile: IDisplayUser
};

function getInitialUserSetting(): IUserState {
    return {
        token: '',
        profile: {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            role: 'free' ,
            subscriptionType: ''
        }        
    };
}

export function userProfileReducer(state = getInitialUserSetting(), action: {type: USER_ACTION_TYPE, payload: any}) {
    switch (action.type) {
        case USER_ACTION_TYPE.USER_PROFILE_UPDATE:
            return {...state, profile: action.payload};
        case USER_ACTION_TYPE.TOKEN_UPDATE:
            return {...state, token: action.payload};
        default:
            return state;
    }
}