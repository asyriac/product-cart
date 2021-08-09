import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cart-context";

const Navbar = () => {
  const { cart, wishlist } = useCartContext();
  return (
    <nav className="nav bg-white sticky">
      <div className="nav-brand">
        <h2>
          <Link to="/">X Corp.</Link>
        </h2>
      </div>
      <ul className="nav-link">
        <li className="nav-link-item">
          <Link to="/wishlist">
            <div className="badge-container">
              <i className="fas fa-heart icon-sm"></i>
              <span className="badge-notification">{wishlist?.length || 0}</span>
            </div>
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/cart">
            <div className="badge-container">
              <i className="fas fa-shopping-cart icon-sm"></i>
              <span className="badge-notification">{cart?.length || 0}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
