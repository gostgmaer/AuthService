import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import "./App.css";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";


const Router = createBrowserRouter([
  { path: "", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
  { path: "/password", element: <Password /> },
  { path: "/profile", element: <Profile /> },
  { path: "/recovery", element: <Recovery /> },
  { path: "/reset", element: <Reset /> },
]);




function App() {
  return (
    <main className="App">
      <RouterProvider router={Router}></RouterProvider>
      <Toaster position='top-center' reverseOrder={false} />
    </main>
  );
}

export default App;
