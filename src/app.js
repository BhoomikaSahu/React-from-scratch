import ReactDOM from 'react-dom/client'
import {Header} from './component/Header';
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Contact from './component/Contact';
import Error from './component/Error';
import RestaurantDetails from './component/RestaurantDetails';

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/res-details/:id',
                element: <RestaurantDetails /> 
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)