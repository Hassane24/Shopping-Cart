import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./styles/App.css";

function App() {
  const [itemsInCart, setItemsInCart] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([
    {
      name: "Molten-GF7-Composite-Basketball",
      price: 130,
      quantityInCart: 0,
      id: 0,
      type: "Basketball",
    },
    {
      name: "Wilson-Evolution-Indoor-Game-Basketball",
      price: 100,
      quantityInCart: 0,
      id: 1,
      type: "Basketball",
    },
    {
      name: "Nike-Air-Jordan-Retro-4",
      price: 329,
      quantityInCart: 0,
      id: 2,
      type: "Shoe",
    },
    {
      name: "Kobe-11-Elite-Last-Emperor",
      price: 400,
      quantityInCart: 0,
      id: 3,
      type: "Shoe",
    },
    {
      name: "Michael-Jordan-Jersey",
      price: 30,
      quantityInCart: 0,
      id: 4,
      type: "Jersey",
    },
    {
      name: "Kobe-Bryant-Jersey",
      price: 80,
      quantityInCart: 0,
      id: 5,
      type: "Jersey",
    },
    {
      name: "Mini-Pro-Xtreme-Basketball-Hoop-Set",
      price: 400,
      quantityInCart: 0,
      id: 6,
      type: "Hoop",
    },
    {
      name: "Basketball-Hoop-Set-For-Kids",
      price: 160,
      quantityInCart: 0,
      id: 7,
      type: "Hoop",
    },
  ]);

  useEffect(() => {
    setTotalPrice(() => {
      let newTotalPrice = 0;
      cartItems.forEach(
        (item) => (newTotalPrice += item.price * item.quantityInCart)
      );
      return newTotalPrice;
    });

    setItemsInCart((prevState) => {
      let newState = prevState;
      newState = sumUpCartItems();
      return newState;
    });
    // eslint-disable-next-line
  }, [items]);

  const sumUpCartItems = () => {
    let sum = 0;
    items.forEach((item) => (sum += item.quantityInCart));
    if (sum === 0) sum = "";
    else sum.toString();
    return sum;
  };

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
      newState = parseInt(newState);
      newState++;
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
    const inputId = parseInt(e.target.getAttribute("id"));
    if (isNaN(newQuantityInCart)) newQuantityInCart = 0;
    if (newQuantityInCart === 0) {
      setCartItems((prevState) => {
        const newState = prevState.filter((item) => item.id !== inputId);
        return newState;
      });
    }

    setItems((prevState) => {
      const newState = [...prevState];
      newState.find((item) => item.id === inputId).quantityInCart =
        newQuantityInCart;
      return newState;
    });

    setTimeout(() => {
      setItemsInCart((prevState) => {
        let newState = prevState;
        newState = parseInt(newState);
        newState = 0;
        cartItems.forEach((item) => (newState += item.quantityInCart));
        newState = newState.toString();
        if (newState === "0") newState = "";
        return newState;
      });
    }, 100);
  };

  const minusButtonHandler = (e) => {
    const itemId = parseInt(
      e.target.parentNode.childNodes[1].getAttribute("id")
    );
    const itemInput = e.target.parentNode.childNodes[1];
    console.log(itemInput);
    setItems((prevState) => {
      const newState = [...prevState];
      newState.find((item) => item.id === itemId).quantityInCart--;
      return newState;
    });
  };

  const plusButtonHandler = (e) => {
    const itemId = parseInt(
      e.target.parentNode.childNodes[1].getAttribute("id")
    );
    setItems((prevState) => {
      const newState = [...prevState];
      newState.find((item) => item.id === itemId).quantityInCart++;
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
              plusHandler={plusButtonHandler}
              minusHandler={minusButtonHandler}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
