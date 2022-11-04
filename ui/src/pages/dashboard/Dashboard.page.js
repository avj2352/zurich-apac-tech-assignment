import React, { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
// custom
import {Footer} from '../../components/footer/Footer';
import {Header} from '../../components/header/Header';
import {UserInfoTable} from '../../components/table/UserInfoTable';
import {SimpleSpinner} from '../../components/loaders/SimpleSpinner';
import { selectUserInfo } from '../../common/state/info/User.slice';
import { selectUserProfileToken } from '../../common/state/profile/Profile.slice';
import { useHistory } from 'react-router-dom';

function DashboardPage () {    
    const userInfo = useSelector(selectUserInfo);
    const token = useSelector(selectUserProfileToken);
    const [userList, setUserList] = useState([]);
    const history = useHistory();
    
    useEffect(()=>{
        if (token === undefined || token == '') history.push({pathname: '/'});
        // TODO: check with WeeLee if filter is still required
        // const filteredResponse  = userInfo.filter(item => (item.first_name.startsWith("G") 
        // || item.last_name.startsWith("W")));
        setUserList(userInfo);
    },[userInfo, token]);

    return <React.Fragment>
       <Header/>
       <section>
            <SimpleSpinner isLoading={userList.length === 0}/>
            {Boolean(userList.length > 0) ? <UserInfoTable 
                    userInfoList={userList} 
                    page={0} total={0} onPageTurn={()=>console.log('Pagination not required')}/> : <React.Fragment/>}
        </section>
       <Footer/>
    </React.Fragment>;
}

export default DashboardPage;