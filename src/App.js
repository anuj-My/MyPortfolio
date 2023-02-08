import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Navbar from "./container/Navbar";
import Home from "./pages/Home";
import Footer from "./container/Footer";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";

let quoteData = {
  content: "",
  author: "",
};
function App() {
  const location = useLocation();
  const [quote, setQuote] = useState(quoteData);
  const [error, setError] = useState("");

  const getRandomQuotes = async () => {
    try {
      const response = await axios.get(
        "https://api.quotable.io/random?maxLength=100"
      );

      const { content, author } = response.data;
      setQuote({
        ...quoteData,
        content,
        author,
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getRandomQuotes();
  }, []);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route
              path="about"
              element={<About quote={quote} error={error} />}
            ></Route>
            <Route path="projects/:slug" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
