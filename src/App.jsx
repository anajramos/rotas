import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from react-router-dom

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Sobre" element={<Sobre/>} />
    <Route path="/servicos" element={<Servicos/>} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/extra" element={<Extra />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </main>
  <Footer>
    </BrouwserRouter>

)
}