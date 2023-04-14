import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <>
        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
