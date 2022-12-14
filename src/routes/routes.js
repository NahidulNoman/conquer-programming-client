import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CourseShareComponents/CheckOut";
import CourseDetails from "../components/CourseShareComponents/CourseDetails";
import Courses from "../components/CourseShareComponents/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/courseDetails/:id",
        loader: async ({ params }) =>
          fetch(
            `https://conquer-programming-server.vercel.app/courseDetails/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/checkOut/:id",
        loader: async ({ params }) =>
          fetch(
            `https://conquer-programming-server.vercel.app/courseDetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
