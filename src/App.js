import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProjectOverview from "./pages/ProjectOverview";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="overview" element={<ProjectOverview />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
