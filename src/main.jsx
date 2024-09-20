import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { reduxData } from './components/redux/tickets/store.js';
import CustomImage from './components/image.jsx';
import { SecondaryMainHeading } from './components/heading.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider   store={reduxData}>
<CustomImage/>
<SecondaryMainHeading/>
    </Provider>
  </StrictMode>,
)
