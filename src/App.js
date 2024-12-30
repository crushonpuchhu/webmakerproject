import { useState } from "react";
import Topbar from "./components/navbar/Topbar";
import About from "./components/about/About";

function App() {
const [isdark,Setisdark]=useState(false);

  return (
    <div className="App">
      <main className={`${isdark?'dark':' '} text-foreground bg-background`}>
        <Topbar setdark={Setisdark} isdark={isdark} />
         <div className=" justify-center items-center flex"><About/></div>
      </main>
    </div>
  );
}


export default App;
