export type IUserInfo = {
    page: number,
    total_pages: number,
    data: IUserInfoRecord[]
};

export type IUserInfoRecord = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export enum USER_INFO_ACTION_TYPE {    
    USER_INFO_UPDATE = 'user-info/record-update',
    USER_INFO_PAGE_UPDATE = 'user-info/page-update'
};


function getInitialUserInfoSetting(): IUserInfo {
    return {
        page: 0,
        total_pages: 0,
        data: []
    };
}

export function userInfoReducer(state = getInitialUserInfoSetting(), action: {type: USER_INFO_ACTION_TYPE, payload: any}) {
    switch (action.type) {
        case USER_INFO_ACTION_TYPE.USER_INFO_UPDATE:
            return {...state, ...action.payload};
        case USER_INFO_ACTION_TYPE.USER_INFO_PAGE_UPDATE:
            return {...state, page: action.payload};
        default:
            return state;
    }
}