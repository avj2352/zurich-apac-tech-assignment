import React from 'react';
export * from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';
// custom
import { store } from '../state/store';

const history = createMemoryHistory();

export function ReduxProvider ({children}) {
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
}

export function reduxRender (ui, options) {
    if (options) {return render(ui, {wrapper: ReduxProvider}, ...options); }
    else return render(ui, {wrapper: ReduxProvider});
};


export { reduxRender as render }; 