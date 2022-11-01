import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../../common/state/info/user.slice';
import userProfileReducer from '../../common/state/profile/profile.slice';


export const store = configureStore({
  reducer: {    
    info: userInfoReducer,
    profile: userProfileReducer
  },
});
