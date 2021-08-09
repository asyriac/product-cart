import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

const ProductListPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex products">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListPage;
