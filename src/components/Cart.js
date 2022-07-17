import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/Cart.css";
const Cart = (props) => {
  if (!Array.isArray(props.itemsInCart) || !props.itemsInCart.length)
    return (
      <div>
        <h2 className="bag-h2">Your Bag</h2>
        No items in the your
      </div>
    );
  else
    return (
      <div className="shopping-bag">
        <button className="close-btn">&times;</button>
        {props.itemsInCart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            imgSrc={item.name}
            imgAlt={item.name}
            type={item.type}
            name={item.name}
            numberItem={item.quantityInCart}
            minusHandler={props.minusHandler}
            plusHandler={props.plusHandler}
            price={item.price * item.quantityInCart}
            onChangeHandler={props.itemInputHandler}
          ></CartItem>
        ))}
        <div className="total-price">Total Price: {props.totalPrice}$</div>
        <Link to="/" className="checkout">
          <button className="checkout" onClick={props.checkoutHandler}>
            Checkout
          </button>
        </Link>
      </div>
    );
};

export default Cart;
