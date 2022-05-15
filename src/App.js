import React from "react";
import "./App.css";
//import Cart from "./Components/cart";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";
import FAQ from "./Components/FAQ/FAQ";

/*function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter..." data={BookData} />
     
    
    </div>
  );
}*/
const App = () => {
  return (
    <>
    <FAQ/>
    </>
  )
}

export default App;
