import React from 'react';
import ReacatDOM from 'react-dom/client';
import { Router, RouterProvider } from 'react-router-dom'; // Ensure you're importing RouterProvider
import './index.css';
import router from './routers/routers.jsx'; // Make sure router is imported

ReacatDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
