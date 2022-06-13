import { useState } from "react";
import Item from "./Item";
const Shop = () => {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [items, setItems] = useState([
    {
      name: "Molten-GF7-Composite-Basketball",
      price: "130$",
      quantityInCart: 0,
      id: 0,
    },
    {
      name: "Wilson-Evolution-Indoor-Game-Basketball",
      price: "100$",
      quantityInCart: 0,
      id: 1,
    },
    {
      name: "Nike-Air-Jordan-Retro-4",
      price: "329$",
      quantityInCart: 0,
      id: 2,
    },
    {
      name: "Kobe-11-Elite-Last-Emperor",
      price: "400$",
      quantityInCart: 0,
      id: 3,
    },
    { name: "Michael-Jordan-Jersey", price: "30$", quantityInCart: 0, id: 4 },
    { name: "Kobe-Bryant-Jersey", price: "80$", quantityInCart: 0, id: 5 },
    {
      name: "Mini-Pro-Xtreme-Basketball-Hoop-Set",
      price: "400$",
      quantityInCart: 0,
      id: 6,
    },
    {
      name: "Basketball-Hoop-Set-For-Kids",
      price: "160$",
      quantityInCart: 0,
      id: 7,
    },
  ]);

  const removeDashFromItemName = (string) => string.split("-").join(" ");

  const addToCart = (e) => {
    const btnId = parseInt(e.target.attributes.id.textContent);
    setItems((prevState) => {
      const newState = [...prevState];
      newState.find((item) => item.id === btnId).quantityInCart += 1;
      return newState;
    });
  };

  return (
    <div className="shop">
      {items.map((item) => (
        <Item
          key={item.id}
          src={item.name}
          alt={item.name}
          itemName={removeDashFromItemName(item.name)}
          handleClick={addToCart}
          id={item.id}
          price={item.price}
        ></Item>
      ))}
    </div>
  );
};

export default Shop;
