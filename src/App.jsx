import { useEffect, useState } from "react";
import "./App.css";
import Desktop from "./Desktop";
import NavBar from "./NavBar";
import { useStore } from "./useStore";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const setMousePos = useStore((state) => state.setMousePosition);
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    setMousePos({ x: mousePosition.x, y: mousePosition.y });
  }, [mousePosition]);

  return (
    <main
      onMouseMove={handleMouseMove}
      className="fixed justify-center items-center h-full w-full overflow-auto"
    >
      {/* <h1 className="font-bold">Hello</h1>
      <FaWindows /> */}
      <Desktop />
      <NavBar />
    </main>
  );
}

export default App;
