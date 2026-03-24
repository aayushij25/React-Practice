import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL, PLACEHOLDER } from "../utils/constants";

const CategoryItems = ({data}) => {
    const dispatch = useDispatch();
    const handleAddItem = (data) => {
        // dispatch an action
        dispatch(addItem(data));
    }

    return (
        <div className="itemContainer">
            <div className="itemText">
                <div className="itemName">{data.name}</div>
                    <div>{"₹ "} {data.price / 100 || data.defaultPrice / 100}</div> 
                    <div className="itemDescription">{data.description}</div> 
                </div>
                <div>
                    <div className="addBtn" onClick={() => handleAddItem(data)}>Add + </div>
                    <img className="itemImg" src={data.imageId ? CDN_URL + data.imageId : PLACEHOLDER} alt={data.name} />
                </div>
        </div>
    );
}

export default CategoryItems;