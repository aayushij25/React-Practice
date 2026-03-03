import Card from "./Card";
import { useState } from "react";
import resList from "../utils/mockData";

// no key is unacceptable <<<<<<<<< atleast key = index value <<<<<<<<<<<< key = unique id (best practice)
const Body = () => {
    // Local State Variable
    const [listOfRes, setListOfRes] = useState(resList);
    
    return (
        <div className="body">
            <div className="search">
                <textarea className="search-box" />
                <div className="search-button">Search</div>
            </div>
            <div 
            className="filter-btn" 
            onClick={() => {
                console.log("Btn clicked");
                const filteredLst = listOfRes.filter(
                    (res) => res.info.avgRating > 4.5
                );
                setListOfRes(filteredLst);
            }}>
                Top Restaurants
            </div>
            <div className="card-container">
                {listOfRes.map(restaurant => <Card resData={restaurant} key={restaurant.info.id} />)}
            </div>
        </div>
    );
};

export default Body;