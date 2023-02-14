import "../assets/custom.css";
import { Routes, Route, HashRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LandingPage } from "./pages/Landing-page/Loadable";

function App() {
  return (
    <>
      <HashRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </HashRouter>
      <ToastContainer />
    </>
  );
}

export default App;
