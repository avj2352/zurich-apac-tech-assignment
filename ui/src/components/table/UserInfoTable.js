import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Row } from '../common-styled/Common.styled';

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

export function UserInfoTable ({userInfoList, page, total, onPageTurn}) {    
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
                    {userInfoList.length > 0 && userInfoList.map((item, index) => (
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
                    disabled={page == 1}
                    onClick={()=> onPageTurn(page - 1)}
                    className='secondary outline'>Prev</button>
                <p>Page: {page} / {total}</p>
                <button
                    disabled={page == total}
                    onClick={()=> onPageTurn(page + 1)} 
                    className='secondary outline'>Next</button>
            </Row>
        </TableContainerStyled>
    </React.Fragment>;
};

UserInfoTable.propTypes = {
    userInfoList: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onPageTurn: PropTypes.func.isRequired
};