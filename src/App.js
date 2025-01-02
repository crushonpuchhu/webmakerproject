import { useState } from "react";
import Topbar from "./components/navbar/Topbar";
import { Divider } from "@nextui-org/react";
import Home from "./pages/main/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
function App() {
const [isdark,Setisdark]=useState(!false);

  return (
    <div className="App">
      <main className={`${isdark?'dark':' '} text-foreground bg-background`}>

        <Topbar setdark={Setisdark} isdark={isdark} />
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
           <Route path="/services" element={<Services/>} />
           <Route path="/contact" element={<Contact/>} />

          </Routes>
          
         <Divider/>
         <Footer/>
        
      </main>
    </div>
  );
}


export default App;
