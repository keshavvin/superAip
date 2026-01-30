import {useState,useEffect } from "react"
import './App.css'
import {Canvas, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'  
import Footer from "./components/Footer"  

function App() {
  function Box() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (API, auth, assets, etc.)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }else{
    <h2>under mantenance</h2>
  }

  return (
    <>
      <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}


export default App
