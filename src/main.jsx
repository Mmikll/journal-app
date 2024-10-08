import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'

<<<<<<< HEAD
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter> 
  </StrictMode>,
=======
import { JournalApp } from './JournalApp';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
>>>>>>> 2111d71 (authentication created)
)
