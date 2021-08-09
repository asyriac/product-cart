import { Link } from "react-router-dom";
import Cart from "../components/CartList";
import { useCartContext } from "../contexts/cart-context";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length > 0)
    return (
      <>
        <Navbar />
        <Cart />
      </>
    );
  else
    return (
      <>
        <Navbar />
        <div className="container pt-1 text-center ">
          <h2 className="">
            Cart is empty.{" "}
            <Link to="/" className="primary-text">
              Start shopping.
            </Link>
          </h2>
        </div>
      </>
    );
};

export default CartPage;
