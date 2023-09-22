import { AppRoutes } from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
