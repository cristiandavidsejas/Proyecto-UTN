import './App.css';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import NovedadItem from './components/novedades/NovedadItem';
import Header from './components/layout/Header';
import Nosotros from './components/layout/Nosotros';
import Login from './components/admin/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NovedadesBlog from './pages/NovedadesBlog';
import HomePage from './pages/HomePage';

import Cursos from './pages/Cursos';
import NosotrosPage from './pages/NosotrosPage';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div className="App">
      <Header />

   <BrowserRouter>
      <Navigation />
      <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='Curso' element={<Cursos />} />
              <Route path='blog' element={<NovedadesBlog />} />
              <Route path='nosotros' element={<NosotrosPage />} />
              <Route path='Contacto' element={<Contacto />} />
              <Route path='login' element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Nosotros />
      <Footer />
     
    </div>
  );
}

export default App;
