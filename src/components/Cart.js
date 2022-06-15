import CartItem from "./CartItem";
const Cart = (props) => {
  return (
    <div className="shopping-bag">
      <button className="close-btn">&times;</button>
      <h2 className="bag-h2">Your Bag</h2>
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
          price={item.price * item.quantityInCart}
          onChangeHandler={props.itemInputHandler}
          plusHandler={props.plusHandler}
        ></CartItem>
      ))}
      <div className="total-price">Total Price: {props.totalPrice}$</div>
      <button className="checkout" onClick={props.checkoutHandler}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
