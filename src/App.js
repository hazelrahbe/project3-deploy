// Components/Style/Routes import
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";


// styles import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import pages
import Homepage from "./pages/Homepage";
import Cocktails from './pages/Cocktails';
import Create from "./pages/Create";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Aboutus from "./pages/Aboutus";
import LoginLink from './components/LoginLink';
import Login from './pages/LogIn';
import Register from './pages/Register';
import Show from './pages/Show';



function App() {
  // const URL = "http://localhost:3000/";
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Nav />
      <LoginLink />
      </header>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/cocktails/:id' element={<Show />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
