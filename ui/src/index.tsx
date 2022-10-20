import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// custom
import {store} from './common/state/store';
import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer/>
    </Provider>
  </React.StrictMode>
);
