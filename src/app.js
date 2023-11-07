import ReactDOM from 'react-dom/client'
import {Header} from './component/Header';
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Contact from './component/Contact';
import Error from './component/Error';

const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)