import React, { useEffect } from "react";
import { useState } from "react";
import Grid from "./components/Grid/Grid";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  var handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  return (<>
    <Navbar page="2048"/>
    <div className="flex flex-col text-blue-500 text-5xl items-center justify-center mt-[10px]">
      <h1>Play 2048</h1>
      <Grid />
    </div>
  </>);

}

export default App