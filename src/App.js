import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
