
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './/Styles/home.scss';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter basename = {process.env.PUBLIC_URL}>

   
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </BrowserRouter>
);


