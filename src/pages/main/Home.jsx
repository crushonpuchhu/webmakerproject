import react from "react";
import About from "../../components/about/About";
import Cardd from "../../components/card/Card";

export default function Home() {
  return (
    <>
      <div className=" max-lg:flex-col max-lg:justify-between p-7 max-lg:items-center max-lg:gap-5 justify-center  items-start flex">
        <Cardd />
        <About />
      </div>
    </>
  );
}
