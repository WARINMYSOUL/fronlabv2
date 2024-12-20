import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/input.css'
import App from './App.tsx'
import './styles/output.css'
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";
import './styles/ScrollBar.scss';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
