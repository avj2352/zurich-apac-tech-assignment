import { createStore, combineReducers } from "redux";
import { userInfoReducer } from "./info/user";
import { userProfileReducer } from "./profile/user";

export enum ACTION_TYPE {
    APP_GENERAL = 'app/general',    
};

export type IAppState = {
    version: string, 
    appName: string,
    github: string    
};

export const initialState: IAppState = {
    version: `0.1.0`,
    appName: `Zurich Technical Assignment`,    
    github: `https://github.com/avj2352/zurich-apac-tech-assignment`
};

export function appReducer(state = initialState, action: {type: ACTION_TYPE, payload: any}) {
    return state;
}

export const store = createStore(combineReducers({
    app: appReducer,
    userProfile: userProfileReducer,
    userInfo: userInfoReducer
}));