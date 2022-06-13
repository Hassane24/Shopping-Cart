const Item = (props) => {
  return (
    <div className="item">
      <img src={require(`../assets/${props.src}.jpeg`)} alt={props.alt} />
      <div className="item-name">{props.itemName}</div>
      <div className="price">{props.price}</div>
      <button className="add-to-cart" onClick={props.handleClick} id={props.id}>
        Add to cart
      </button>
    </div>
  );
};
export default Item;
