import { useState, useContext } from "react";
import CategoryItems from "./CategoryItems";
import UserContext from "../utils/UserContext";

const ResCategory = ({data, showCategoryItems, setShowIndexCategory}) => {
    const [changeStatus, setChangeStatus] = useState(true);

    const handleClick = () => {
        setShowIndexCategory();
        setChangeStatus(showCategoryItems === true ? !changeStatus : changeStatus);
    }

    const {loggedInUser} = useContext(UserContext);

    return (
        <div>
            {/* Header */}
            <div className="category-container">
                <div className="category-header" onClick={handleClick}>
                    <span>{data.title} ({data.itemCards?.length}) for {loggedInUser}</span>
                    <span>🔻</span>
                </div>
                {changeStatus && showCategoryItems && data.itemCards.map(item => <CategoryItems key={item.card?.info?.id} data={item.card?.info} />)}
            </div>   
        </div>
    );
}

export default ResCategory;