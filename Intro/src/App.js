import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <MainHeader />
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:productId" >
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
