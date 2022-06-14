import CartItem from "./CartItem";
const Cart = (props) => {
  return (
    <div className="shopping-bag">
      <button className="close-btn">&times;</button>
      <h2 className="bag-h2">Your Bag</h2>
      {props.itemsInCart.map((item) => (
        <CartItem
          key={item.id}
          imgSrc={item.name}
          imgAlt={item.name}
          type={item.type}
          name={item.name}
          numberItem={item.quantityInCart}
          minusHandler={props.minusHandler}
          price={item.price}
          onChangeHandler={props.onChangeHandler}
          plusHandler={props.plusHandler}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;
