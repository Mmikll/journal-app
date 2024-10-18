<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { JournalApp } from './JournalApp';
import { store } from './store';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter> 
  </StrictMode>,
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
)
