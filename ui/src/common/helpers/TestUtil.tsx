import React, { FunctionComponent } from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
// custom
import { store } from '../state/store';
import { ToastContainer } from 'react-toastify';

const history = createMemoryHistory();

// react 18.x support for FC
// https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
type Props = {
    children?: React.ReactNode
};

const ReduxProvider: FunctionComponent<Props> =  ({children}): JSX.Element => {
    window.matchMedia = jest.fn().mockImplementation(query => {
        return {
          matches: false,
          media: '',
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
    });
    return <Provider store={store}>        
                <Router history={history}>
                    {children}
                </Router>  
                <ToastContainer/>      
    </Provider>;
};

const reduxRender = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options?: []) => {
    if (options) {return render(ui, {wrapper: ReduxProvider}, ...options); }
    else return render(ui, {wrapper: ReduxProvider});
};

export * from "@testing-library/react";
export { reduxRender as render }; 
