import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paths } from './paths';
import Login from './pages/login';
import Register from './pages/register';
// import { Provider } from 'react-redux';
// import { store } from "./app/store";
import {ConfigProvider, theme} from 'antd';

const router =  createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Employee</h1>
  },

  {
    path: Paths.login,
    element: <Login/>
  },

  {
    path: Paths.register,
    element: <Register/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <RouterProvider router={ router }/>
    </ConfigProvider>
  </React.StrictMode>,
)
