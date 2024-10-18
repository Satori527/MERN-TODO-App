import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import store from './store/store.js';


const  theme = createTheme({

  palette: {
    primary: {
      main: '#f0f0f0'
    },
    secondary:{
      main: "#000000"
    },
    warning: {
      main: '#cacf00'
    },
    info: {
      main: '#1f3faf'
    },
    success: {
      main: '#00a300'
    },
    error: {
      main: '#cf0000'
    },
    action: {
      selectedOpacity: 0.9
    }


  },
  shape: {
    borderRadius: '8px'
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
