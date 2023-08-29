import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { NotesProvider } from './contexts/NotesContext.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotesProvider>
  </React.StrictMode>,
)
