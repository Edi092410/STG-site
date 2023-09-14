import { AppRoutes } from "./Routes/AppRoutes";
import { LoginReminder } from "./components/LoginReminder/LoginReminder";
import { ToastContainer } from "react-toastify";
import { Help } from "./components/Help/Help";
import { FirstLoginSecond } from "./pages/FirstLoginSecond";
import { ChooseProgram } from "./components/ChooseProgram/ChooseProgram";
import { List, Test, ServicePage } from "./components/OrderList/List";
import { ClientOrderList } from "./components/ClientOrderList/ClientOrderList";
import { QA } from "./components/QA/QA";
import { Box } from "./components/QA/QA";
import { CreateOrder } from "./components/CreateOrder/CreateOrder";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <QA /> */}
      {/* <ChooseProgram /> */}
      {/* <CreateOrder /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
