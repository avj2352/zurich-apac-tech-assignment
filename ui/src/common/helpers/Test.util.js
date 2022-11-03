import React from 'react';
export * from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';
// custom
import {store} from '../../common/state/store';

const history = createMemoryHistory();

export function ReduxProvider ({children}) {    
    return <Provider store={store}>        
                <Router history={history}>
                    {children}
                    <ToastContainer/>
                </Router>  
                <ToastContainer/>      
    </Provider>;
}

export function reduxRender (ui, options) {
    if (options) {return render(ui, {wrapper: ReduxProvider}, ...options); }
    else return render(ui, {wrapper: ReduxProvider});
};


export { reduxRender as render }; 