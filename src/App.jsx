//import './App.css'
import { useState } from "react";
import Authentication from "./components/AuthC";
import HeaderC from "./components/HeaderC";
import FooterC from "./components/FooterC";
import Solicitud from "./components/ModHom";

function App() {
  const [auth, setAuth] = useState(false);
  return auth ? (
    <>
      <HeaderC showUser={true} />
      <Solicitud onUpdateState={setAuth}/>
      <FooterC />
    </>
  ) : (
    <>
      <HeaderC showUser={false} />
      <Authentication onUpdateState={setAuth} />
      <FooterC />
    </>
  );
}

export default App;
