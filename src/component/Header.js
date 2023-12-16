import { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="logo"
            src={APP_LOGO}
          />
        </div>
        <div className="nav-links">
          <ul>
            <li>Online Status:{onlineStatus ?'🟢':'🔴'}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>
            <button onClick={() => setLoginBtn(loginBtn==='Login'?'Logout':'Login')}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;