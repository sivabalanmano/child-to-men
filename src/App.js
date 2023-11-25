import Header from "./Header";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import Footer from "./Footer";
import Nav from "./Navbar";
import './Navbar.css'
import { Route, Routes } from "react-router-dom";
import Shirts from "./Shirts";
import Innerweras from "./Innerweras";
import Tshirts from "./Tshirts";
import Pant from "./Pant"

function App() {
  return (
    <div>
       <Nav />
       <Routes>
        <Route path="/home" element={<Header />}/>
        <Route path="/shirt" element={<Shirts />}/>
        <Route path="/pant" element={<Pant />}/>
        <Route path="/tshirts" element={<Tshirts />}/>
        <Route path="/innerwears" element={<Innerweras />}/>
       </Routes>
       <Footer />
    </div>
  )
}

export default App;
