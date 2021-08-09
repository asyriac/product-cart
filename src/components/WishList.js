import { useCartContext } from "../contexts/cart-context";
import WishlistItem from "./WishListItem";

const Wishlist = () => {
  const { wishlist } = useCartContext();
  return (
    <div className="container pt-1 card-list-h">
      {wishlist.map((item) => (
        <WishlistItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Wishlist;
