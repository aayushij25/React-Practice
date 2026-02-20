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

// props = {resName, resImg} can be replaced
const Card = (props) => {
    const {resImg, resName, resRating, resEta, resFood, resLoc} = props
    return (
        <div className="card">
            <img src={resImg} alt="Burger Bar" />
            <h4>{resName}</h4>
            <div className="star-eta">
                <img src={star} alt="Star" />
                <p>{resRating}</p>
                <ul>
                    <li>{resEta}</li>
                </ul>
            </div>
            <div className="card-text">{resFood}</div>
            <div className="card-text">{resLoc}</div>
        </div>
    );
};

const Body = () => (
    <div className="body">
        <div className="search">
            <textarea className="search-box" />
            <div className="search-button">Search</div>
        </div>
        <div className="card-container">
            <Card 
            resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rcxwtceo5hqiabrqtgym" 
            resName="Burger Bar"
            resRating="4.6"
            resEta="20-25 mins"
            resFood="Burgers, American, Fast Food,..."
            resLoc="Ramdaspeth"
            />
            <Card 
            resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/b46c8aeb-0135-4530-9318-fa556c75745b_53087.jpg" 
            resName="Three Beans"
            resRating="4.3"
            resEta="25-30 mins"
            resFood="Pizzas, Pastas, Momos, Bev..."
            resLoc="Dharampeth"
            />
            <Card 
            resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/8/84cedc12-6489-4973-9023-5a327821e976_693368.jpg" 
            resName="Nothing Before Coffee"
            resRating="4.4"
            resEta="20-25 mins"
            resFood="Beverages, Dessert, Snacks, Fas..."
            resLoc="Dharampeth"
            />
            <Card 
            resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/11/387926fa-cd28-4c42-b8ad-db8f620f22b9_866833.ss.jpg" 
            resName="Tipsy Turk"
            resRating="4.4"
            resEta="20-25 mins"
            resFood="Turkish, Mughlai, Middle Eas..."
            resLoc="Sadar"
            />
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