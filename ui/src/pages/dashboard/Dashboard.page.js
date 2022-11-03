import React, { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
// custom
import {Footer} from '../../components/footer/Footer';
import {Header} from '../../components/header/Header';
import {UserInfoTable} from '../../components/table/UserInfoTable';
import {SimpleSpinner} from '../../components/loaders/SimpleSpinner';
import { selectUserInfo } from '../../common/state/info/User.slice';

function DashboardPage () {    
    const userInfo = useSelector(selectUserInfo);
    const [userList, setUserList] = useState([]);
    
    useEffect(()=>{
        setTimeout(()=>{
            const filterdInfo = userInfo.filter(item => (item.first_name.startsWith("G") 
                || item.last_name.startsWith("W")));
            setUserList(filterdInfo);                        
        },2000);
    },[userInfo]);

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