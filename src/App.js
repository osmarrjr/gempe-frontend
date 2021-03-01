import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';  
import store from './store/index';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
