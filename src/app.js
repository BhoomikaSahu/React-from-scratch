import ReactDOM from 'react-dom/client'
import {Header} from './component/Header';
import Header from './component/Header';
import Body from './component/Body';

const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)