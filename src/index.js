import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SideBarProvider } from './Context/contextProvider';
import { ThemeProvider } from './Context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
reportWebVitals(console.log);
root.render(
  <BrowserRouter>
  <SideBarProvider>
    <ThemeProvider>
<App />
    </ThemeProvider>
  </SideBarProvider>
  </BrowserRouter>
    
);
reportWebVitals();
