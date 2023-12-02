import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Website from "../Pages/Website"

const routes = createBrowserRouter([
    {path: "/", element: <App/> }, 
    {path: "/Website", element: <Website/> }
])

export default routes


