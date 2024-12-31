import { useState } from "react";
import Topbar from "./components/navbar/Topbar";
import About from "./components/about/About";
import Cardd from "./components/card/Card";
import { Divider } from "@nextui-org/react";

function App() {
const [isdark,Setisdark]=useState(!false);

  return (
    <div className="App">
      <main className={`${isdark?'dark':' '} text-foreground bg-background`}>
        <Topbar setdark={Setisdark} isdark={isdark} />
         <div className=" max-lg:flex-col max-lg:justify-between p-7 max-lg:items-center max-lg:gap-5 justify-center  items-start flex"><Cardd/><About/>
         
      
         </div>
        
      </main>
    </div>
  );
}


export default App;
