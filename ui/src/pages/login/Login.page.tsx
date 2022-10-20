import styled from '@emotion/styled';
import React, {FunctionComponent, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../common/state/store';
import logo from './../../assets/img/logo.png';
import { AiFillGoogleCircle } from 'react-icons/ai'
import { loginToGoogle } from '../../common/async/AsyncCalls';
import { Row } from '../../components/common/CommonStyled';

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


type ILoginPageProps = {
    type: 'signIn' | 'signUp'
};


const LoginPage: FunctionComponent<ILoginPageProps> = ({type}) => {
    // states
    const appState = useSelector(({app} : {app: IAppState}) => app);   
    const loginTypeText = type === 'signIn' ? 'Sign In' : 'Sign Up';

    // evt handlers


    return <ContainerStyled className='container'>
        <article className="grid">
        <div>
          <HeaderGroupStyled>
            <LogoImageStyled src={logo} alt='logo-img'/>            
            <h2>{appState.appName}</h2>
            <p>{loginTypeText} using your Google account</p>
            <Row>
                <button
                    onClick={loginToGoogle} 
                    className='primary'>{loginTypeText} using <AiFillGoogleCircle/></button>                
            </Row>            
          </HeaderGroupStyled>          
        </div>        
      </article>
    </ContainerStyled>
};

export default LoginPage;