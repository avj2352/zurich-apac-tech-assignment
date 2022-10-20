import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';
// custom
import { IUserState } from './../../common/state/profile/user';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../common/async/AsyncCalls';
import { IUserInfo, IUserInfoRecord, USER_INFO_ACTION_TYPE } from '../../common/state/info/user';
import UserInfoTable from '../../components/table/UserInfoTable';

const BodyStyled = styled.section``;

const DashboardPage: FunctionComponent = () => {
    // states
    const token: string = useSelector(({userProfile}:{userProfile: IUserState}) => userProfile.token);
    const userInfoDispatch : (data : {
        type: USER_INFO_ACTION_TYPE,
        payload: any
    }) => void = useDispatch();

    function handlePageTurn(page: number) {
        fetchUserInfo(page);
    }


    // lifecycle methods
    const fetchUserInfo = React.useCallback(async(page: number)=> {
        // console.log('Calling user info on page: ', page);
        try {
            const response = await getUserInfo(token, page);
            const userInfoResponse: IUserInfo = response.data as IUserInfo;
            // Filter based on first name starts with "G" OR
            // last name starts with "W"
            userInfoResponse.data = userInfoResponse.data.filter((item: IUserInfoRecord) => (item.first_name.startsWith("G") 
                || item.last_name.startsWith("W")));
            // console.log('Filtered data is: ', userInfoResponse);
            userInfoDispatch({
                type: USER_INFO_ACTION_TYPE.USER_INFO_UPDATE,
                payload: userInfoResponse
            });
        } catch(err) {
            console.log('Unauthorized Error, redirecting', (err as Error).message);
            window.location.href = '/';
        }
    }, [token]);


    React.useEffect(()=>{
        if (token) fetchUserInfo(0);
    },[token]);

    return <React.Fragment>
       <Header/>
       <BodyStyled>
            <UserInfoTable onPageTurn={handlePageTurn}/>
       </BodyStyled>
       <Footer/>
    </React.Fragment>;
};

export default DashboardPage;