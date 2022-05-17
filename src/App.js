<<<<<<< HEAD
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
        
        
        <Router>
           
        <div className="App">
        
          
         
          <Routes>
                 <Route exact path='/SignIn' element={< SignIn />}></Route>
                 <Route exact path='/SignUp' element={< SignUp />}></Route>
  
          </Routes> 
        
        </div>
        </Router>
  
=======
import './App.css';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
          <Header/>            
    </div>
>>>>>>> Stoneadda/development
  );
}

export default App;
