import Card, {withVegLabel} from "./Card";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESLIST_URL1 } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import resList from "../utils/mockData";

// no key is unacceptable <<<<<<<<< atleast key = index value <<<<<<<<<<<< key = unique id (best practice)
const Body = () => {
    // Local State Variable
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const VegCard = withVegLabel(Card);

    console.log("Body rendered");
    
    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESLIST_URL1);
        const jsonData = await data.json();
        setListOfRes(jsonData?.data?.cards?.find(item => item.card?.card?.gridElements?.infoWithStyle?.restaurants).card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(jsonData?.data?.cards?.find(item => item.card?.card?.gridElements?.infoWithStyle?.restaurants).card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData);
    }

    // conditional rendering
    /*
    if(listOfRes.length === 0) {
        return <Shimmer />
    }
    */

    const onlineStatus = useOnlineStatus();

    const {setUserName} = useContext(UserContext);

    if(onlineStatus === false) return <h1>You're offline! Please check your internet</h1>

    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="inputDiv">
                <label>UserName: </label>
                <input className="inputBody" onChange={(e) => setUserName(e.target.value)} />
            </div> 
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
                {filteredRes.map(restaurant => 
                <Link 
                style={{textDecoration: "none"}}
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
                >
                    {restaurant.info.veg ? <VegCard resData={restaurant} /> : <Card resData={restaurant} />}
                </Link> )}
            </div>
        </div>
    );
};

export default Body;