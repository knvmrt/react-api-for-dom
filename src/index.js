import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from "./context/ThemeContext"
import "./pages/scss/theme.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <ThemeProvider>
  <App />
  </ThemeProvider>
  
  </BrowserRouter>
  
);
