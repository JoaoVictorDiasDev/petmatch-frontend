import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Pets from './views/pets.jsx'
import Login from './views/login.jsx'
// import TopPets from '../../top_pets.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pets",
    element: <Pets />,
  },
  // {
  //   path: "/top-pets",
  //   element: <TopPets/>,
  // },
  {
    path: "/login",
    element: <Login/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

