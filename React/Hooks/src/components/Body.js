import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

// no key is unacceptable <<<<<<<<< atleast key = index value <<<<<<<<<<<< key = unique id (best practice)
const Body = () => {
    // Local State Variable
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("Body rendered");
    
    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1378715&lng=79.1365083&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfRes(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData);
    }

    // conditional rendering
    /*
    if(listOfRes.length === 0) {
        return <Shimmer />
    }
    */

    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input 
                className="search-box" 
                type="text" 
                value={searchText} 
                onChange={(e) => 
                    setSearchText(e.target.value)
                }
                />
                <div 
                className="search-button"
                onClick={() => {
                    console.log(searchText);
                    const filteredResList = listOfRes.filter((res) => 
                        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRes(filteredResList);
                }}
                >
                    Search
                </div>
                <div 
                className="filter-btn" 
                onClick={() => {
                    console.log("Btn clicked");
                    const filteredLst = listOfRes.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredRes(filteredLst);
                }}>
                    Top Restaurants
                </div>
            </div>
            
            <div className="card-container">
                {filteredRes.map(restaurant => <Card resData={restaurant} key={restaurant.info.id} />)}
            </div>
        </div>
    );
};

export default Body;