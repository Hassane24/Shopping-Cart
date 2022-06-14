import { Link } from "react-router-dom";
const Header = (props) => {
  return (
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
          <span>{props.cartItems}</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
