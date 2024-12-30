import { useState } from "react";
import Topbar from "./components/navbar/Topbar";
import About from "./components/about/About";
import Cardd from "./components/card/Card";

function App() {
const [isdark,Setisdark]=useState(false);

  return (
    <div className="App">
      <main className={`${isdark?'dark':' '} text-foreground bg-background`}>
        <Topbar setdark={Setisdark} isdark={isdark} />
         <div className=" max-lg:flex-col max-lg:justify-between max-lg:items-center max-lg:gap-5 justify-center p-5 items-start flex"><Cardd/><About/></div>
      </main>
    </div>
  );
}


export default App;
