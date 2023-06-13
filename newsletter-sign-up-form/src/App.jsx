import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SuscribedPage } from "../Pages/SuscribedPage";
import { Home } from "../Pages/Home";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suscribed" element={<SuscribedPage />} />
        </Routes>
      </div>
  );
}

export default App;
