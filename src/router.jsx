import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            }
        ]
    }
])

export default myRouter