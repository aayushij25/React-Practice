import { useState } from "react";
import { LOGO } from "../utils/constants";
import { HOME } from "../utils/constants";
import { ABOUT } from "../utils/constants";
import { CONTACT } from "../utils/constants";
import { CART } from "../utils/constants";

const Header = () => {
    console.log("Header Called");

    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <img className="logo" src={LOGO} alt="Website logo"/>
            <div className="navbar">
                <ul>
                    <li>
                        <img src={HOME} alt="Home" />
                        <div>Home</div>
                    </li>
                    <li>
                        <img src={ABOUT} alt="About Us" />
                        <div>About Us</div>
                    </li>
                    <li>
                        <img src={CONTACT} alt="Contact Us" />
                        <div>Contact Us</div>
                    </li>
                    <li>
                        <img src={CART} alt="Cart" />
                        <div>Cart</div>
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