import React from 'react';
import ReactDOM from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
import './index.css';
import Routes from './routes/Index.tsx'
import "tw-elements-react/dist/css/tw-elements-react.min.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
