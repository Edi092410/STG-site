import { AppRoutes } from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { Registration } from "./components/Regis--main/Registration";
import { FirstLoginSecond } from "./pages/FirstLoginSecond";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <Registration /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
