import { Route, Routes } from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Footer from "./components/Footer/Footer";
import Resultado from "./components/Resultado/Resultado";

//CSS
import './css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/resultado' element={ <Resultado /> } />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
