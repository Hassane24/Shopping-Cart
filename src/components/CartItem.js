import "../styles/CartItem.css";
const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={require(`../assets/${props.imgSrc}.jpeg`)} alt={props.imgAlt} />
      <div className="info-container">
        <div className="item-type">{props.type}</div>
        <div className="item-name">{props.name}</div>
        <div className="plus-minus-input">
          <button className="minus-btn" onClick={props.minusHandler}>
            -
          </button>
          <input
            type="number"
            className="number-item"
            value={props.numberItem}
            onChange={props.onChangeHandler}
            id={props.id}
          />
          <button className="plus-btn" onClick={props.plusHandler}>
            +
          </button>
        </div>
      </div>
      <div className="price">{props.price}$</div>
    </div>
  );
};
export default CartItem;
