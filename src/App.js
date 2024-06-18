import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Program from "./pages/Program";
import { useEffect } from "react";
import CountryDetail from "./pages/CountryDetail";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // document.querySelector("header nav").scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/countrydetail" element={<CountryDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
