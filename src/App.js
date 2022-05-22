import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import FAQ from "./components/FAQ/FAQ";
import Header from "./components/Header/Header.js";
import Testimonials from "./components/Testimonials";
import WhyStoneadda from "./components/WhyStoneadda";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

        <Routes>  
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
      <Testimonials />
      <WhyStoneadda />
      <FAQ />
    </div>
  );
}
export default App;
