import "./App.css";
import MainPageComponent from "./main";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path={"/"} Component={MainPageComponent} />
        <Route exact={true} path={"/products/:id"} Component={ProductPage} />
        <Route exact={true} path={"/upload"} Component={UploadPage} />
      </Routes>
    </div>
  );
}

export default App;
