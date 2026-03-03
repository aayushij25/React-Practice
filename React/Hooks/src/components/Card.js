import { CDN_URL } from "../utils/constants";
import { STAR } from "../utils/constants";

// props = {resName, resImg} can be replaced
const Card = ({resData}) => {
    const {cloudinaryImageId, name, avgRating, sla, cuisines, locality} = resData?.info;

    return (
        <div className="card">
            <img src={CDN_URL + cloudinaryImageId} alt={name} />
            <h4>{name}</h4>
            <div className="star-eta">
                <img src={STAR} alt="Star" />
                <p>{avgRating}</p>
                <ul>
                    <li>{sla.slaString}</li>
                </ul>
            </div>
            <div className="card-text">{cuisines.join(", ")}</div>
            <div className="card-text">{locality}</div>
        </div>
    );
};

export default Card;