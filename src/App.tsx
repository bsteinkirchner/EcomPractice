import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Searched } from "./pages/Searched"
import { Store } from "./pages/Store";
import { Checkout } from "./pages/Checkout";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched" element={<Searched />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
