import { Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import WishlistPage from "./pages/WishListPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/wishlist" exact component={WishlistPage} />
      </Switch>
    </div>
  );
}

export default App;
