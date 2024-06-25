import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SideBarProvider } from './Context/contextProvider';
import { registerLicense } from '@syncfusion/ej2-base';
import { ThemeProvider } from './Context/themeContext';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXlccXRSR2dZVkN3X0Q=');

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
