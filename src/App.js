import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Organizer from "./pages/Organizer";

function App() {
  return (
    <Router>
        <div className="container">
          <div className="row">
            <div className="col-s">
              <Sidebar />
            </div>
            <div className="col-l">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/organizer" element={<Organizer />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;
