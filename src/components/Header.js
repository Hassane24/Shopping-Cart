import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Shop from "./Shop";
import Main from "./Main";

const Header = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/shop">shop</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </Router>
  );
};

export default Header;
