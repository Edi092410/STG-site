import "./assets/App.css";
import { AppRoutes } from "./Routes/AppRoutes";
// import { Test } from "./components/Test/Test";
import { Selection } from "./components/Selection/Selection";
import { CreateOrder } from "./components/CreateOrder/CreateOrder";
import { Slogan } from "./components/Slogan/Slogan";
import { Test } from "./Axios/Test";
import { Menu } from "./components/ProfileMenu/Menu";
import "./index.css";
function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <Axios /> */}
      {/* <Menu /> */}
    </div>
  );
}

export default App;
