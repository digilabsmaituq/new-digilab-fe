import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-s">
          <Sidebar />
        </div>
        <div className="col-m">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
