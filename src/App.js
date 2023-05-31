import "./assets/App.css";
import { AppRoutes } from "./Routes/AppRoutes";
import { Test } from "./components/Test/Test";
import { Selection } from "./components/Selection/Selection";
import { CreateOrder } from "./components/CreateOrder/CreateOrder";

import "./index.css"
function App() {
  return (
    <div className="App">
      {/* <AppRoutes /> */}
      {/* < Test /> */}
      < CreateOrder />
    </div>
  );
}

export default App;
