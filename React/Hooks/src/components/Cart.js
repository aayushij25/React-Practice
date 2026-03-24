import { useDispatch, useSelector } from "react-redux";
import { PLACEHOLDER, CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems, cartItems.length);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="cart-header">Cart</h1>
            <div className="clearCart" onClick={handleClearCart}>Clear Cart</div>
            {cartItems.length === 0 && <p className="emptyCart">Cart is empty. Please add items!</p>}
            <div className="item-container">  
                {cartItems.map((item) => 
                    <div className="itemContainer" key={item.id}>
                        <div className="itemText">
                            <div className="itemName">{item.name}</div>
                                <div>{"₹ "} {item.price / 100 || item.defaultPrice / 100}</div> 
                                <div className="itemDescription">{item.description}</div> 
                            </div>
                            <div>
                                <div className="addBtn" onClick={() => handleAddItem(data)}>Remove</div>
                                <img className="itemImg" src={item.imageId ? CDN_URL + item.imageId : PLACEHOLDER} alt={item.name} />
                            </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;