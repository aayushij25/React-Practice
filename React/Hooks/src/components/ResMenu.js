import { useState } from "react";
import Shimmer from "./Shimmer";
import { STAR, CDN_URL, PLACEHOLDER } from "../utils/constants";
import { useParams } from 'react-router';
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {

    const {resId} = useParams();

    const resInfo = useResMenu(resId);

    const [showIndexCategory, setShowIndexCategory] = useState(0);

    if(resInfo === null) return <Shimmer />;

    const {name, avgRating, costForTwoMessage, cuisines, totalRatingsString, locality, sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    
    const categories = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

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
                    {categories.map((category, index) => 
                    <ResCategory 
                        key={category.card?.card?.categoryId} 
                        data={category.card?.card} 
                        showCategoryItems={index === showIndexCategory ? true : false}
                        setShowIndexCategory={() => setShowIndexCategory(index)}
                    />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResMenu;