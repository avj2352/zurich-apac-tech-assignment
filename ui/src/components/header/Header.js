import React from 'react';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';

const Navbar  = styled.nav`
    background-color: var(--dark-night-grey);
`;

export function Header () {
    const history = useHistory();

    function handleLogout() {
        history.push({pathname:'/'});
    }
    return <React.Fragment>
        <Navbar className="container-fluid">
            <ul>
                <li><a className="primary"><strong>Zurich Technical Assignment</strong></a></li>
            </ul>
            <ul>
                <li>
                    <details role="list" dir="rtl">
                        <summary aria-haspopup="listbox" role="link" className="secondary"></summary>
                        <ul role="listbox">                            
                            <li><a href="https://pramod-profile.net">My Profile</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </Navbar>
    </React.Fragment>;
};