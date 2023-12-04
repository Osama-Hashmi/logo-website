import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Branding from "../Pages/Branding"
import Packages from "../Pages/Packages"
import Portfolio from "../Pages/Portfolio"
import Website from "../Pages/Website"
import Why from "../Pages/Why"
import Works from "../Pages/Works"


const routes = createBrowserRouter([
    {path: "/", element: <App/> }, 
    {path: "/Website", element: <Website/> },
    {path: "/Branding", element: <Branding/> },
    {path: "/How-it-works", element: <Works/> },
    {path: "/Why-choose-us", element: <Why/> },
    {path: "/Packages", element: <Packages/> },
    {path: "/Portfolio", element: <Portfolio/> }
])

export default routes


