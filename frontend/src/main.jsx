import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import myntraStore from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={myntraStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
