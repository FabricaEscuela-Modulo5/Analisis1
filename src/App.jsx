//import './App.css'
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Authentication from "./components/AuthC";
import HeaderC from "./components/HeaderC";
import FooterC from "./components/FooterC";
import Solicitud from "./components/ModHom";
import VerSolicitud from "./components/VerSolicitud";

function App() {
  const [auth, setAuth] = useState(false);
  return auth ? (
    <div>
      <HeaderC showUser={false}/>
        <Routes>
          <Route path="/" element={<Authentication />}/>
        </Routes>
      <FooterC />
    </div>
  ) : (
    <div>
      <HeaderC showUser={true}/>
        <Routes>
          <Route path="/" element={<Authentication />}/>
          <Route path='/solicitud' element={<Solicitud onUpdateState={setAuth} />} />
          <Route path="/verSolicitud" element={<VerSolicitud />} />
        </Routes>
      <FooterC />
    </div>
  )
}

export default App;
