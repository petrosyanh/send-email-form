import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/reset.scss';
import './styles/_variables.scss';
import './styles/global.scss';
import { ContactsPage } from './components/pages/ContactsPage';
import { NotFoundPage404 } from './components/pages/NotFoundPage404';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='' element={<Navigate to="/contacts" replace />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/aboutUs' element={<NotFoundPage404 />} />
          <Route path='/projects' element={<NotFoundPage404 />} />
          <Route path='/newProject' element={<NotFoundPage404 />} />
          <Route path='/home' element={<NotFoundPage404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
