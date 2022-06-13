import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '@google/model-viewer/dist/model-viewer';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router';
import AboutMe from './pages/AboutMe/AboutMe';
import ProyectUXUI from './pages/Proyects Ux-UI/ProyectsUXUI';
import ProyectProduct from './pages/Proyects Product/ProyectsProduct';
import Skills from './pages/Skills/Skills';
import Trajectory from './pages/Trayectory/Trajectory';

function App() {
  return (
    <div className="App">
      <Header
        image="./recursos/Logo-little.png"
      />
      <Routes> 
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<AboutMe></AboutMe>} />
        <Route path="/proyectsUXUI" element={<ProyectUXUI></ProyectUXUI>} />
        <Route path="/proyects-product" element={<ProyectProduct></ProyectProduct>} />
        <Route path="/skills" element={<Skills></Skills>} />
        <Route path="/trajectory" element={<Trajectory></Trajectory>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
