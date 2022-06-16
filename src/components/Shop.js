import "../styles/Shop.css";
import Item from "./Item";
const Shop = (props) => {
  const removeDashFromItemName = (string) => string.split("-").join(" ");

  return (
    <div className="shop">
      {props.items.map((item) => (
        <Item
          key={item.id}
          src={item.name}
          alt={item.name}
          itemName={removeDashFromItemName(item.name)}
          handleClick={props.handleClick}
          id={item.id}
          price={item.price}
        ></Item>
      ))}
    </div>
  );
};

export default Shop;
