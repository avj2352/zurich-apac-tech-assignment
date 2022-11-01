import React from 'react';
import PropTypes from 'prop-types'
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { AiFillGoogleCircle } from 'react-icons/ai';
// custom
import { APP_INFO } from '../../common/helpers/app.constant';
import { fetchUserProfileAsync } from '../../common/state/profile/profile.slice';
import { Row } from '../../components/common-styled/CommonStyled';
import logo from './../../assets/img/logo.png';
import { useHistory } from 'react-router-dom';

const ContainerStyled = styled.main`
    display: grid;
    place-items: center;    
    height: 100vh;
    
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @media (max-width: 568px) {
        margin-bottom: 50px;
    }
  
    @-webkit-keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    } 
`;

const LogoImageStyled = styled.img`
    margin-bottom: 20px;
    border-radius: 10px;
    max-width: 50%;
    min-width: 100px;
`;

const HeaderGroupStyled = styled.hgroup`    
    display: grid;
    place-items: center;
    margin-bottom: 0;
    h2 {
        text-align: center;
    }
    p {
        margin: 10px;
    }
`;


function LoginPage ({type}) {
    // states
    const loginTypeText = type === 'signIn' ? 'Sign In' : 'Sign Up';
    const dispatch = useDispatch();
    const history = useHistory();

    // evt handlers
    function handleLogin() {
        dispatch(fetchUserProfileAsync());
        history.push({pathname: '/dashboard'})
    }

    return <ContainerStyled className='container'>
        <article className="grid">
        <div>
          <HeaderGroupStyled>
            <LogoImageStyled src={logo} alt='logo-img'/>            
            <h2>{APP_INFO.appName}</h2>
            <p>{loginTypeText} using your Google account</p>
            <Row>
                <button
                    onClick={handleLogin} 
                    className='primary'>{loginTypeText} using <AiFillGoogleCircle/></button>                
            </Row>            
          </HeaderGroupStyled>          
        </div>        
      </article>
    </ContainerStyled>
}

LoginPage.propTypes = {
    type: PropTypes.string.isRequired
};

export default LoginPage;