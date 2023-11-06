import { AppRoutes } from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { ErrorHandle } from "./components/ErrorHandle/ErrorHandle";
import { Email } from "./components/Email/Email";
import { Error } from "./components/Test/Error";
import { ChangePassword } from "./components/ForgetPassword/ChangePassword";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <ChangePassword /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
