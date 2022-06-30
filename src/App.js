

import './App.css';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Seccion from './components/layout/Seccion';
import Header from './components/layout/Header';
import Nosotros from './components/layout/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
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
              <Route path='blog' element={<Blog />} />
              <Route path='nosotros' element={<NosotrosPage />} />
              <Route path='Contacto' element={<Contacto />} />
      </Routes>
      </BrowserRouter>
      
      <Nosotros />
      <Seccion />
      <Footer />
      
    </div>
  );
}

export default App;
