import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { IUserInfo, IUserInfoRecord } from '../../common/state/info/user';
import { Row } from '../common/CommonStyled';

type IUserInfoTableProps = {
    onPageTurn: (page: number) => void    
};

const TableContainerStyled = styled.section`
    width: 100%;
    overflow-y: scroll;
    padding: 15px;
    margin-top: 10px;
    display: grid;
    place-items: center;

    img {
        max-width: 30px;
        border-radius: 50%;
    }
`;

const UserInfoTable: FunctionComponent<IUserInfoTableProps> = ({onPageTurn}) => {
    const userInfo: IUserInfo = useSelector(({userInfo}:{userInfo: IUserInfo}) => userInfo);
    return <React.Fragment>
        <TableContainerStyled>
            <table role="grid">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>                        
                    </tr>
                </thead>
                <tbody>                    
                    {userInfo.data.length > 0 && userInfo.data.map((item: IUserInfoRecord, index: number) => (
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <img src={item.avatar} alt="avatar"/>
                            </td>
                        </tr>
                    ))}
                </tbody>                
            </table>
            <Row>
                <button
                    disabled={userInfo.page == 1}
                    onClick={()=> onPageTurn(userInfo.page - 1)}
                    className='secondary outline'>Prev</button>
                <p>Page: {userInfo.page} / {userInfo.total_pages}</p>
                <button
                    disabled={userInfo.page == userInfo.total_pages}
                    onClick={()=> onPageTurn(userInfo.page + 1)} 
                    className='secondary outline'>Next</button>
            </Row>
        </TableContainerStyled>
    </React.Fragment>;
};

export default UserInfoTable;