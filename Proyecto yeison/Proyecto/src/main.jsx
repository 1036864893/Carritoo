import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { GlobalStateProvider } from './GlobalStateProvider'; 
import './App.css'; 

createRoot(document.getElementById('root')).render(
    <GlobalStateProvider>
        <App />
    </GlobalStateProvider>
);
