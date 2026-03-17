import { useEffect, useState } from "react";
import { Link } from "react-router";
import { LOGO } from "../utils/constants";
import { HOME } from "../utils/constants";
import { ABOUT } from "../utils/constants";
import { CONTACT } from "../utils/constants";
import { CART } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // console.log("Header Called");

    const onlineStatus = useOnlineStatus();

    const [loginBtn, setLoginBtn] = useState("Login");
    useEffect(() => {
        // console.log("useEffect called");
    }, []);

    return (
        <div className="header">
            <img className="logo" src={LOGO} alt="Website logo"/>
            <div className="navbar">
                <ul>
                    <li>
                        <img src={HOME} alt="Home" />
                        <div><Link to="/" className="navbar-items">Home</Link></div>
                    </li>
                    <li>
                        <img src={ABOUT} alt="About Us" />
                        <div><Link to="/about" className="navbar-items">About Us</Link></div>
                    </li>
                    <li>
                        <img src={CONTACT} alt="Contact Us" />
                        <div><Link to="/contact" className="navbar-items">Contact Us</Link></div>
                    </li>
                    <li>
                        <div><Link to="/groceries" className="navbar-items">Groceries</Link></div>
                    </li>
                    <li>
                        <img src={CART} alt="Cart" />
                        <div>Cart</div>
                    </li>
                    <li>
                        <div>{onlineStatus ? 'Online 🟢' : 'Offline 🔴'}</div>
                    </li>
                    <li>
                        <div 
                        onClick={() => {
                            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                        }} 
                        className="login-btn"
                        >
                            {loginBtn}
                        </div>
                    </li>
                </ul>
            </div>  
        </div>
    );
}

export default Header;