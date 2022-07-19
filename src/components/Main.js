import { Link } from "react-router-dom";
import "../styles/Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="background-img">
        <img src={require("../assets/home-page.jpg")} alt="" />
      </div>
      <div className="laced-up">
        <Link to="/shop">Get laced up</Link>
      </div>
    </div>
  );
};

export default Main;
