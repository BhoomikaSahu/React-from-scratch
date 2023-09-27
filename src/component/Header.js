import { APP_LOGO } from "../utils/constants";

export const Header = () => {
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;