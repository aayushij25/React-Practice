import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search 
 *  - Restaurant Container
 *      - Restaurant Cards
 *          - Image
 *          - Name of restaurant, Star rating, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const logo = new URL('/img/logo-horizontal.png', import.meta.url);
const home = new URL('/img/home.png', import.meta.url);
const about = new URL('/img/about.png', import.meta.url);
const contact = new URL('/img/contact.png', import.meta.url);
const cart = new URL('/img/cart.png', import.meta.url);
const star = new URL('/img/star.png', import.meta.url);

const Header = () => (
    <div className="header">
        <img className="logo" src={logo} alt="Website logo"/>
        <div className="navbar">
            <ul>
                <li>
                    <img src={home} alt="Home" />
                    <div>Home</div>
                </li>
                <li>
                    <img src={about} alt="About Us" />
                    <div>About Us</div>
                </li>
                <li>
                    <img src={contact} alt="Contact Us" />
                    <div>Contact Us</div>
                </li>
                <li>
                    <img src={cart} alt="Cart" />
                    <div>Cart</div>
                </li>
            </ul>
        </div>  
    </div>
);

const Card = () => (
    <div className="card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rcxwtceo5hqiabrqtgym" alt="Burger Bar" />
        <h4>Burger Bar</h4>
        <div className="star-eta">
            <img src={star} alt="Star" />
            <p>4.6</p>
            <ul>
                <li>20-25 mins</li>
            </ul>
        </div>
        <div className="card-text">Burgers, American, Fast Food,...</div>
        <div className="card-text">Ramdaspeth</div>
    </div>
);

const Body = () => (
    <div className="body">
        <div className="search">
            <textarea className="search-box" />
            <div className="search-button">Search</div>
        </div>
        <div className="card-container">
            <Card />
            <Card />
        </div>
    </div>
);

const AppLayout = () => (
    <div className="app-container">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);