/* eslint-disable react-refresh/only-export-components */
import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import About from "./components/AboutUs";
import Help from './components/Help';
import AppLayout from './App';
import "./index.css";
import Body from "./components/Body";
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import {Provider} from "react-redux";
import AppStore from './utils/appStore';
import Cart from './components/Cart';
// import { grocery } from './components/Grocery';

// * Modularity is also known as:
// * Chunking
// * Code Splitting
// * Dynamic Bundling
// * Lazy Loading
// * On-Demand Loading
// * Dynamic Import

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import("./components/AboutUs"));

const appRouter = createBrowserRouter([
  {
   path:'/',
   element: <AppLayout/>,
   children:[
    {
      path:'/',
      element:<Body />
    },
    {
      path:'/about',
      element: (
        <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense> 
      )
     },
     {
      path:'/grocery',
      element:(
      <Suspense fallback={<h1>Loading...</h1>}>
      <Grocery />
    </Suspense>
    ), 
     },
     {
       path:"/Help",
       element:<Help />
     },{
      path: "/Cart",
      element : <Cart />
     },
     {
      path:"/restaurants/:resId",
      element:<RestaurantMenu />
     }
   ],
   errorElement: <Error />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={AppStore}>
    {<RouterProvider router={appRouter}/>}
    </Provider>
  </React.StrictMode>,
)
