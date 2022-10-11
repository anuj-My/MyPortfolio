import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PinterestOverview from "./pages/PinterestOverview";
import CodeWingsOverview from "./pages/CodeWingsOverview";
import KingsOverview from "./pages/KingsOverview";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

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
        "http://api.quotable.io/random?maxLength=100"
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
          <Route path="pinterest" element={<PinterestOverview />} />
          <Route path="kings" element={<KingsOverview />} />
          <Route path="codewings" element={<CodeWingsOverview />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
