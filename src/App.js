import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
        <div className="container">
          <div className="row">
            <div className="col-s">
              <Sidebar />
            </div>
            <div className="col-m">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;
