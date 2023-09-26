import { AppRoutes } from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { QuestionBox } from "./components/QA/QA";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <QuestionBox /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
