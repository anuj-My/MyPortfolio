import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route
            path="about"
            element={<About quote={quote} error={error} />}
          ></Route>
          <Route path="projects/:slug" element={<ProjectDetails />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
