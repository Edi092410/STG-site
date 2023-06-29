import "./assets/App.css";
import { AppRoutes } from "./Routes/AppRoutes";
// import { Test } from "./components/Test/Test";
import { CreateOrder } from "./components/CreateOrder/CreateOrder";
import { Slogan } from "./components/Slogan/Slogan";
// import { Test } from "./Axios/Test";
import { Sidebar } from "./components/ProfileSidebar/Sidebar";
import { SecondLogin } from "./pages/SecondLogin";
import { OrderDetail } from "./components/OrderDetail/OrderDetail";
import { Test } from "./components/OrderList/Test";
import { Loading } from "./components/Loading/Loading";
import "./index.css";
function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <Loading /> */}
      {/* <OrderDetail /> */}
    </div>
  );
}

export default App;
