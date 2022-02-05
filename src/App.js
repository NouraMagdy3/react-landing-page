//components
import Header from './components/header';
import Introdaction from './components/introdaction';
import Statics from './components/statics';
import Provied from './components/provied';
import Plan from './components/plan';
import Network from "./components/network";
import Brands from "./components/brands";
import Customers from "./components/customers";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Introdaction />
      <Statics />
      <Provied />
      <Plan />
      <Network />
      <Brands />
      <Customers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
