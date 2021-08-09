import { useProductContext } from "../contexts/product-context";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useProductContext();

  return (
    <div className="main-content">
      <div className="my-grid">
        {products.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
