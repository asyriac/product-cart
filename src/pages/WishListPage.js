import { Link } from "react-router-dom";
import Wishlist from "../components/WishList";
import Navbar from "../components/Navbar";
import { useCartContext } from "../contexts/cart-context";

const WishlistPage = () => {
  const { wishlist } = useCartContext();

  if (wishlist.length > 0)
    return (
      <>
        <Navbar />
        <Wishlist />
      </>
    );
  else
    return (
      <>
        <Navbar />
        <div className="container pt-1 text-center ">
          <h2 className="">
            Wishlist is empty.{" "}
            <Link to="/" className="primary-text">
              Start window-shopping.
            </Link>
          </h2>
        </div>
      </>
    );
};

export default WishlistPage;
