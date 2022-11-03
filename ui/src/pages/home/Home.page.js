import styled from '@emotion/styled';
import React, {FunctionComponent, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { APP_INFO } from '../../common/helpers/App.constant';
import logo from './../../assets/img/logo.png';

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
        margin: 20px;
    }

    a {
        cursor: pointer;
    }
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button {
        margin: 4px 2px;
    }

    @media (max-width: 340px) {
        flex-direction: column;
    }
`;


function HomePage () {    
    const history = useHistory();

    function handleLogin(type) {
        if (type === 'signUp')
            history.push({pathname: '/signup'});
        else
            history.push({pathname: '/signin'})
    }

    function handleGithubLink () {
        window.open(APP_INFO.github);
    }

    return <ContainerStyled className='container'>
        <article className="grid">
        <div>
          <HeaderGroupStyled>
            <LogoImageStyled src={logo} alt='logo-img'/>            
            <h2>{APP_INFO.appName}</h2>            
            <Row>
                <button 
                    onClick={handleLogin.bind(null, 'signUp')}
                    className='primary'>Sign Up</button>
                <button
                    onClick={handleGithubLink}
                    className='secondary outline'>Github Repo</button>
            </Row>   
            <p>Already have an account?
                <a                    
                    rel='login-button'
                    onClick={handleLogin.bind(null, 'signIn')}>
                     Sign In using your account
                </a>
            </p>         
          </HeaderGroupStyled>          
        </div>        
      </article>
    </ContainerStyled>
}

export default HomePage;