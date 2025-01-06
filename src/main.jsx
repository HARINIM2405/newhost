import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import Change from './Change.jsx';
import Apps from './Apps.jsx';
//import Apple from './Apple.jsx';
//import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
  </StrictMode>
);
