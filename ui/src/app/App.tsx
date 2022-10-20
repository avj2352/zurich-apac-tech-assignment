import styled from '@emotion/styled';
import React, {FunctionComponent, useState} from 'react';
import Footer from '../components/footer/Footer';
import RouterApp from '../router/RouterApp';
// custom
import {removeLocalStorageItem, useLocalStorageState} from '../common/helpers/LocalStorage';
import {useDispatch, useSelector} from 'react-redux';
import {IDisplayUser, IUserState, USER_ACTION_TYPE} from '../common/state/profile/user';
import { getUserDetails } from '../common/async/AsyncCalls';
import { toast } from 'react-toastify';
import SimpleSpinner from '../components/loaders/SimpleSpinner';

const App : FunctionComponent = () => {

    const [profile, setProfile] = useLocalStorageState(`profile`, '');
    const [isLoading, toggleLoading] = useState(false);
    const userState = useSelector(({userProfile} : {
        userProfile: IUserState
    }) => userProfile.profile);
    
    const userDispatch : (data : {
        type: USER_ACTION_TYPE,
        payload: any
    }) => void = useDispatch();

    // get auth token
    const token = useLocalStorageState(`token`, () => {
        if (window.location.search && window.location.search.length > 0) {
            const SEARCH_STRING = `?accessToken=`.length;
            return window
                .location
                .search
                .substring(SEARCH_STRING);
        } else 
            window.location.href = `#/`;
        }
    )[0];

    const redirectDashboard = () => window.location.href = `#/dashboard`;

    const checkUserDetails = React.useCallback(async() => {
        toggleLoading(true);
        try {
            userDispatch({type: USER_ACTION_TYPE.TOKEN_UPDATE, payload: token});
            if (userState.firstName === '' && userState.lastName === '') {
                const response = await getUserDetails(token);
                const result : IDisplayUser = response.data;
                setProfile(result);
                toast(`Welcome ${result.firstName} ${result.lastName}`);
                userDispatch({type: USER_ACTION_TYPE.USER_PROFILE_UPDATE, payload: result});
                redirectDashboard();
                toggleLoading(false);
            } else {
                userDispatch({type: USER_ACTION_TYPE.USER_PROFILE_UPDATE, payload: profile});
                toast(`Welcome ${profile.firstName} ${profile.lastName}`);
                redirectDashboard();
                toggleLoading(false);
            }
        } catch (_) {
            // console.log(`Error fetching User details`);
            removeLocalStorageItem(`token`);
            removeLocalStorageItem(`profile`);
            toggleLoading(false);
        }
    }, [token, profile]);

    React.useEffect(() => {
        checkUserDetails();
    }, []);

    return (
        <div className="App">            
            <RouterApp/>            
            <SimpleSpinner isLoading={isLoading}/>
        </div>
    );
};

export default App;
