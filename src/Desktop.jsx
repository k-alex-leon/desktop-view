import Window from "./Window";

const DESKTOP_ICONS = [
  {
    name: "Youtube",
    icon: "./images/youtube.png",
    link: "https://youtube.com/embed/",
    color: "red",
  },
  {
    name: "Cube",
    icon: "./images/rubik.png",
    link: "https://k-alex-leon.github.io/3d-react-rubikcube/",
    color: "blue",
  },
  {
    name: "Render",
    icon: "./images/render.png",
    link: "",
    color: "orange",
  },
];

export default function Desktop() {
  return (
    <div className="absolute h-full w-full bg-windows bg-no-repeat bg-cover p-4 select-none">
      <div className="grid grid-cols-1 w-1/6">
        {DESKTOP_ICONS.map((element, inx) => (
          <button key={inx} className="flex flex-col items-center">
            <img className="h-3/5 drop-shadow-xl" src={element.icon} />
            <span>{element.name}</span>
          </button>
        ))}
      </div>

      <Window>
        <iframe 
        src="https://k-alex-leon.github.io/3d-react-rubikcube/"
        className="w-full h-full"
        />
      </Window>
    </div>
  );
}
