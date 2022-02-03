
//components
import Header from './componets/header';
import Introdaction from './componets/introdaction';
import Statics from './componets/statics';
import Provied from './componets/provied';
import Plan from './componets/plan';
//components
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="app">
 <Header/>
<Introdaction/>
<Statics/>
<Provied/>
<Plan/>
  </div>  
  );
}

export default App;
