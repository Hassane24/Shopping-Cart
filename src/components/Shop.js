import { useState } from "react";
import Item from "./Item";
const Shop = () => {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [items, setItems] = useState([
    {
      name: "Molten-GF7-Composite-Basketball",
      price: "",
      quantityInCart: "",
      id: 0,
    },
    {
      name: "Wilson-Evolution-Indoor-Game-Basketball",
      price: "",
      quantityInCart: "",
      id: 1,
    },
    { name: "Nike-Air-Jordan-4", price: "", quantityInCart: "", id: 2 },
    {
      name: "Kobe-11-Elite-Last-Emperor",
      price: "",
      quantityInCart: "",
      id: 3,
    },
    { name: "Michael-Jordan-Jersey", price: "", quantityInCart: "", id: 4 },
    { name: "Kobe-Bryant-Jersey", price: "", quantityInCart: "", id: 5 },
    {
      name: "Mini-Pro-Xtreme-Basketball-Hoop-Set",
      price: "",
      quantityInCart: "",
      id: 6,
    },
    {
      name: "Basketball-Hoop-Set-For-Kids",
      price: "",
      quantityInCart: "",
      id: 7,
    },
  ]);

  const removeDashFromItemName = (string) => {
    string = string.split("-").join(" ");
    return string;
  };

  return (
    <div className="shop">
      {items.map((item) => (
        <Item
          key={item.id}
          src={item.name}
          alt={item.name}
          itemName={removeDashFromItemName(item.name)}
        ></Item>
      ))}
    </div>
  );
};

export default Shop;
