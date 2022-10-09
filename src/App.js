import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import styled from "styled-components";
import Footer from "./components/Footer";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Navbar />

      <Home />

      <Footer />
    </Container>
  );
}

export default App;
