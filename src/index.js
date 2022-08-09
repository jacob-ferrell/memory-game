import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import garrison from './character-images/garrison.webp';
import butters from './character-images/butters.webp';
import cartman from './character-images/cartman.webp';
import hankey from './character-images/hankey.webp';
import kenny from './character-images/kenny.webp';
import kyle from './character-images/kyle.webp';
import mackey from './character-images/mackey.webp';
import shelly from './character-images/shelly.webp';
import slave from './character-images/slave.webp';
import token from './character-images/token.webp';
import wendy from './character-images/wendy.webp';
import tweek from './character-images/tweek.webp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App characters={[
    garrison, butters, cartman, hankey, kenny, 
    kyle, mackey, shelly, slave, tweek, token, wendy
  ]}/>
  </React.StrictMode>
);


