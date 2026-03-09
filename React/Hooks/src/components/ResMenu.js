import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { STAR, CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from 'react-router';

const ResMenu = () => {

    const {resId} = useParams();

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
        setResInfo(jsonData);
        console.log(jsonData);
    }

    if(resInfo === null) return <Shimmer />;

    const {name, avgRating, costForTwoMessage, cuisines, totalRatingsString, locality, sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (    
        <div>
            <div className="resMenu-container">
                <div className="resName">
                    <h1>{name}</h1>
                </div> 
                <div className="resMenu">  
                    <div className="resBox">
                        <div className="resInfo">
                            <img src={STAR} />
                            <div>{avgRating}</div>
                            <div>({totalRatingsString})</div>
                            <ul><li>{costForTwoMessage}</li></ul>
                        </div>
                        <div className="resCuisines">
                            {cuisines.join(", ")}
                        </div>
                        <div className="resLocality">
                            <strong>Outlet</strong> {locality}
                        </div>
                        <div className="resTime">
                            {sla.slaString}
                        </div>
                    </div>
                </div>
                <div className="resItems">
                    <ul className="resItem" >
                        {itemCards.map((item) => 
                        <li className="itemContainer" key={item.card.info.id}>
                            <div className="itemText">
                                <div className="itemName">{item.card.info.name}</div>
                                <div>{"Rs. "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</div> 
                            </div>
                            <img className="itemImg" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResMenu;