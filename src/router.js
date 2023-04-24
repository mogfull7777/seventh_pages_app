import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Movies from "./pages/Movies";
import MoviesDetail from "./pages/MoviesDetail";
import News from "./pages/News";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Movies />
    },
    {
        path : "/news",
        element : <News />
    },
    {
        path : "/movies/:moviesid",
        element : <MoviesDetail />
    }
]);

export default Router;