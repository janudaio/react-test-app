import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
import Test from './components/Test';
// import Contacts from './components/Contacts';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            <Test />
            {/* <App /> */}
        </>
    </StrictMode>
);
