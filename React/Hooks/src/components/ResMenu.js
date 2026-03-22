import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { STAR, CDN_URL, PLACEHOLDER } from "../utils/constants";
import { useParams } from 'react-router';
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {

    const {resId} = useParams();

    const resInfo = useResMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const {name, avgRating, costForTwoMessage, cuisines, totalRatingsString, locality, sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(item => item?.card?.card?.itemCards)?.card?.card ;
    
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
                            <img className="itemImg" src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : PLACEHOLDER} alt={item.card.info.name} />
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResMenu;