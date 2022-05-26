import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@material-ui/core'

import './index.css';
import App from './components/App';

const theme = createTheme({
    palette:{
        primary:{
            main : '#33A6B2'
        },
        secondary:{
            main: '#da61bf'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);