import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Population from "./pages/Population.jsx";
import Crypto from "./pages/Crypto.jsx";
import Wallet from "./pages/Wallet.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/population",
                element: <Population />,
            },
            {
                path: "/crypto",
                element: <Crypto />,
            },
            {
                path: "/wallet",
                element: <Wallet />,
            },
        ],

        errorElement: <NotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
