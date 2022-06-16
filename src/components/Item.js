import "../styles/Item.css";
const Item = (props) => {
  return (
    <div className="item" onClick={props.itemClickHandler}>
      <div className="img">
        <img src={require(`../assets/${props.src}.jpeg`)} alt={props.alt} />
      </div>
      <div className="item-info">
        <div className="item-name">{props.itemName}</div>
        <div className="price">{props.price}$</div>
        <button
          className="add-to-cart"
          onClick={props.handleClick}
          id={props.id}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Item;
