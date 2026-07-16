import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/create-account", element: <CreateAccount/>},
    {path: "/login", element: <Login/>},
    {path: "/dashboard", element: <Dashboard/>},
])
    