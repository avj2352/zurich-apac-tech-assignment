import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// custom
import { SimpleSpinner } from '../components/loaders/SimpleSpinner';
import { getUserDetails } from '../common/async/AsyncCalls';
import { useLocalStorageState, removeLocalStorageItem } from '../common/helpers/LocalStorage';
import { updateToken, updateProfile, selectUserProfile } from '../common/state/profile/Profile.slice';
import { RouterApp } from '../router/RouterApp';
import { fetchUserInfoAsync } from '../common/state/info/User.slice';


function App () {

    const [profile, setProfile] = useLocalStorageState(`profile`, '');
    const userState = useSelector(selectUserProfile);
    const [isLoading, toggleLoading] = useState(false);
    const dispatch = useDispatch();

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

    const getUserInfoDetails = useCallback(async()=>{
        if (token === undefined || token == '') return;
        // console.log('Fetching user info using token', token);
        dispatch(fetchUserInfoAsync(token));
    },[token]);

    const checkUserDetails = useCallback(async() => {
        toggleLoading(true);
        try {
            if (token === undefined) return;
            dispatch(updateToken(token));
            if (userState.firstName === '' && userState.lastName === '') {
                const result = await getUserDetails(token);                
                setProfile(result);
                toast(`Hi ${result.firstName} ${result.lastName}`);
                dispatch(updateProfile(result));
                redirectDashboard();                
            } else {
                dispatch(updateProfile(profile));
                toast(`Hi ${profile.firstName} ${profile.lastName}`);
                redirectDashboard();                
            }
        } catch (_) {
            // console.log(`Error fetching User details`);
            removeLocalStorageItem(`token`);
            removeLocalStorageItem(`profile`);            
        } finally {
            toggleLoading(false);
        }
    }, [token, profile]);

    useEffect(() => {
        checkUserDetails();
        getUserInfoDetails();
    }, []);

    return (
        <div className="App">            
            <RouterApp/>
            <SimpleSpinner isLoading={isLoading}/>
        </div>
    );
};

export default App;