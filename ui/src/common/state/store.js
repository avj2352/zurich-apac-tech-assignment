import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './info/User.slice';
import userProfileReducer from './profile/Profile.slice';


export const store = configureStore({
  reducer: {    
    info: userInfoReducer,
    userProfile: userProfileReducer
  },
});
