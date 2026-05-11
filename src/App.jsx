import { BrowserRouter, Routes, Route } from react-router-dom
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Servicos from "./pages/Servicos/Servicos";
import Contato from "./pages/Contato/Contato";
import Extra from "./pages/Extra/Extra";
import NotFound from "./pages/NotFound/NotFound";

import { Link } from 'react-router-dom';
import styles from './App.module.css';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Sobre">Sobre</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/extra">Extra</Link></li>
        </ul>
        </nav>
  );
  }
  export default Navbar() 
  
  {
  <BrowserRouter>
  <Navbar/>
  <main>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Sobre" element={<Sobre/>} />
    <Route path="/servicos" element={<Servicos/>} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/extra" element={<Extra />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </main>
  <Footer/>
  </BrowserRouter>

  };