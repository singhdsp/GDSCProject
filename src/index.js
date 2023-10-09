import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import ViewPosts from './Pages/ViewPost';
import MyPosts from './Pages/MyPosts';
import CreatePost from './Pages/CreatePost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <MyPosts />
      },
      {
        path: "CreatePost",
        element: <CreatePost />
      }
    ]
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "SignUp",
    element: <SignUp />
  },
  {
    path: "ForgotPassword",
    element: <ForgotPassword />
  },
  {
    path: "Posts",
    element: <ViewPosts />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
