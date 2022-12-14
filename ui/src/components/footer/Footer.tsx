import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { IAppState } from '../../common/state/store';

const FooterStyled = styled.footer`
  /* border: 1px solid red; */  
  display: flex;
  background-color: var(--dark-night-grey);
  
  justify-content: center;
  padding: 15px 15px;
  position: fixed;
  bottom: 0;
`;

const Footer: FunctionComponent = () => {
    const appState = useSelector(({app} : {app: IAppState}) => app);
    return <FooterStyled className="container-fluid">
    <small>
      v {appState.version}. Built with ❤️ <a 
        href="https://picocss.com" 
        className="secondary"
        data-tooltip='minimalist CSS design library'>Pico</a> 
      •&nbsp;<a 
        href="https://github.com/avj2352/zurich-apac-tech-assignment" 
        className="secondary"
        data-tooltip='visit source code on Github repo'>Github Repo</a>
      •&nbsp;<a 
        href="https://pramod-profile.net" 
        className="secondary"
        data-tooltip='visit my profile website'>My Profile</a>
    </small>
  </FooterStyled>;
};

export default Footer;