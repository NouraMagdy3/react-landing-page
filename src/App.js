//components
import Network from "./components/network/network";
import Brands from "./components/brands/brands";
import Customers from "./components/customers/customers";
import Subscribe from "./components/subscribe/subscribe";
import Footer from "./components/footer/footer";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Network />
      <Brands />
      <Customers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
