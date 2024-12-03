import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./modules/home";
import Playground from "./modules/playground";
// import Login from "./components/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/problem/:problemName",
        element: <Playground />
    },
    {
        path: "/login",
        element: <>Login</>
    }
]);

function App() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <RouterProvider router={router} />;
        </div>
    );
}

export default App;
