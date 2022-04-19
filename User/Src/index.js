/* Base React component connecting to user_index.html file */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Soon from './Pages/Soon';
import { createTheme, ThemeProvider } from '@mui/material';


const mainTheme = createTheme({
    /* Official dedicated theme of the Notation app */
    palette: {
        primary: {
            main: '#324e6a',
            dark: '#e5e5e5'
        },
        secondary: {
            main: '#ffffff',
            dark: '#1e1e21'
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    }
})

const Index = () => {
    /* The main node of the user application with the theme installed */
    return (
        <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
                {/* The base router  */}
                <Routes>
                    <Route index exact path='' element={<Soon />} />
                    <Route path='*' element={<Soon />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

const container = document.getElementById('js_base');
const root = createRoot(container);
root.render(<Index />)
