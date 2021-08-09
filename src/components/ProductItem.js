import { useCartContext } from "../contexts/cart-context";

const ProductItem = ({ item: { id, name, image, price }, item }) => {
  const { cart, addToCart } = useCartContext();

  const isPresentInCart = cart.some((i) => i.id === id);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={image} alt={name} />
      </div>
      <div className="card-content">
        <div className="card-body">
          <h4 className="mb-md ">{name}</h4>
          <h5 className="">Rs. {price}</h5>
        </div>
        {isPresentInCart ? (
          <button className="btn btn-primary mt-1">Go to cart</button>
        ) : (
          <button className="btn btn-primary mt-1" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
