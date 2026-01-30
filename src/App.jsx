import {useState,useEffect } from "react"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader';
import Home from './pages/Home'
import Navbar from './components/Navbar'  
import Footer from "./components/Footer"  

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  //  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
    
     {
       loading ? <Loader /> : '<h1>App Loaded 🚀</h1>'
     }
     
    
    </>
  )
}


export default App
