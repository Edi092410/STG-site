import { AppRoutes } from "./Routes/AppRoutes";
import { LoginReminder } from "./components/LoginReminder/LoginReminder";
import { ToastContainer } from "react-toastify";
import { Help } from "./components/Help/Help";
import { FirstLoginSecond } from "./pages/FirstLoginSecond";
import { ChooseProgram } from "./components/ChooseProgram/ChooseProgram";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <PublicPage /> */}
      {/* <LoginReminder /> */}
      {/* <FirstLoginSecond /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
