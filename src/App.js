import { AppRoutes } from "./Routes/AppRoutes";
import { PublicPage } from "./pages/PublicPage";
import { Opportunity } from "./components/Opportunity/Opportunity";
import { Acalous } from "./components/Acalous/Acalous";
import { MainBox } from "./components/MainBox/MainBox";
import { Box } from "./components/MainBox/Box";
import { Partner } from "./components/Partners/Partner";
import { Partners } from "./components/Partners/Partners";
import { Shape } from "./components/About/About";
import { Toast } from "./components/Toast/Toast";
import { SuccessToast } from "./components/Toast/SuccessToast";
import { ToastContainer } from "react-toastify";
import { MainPicture } from "./components/MainPicture/MainPicture";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* <AppRoutes /> */}
      {/* <PublicPage /> */}
      <MainPicture/>
      <ToastContainer />
    </div>
  );
}

export default App;
