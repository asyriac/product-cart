import { useCartContext } from "../contexts/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalAmount } = useCartContext();

  const discountAmount = (10 / 100) * totalAmount;
  const discountedPrice = totalAmount - discountAmount;

  return (
    <div className=" pt-1 pb-1 container flex products">
      <div className="cart">
        <h2 className="pb-sm">Cart - {cart.length} item(s)</h2>
        <div className="card-list-h">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="price-details">
        <h2 className="text-center">Price details</h2>
        <div className="cart-total flex flex-space-between">
          <h3>Price:</h3>
          <h3>Rs. {totalAmount}</h3>
        </div>
        <div className="cart-total flex flex-space-between">
          <h3>Discount:</h3>
          <h3>Rs. {discountAmount}</h3>
        </div>
        <div className="cart-total flex flex-space-between">
          <h3>Total amount:</h3>
          <h3>Rs. {discountedPrice}</h3>
        </div>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
