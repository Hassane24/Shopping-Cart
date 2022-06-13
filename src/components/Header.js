import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Shop from "./Shop";
import Main from "./Main";

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="shop-name">Basketball Shop</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<h1>YOUR CART</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default Header;
