import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Vacancy from "./pages/Vacancy";
import Contacts from "./pages/Contacts";
import Job from "./pages/Job";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vacancy" element={<Vacancy />}/>
            <Route path="/job" element={<Job />}/>
            <Route path="/contacts" element={<Contacts />}/>
          </Routes>


      </Router>
    </div>
  );
}

export default App;
