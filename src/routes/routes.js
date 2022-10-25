import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/CourseShareComponents/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
 
export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage> ,
        children : [
            {
                path : '/courses',
                element : <Courses></Courses>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/faq',
                element : <FAQ></FAQ>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signUp',
                element : <SignUp></SignUp>
            },
            {
               
            }
        ]
    }
])


// "start": "node index.js",
//     "startDev": "nodemon index.js",