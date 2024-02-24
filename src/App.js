import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Vacancy from "./pages/Vacancy";
import Job from "./pages/Job";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vacancy" element={<Vacancy />}/>
            <Route path="/job/:id" element={<Job />}/>
          </Routes>


      </Router>
    </div>
  );
}

export default App;
