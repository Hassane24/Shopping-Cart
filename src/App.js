import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [itemsInCart, setItemsInCart] = useState("");
  const [items, setItems] = useState([
    {
      name: "Molten-GF7-Composite-Basketball",
      price: 130,
      quantityInCart: 0,
      id: 0,
    },
    {
      name: "Wilson-Evolution-Indoor-Game-Basketball",
      price: 100,
      quantityInCart: 0,
      id: 1,
    },
    {
      name: "Nike-Air-Jordan-Retro-4",
      price: 329,
      quantityInCart: 0,
      id: 2,
    },
    {
      name: "Kobe-11-Elite-Last-Emperor",
      price: 400,
      quantityInCart: 0,
      id: 3,
    },
    { name: "Michael-Jordan-Jersey", price: 30, quantityInCart: 0, id: 4 },
    { name: "Kobe-Bryant-Jersey", price: 80, quantityInCart: 0, id: 5 },
    {
      name: "Mini-Pro-Xtreme-Basketball-Hoop-Set",
      price: 400,
      quantityInCart: 0,
      id: 6,
    },
    {
      name: "Basketball-Hoop-Set-For-Kids",
      price: 160,
      quantityInCart: 0,
      id: 7,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(() => {
      let newTotalPrice = 0;
      cartItems.forEach(
        (item) => (newTotalPrice += item.price * item.quantityInCart)
      );
      return newTotalPrice;
    });
    // eslint-disable-next-line
  }, [items]);

  const addToCart = (e) => {
    const btnId = parseInt(e.target.attributes.id.textContent);
    setItems((prevState) => {
      const newState = [...prevState];
      newState.find((item) => item.id === btnId).quantityInCart += 1;
      return newState;
    });

    setItemsInCart((prevState) => {
      let newState = prevState;
      if (newState === "") newState = "0";
      newState = parseInt(newState, 10);
      newState += 1;
      newState = newState.toString();
      return newState;
    });

    setCartItems((prevState) => {
      const cartItem = items.find((item) => item.id === btnId);
      if (prevState.includes(cartItem)) return prevState;
      const newState = [...prevState, cartItem];
      return newState;
    });
  };

  const cartItemInputHandler = (e) => {
    let newQuantityInCart = parseInt(e.target.value);
    console.log(cartItems);
    const inputId = parseInt(e.target.getAttribute("id"));
    if (isNaN(newQuantityInCart)) newQuantityInCart = 1;
    setItems((prevState) => {
      const newState = [...prevState];
      newState.find((item) => item.id === inputId).quantityInCart =
        newQuantityInCart;
      return newState;
    });
  };

  return (
    <Router>
      <Header cartItems={itemsInCart}></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/shop"
          element={<Shop handleClick={addToCart} items={items} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              itemsInCart={cartItems}
              totalPrice={totalPrice}
              itemInputHandler={cartItemInputHandler}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
