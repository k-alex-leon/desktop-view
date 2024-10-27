import { useEffect, useRef, useState } from "react";
import { useStore } from "./useStore";

export default function Window(props) {
  const windowRef = useRef();
  const [windowCoords, setWindowCoords] = useState({x: 0, y: 0});
  const mouseCoords = useStore((state) => state.mousePos);
  let { x, y } = mouseCoords;
  const [isOpen, setOpen] = useState(true);

  // simulating mouse hold event
  const [isHolding, setHolding] = useState(false);
  const timeOutRef = useRef(null);
  const delay = 100;

  const handleMouseDown = (e) => {
    // we set a timeout to know if user is holding
    timeOutRef.current = setTimeout(() => {
      setHolding(true);
      console.log("hold event: ", e);
      let winX = e.clientX - +windowRef.current.style.left.replace("px", "");
      setWindowCoords({ x: winX, y });
      // do stuff here...
      console.log("mouse holding");
    }, delay);
  };

  window.addEventListener("mouseup", (e) => {
    if (isHolding) setHolding(false);
  });

  // changing window coords
  useEffect(() => {
    if (!windowRef.current || !isHolding) return;

    // windowRef.current.style.left = `${x}px`;
    // windowRef.current.style.top = `${y}px`;
    windowRef.current.style.left = `${x - windowCoords.x}px`;
    windowRef.current.style.top = `${y - 15}px`;
  }, [x, y]);

  return (
    <div
      ref={windowRef}
      // onMouseUp={handleMouseUp}
      // style={{ top: windowCoords.y, left: windowCoords.x }}
      className="absolute top-0 right-10 w-2/3 h-2/3 bg-slate-300 rounded-lg"
    >
      <div className="flex">
        <div
          onMouseDown={handleMouseDown}
          className={`flex items-center px-2 w-full h-8 bg-slate-700 rounded-t-lg ${
            !isHolding ? "cursor-grab" : "cursor-grabbing"
          } text-white`}
        >
          <h5>Titulo de la app</h5>
        </div>
        <button className="absolute right-0 w-8 z-10 p-2 bg-red-900 rounded-tr-lg">
          <img className="" src="./images/close.png" alt="close window" />
        </button>
      </div>

      {props.children}
    </div>
  );
}
