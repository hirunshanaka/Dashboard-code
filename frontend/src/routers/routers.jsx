import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../App";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Home from "../Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/Home",
      element: <Home/>,
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children:[
          {
            path: "/admin/dashboard",
           element: <Dashboard/>
          },
          {
            path: "/admin/dashboard/upload",
           element: <UploadBook/>
          },
          {
            path: "/admin/dashboard/manage",
           element: <ManageBook/>
          },
          {
            path: "/admin/dashboard/edit-books/:id",
           element: <EditBook/>,
           loader:({params})=> fetch ('http://loaclhost:5000/book/${params.id}')
          }
        ]
      
    }
  ]);
  export  default router;