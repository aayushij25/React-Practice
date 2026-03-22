import { CDN_URL, PLACEHOLDER } from "../utils/constants";
import { STAR } from "../utils/constants";

// props = {resName, resImg} can be replaced
const Card = ({resData}) => {
    const {cloudinaryImageId, name, avgRating, sla, cuisines, locality} = resData?.info;

    return (
        <div className="card">
            <img src={cloudinaryImageId === "rng/md/carousel/production/indian101" ? PLACEHOLDER : CDN_URL + cloudinaryImageId} alt={name} />
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

export const withVegLabel = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="veg-label">Veg</label>
                <Card {...props}/>
            </div>
        )
    }
};

export default Card;