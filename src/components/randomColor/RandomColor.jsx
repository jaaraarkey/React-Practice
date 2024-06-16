import { useEffect, useState } from "react";
import StarRating from "../star-raiting/StarRating";

let rgbState = "";
let rgb = "";
// eslint-disable-next-line react/prop-types
const RandomColor = ({ divWidth, divHeigth }) => {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const randomColorGeneratortUtil = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRnd_HEX_Color = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorGeneratortUtil(hex.length)];
    }
    setColor(hexColor);
  };
  const handleCreateRnd_RGB_Color = () => {
    const r = randomColorGeneratortUtil(255);
    const g = randomColorGeneratortUtil(255);
    const b = randomColorGeneratortUtil(255);
    rgb = `(${r}, ${g}, ${b})`;
    rgbState = `rgb${rgb}`;
    setColor(rgbState);
  };

  useEffect(() => {
    typeColor === "rgb" ? handleCreateRnd_RGB_Color : handleCreateRnd_HEX_Color;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeColor]);
  return (
    <div
      style={{ background: color }}
      className={`container flex flex-col gap-2 h-${divHeigth} w-${divWidth} rounded-lg shadow-lg `}
    >
      <h1 className=" text-center bg-slate-100 p-2 uppercase bg rounded-t-md ">
        Random color generator
        <div className="flex gap-2 justify-center">
          <button
            className={`bg-slate-700 text-slate-50 p-2 rounded-sm focus:bg-slate-500`}
            onClick={() => setTypeColor("hex")}
          >
            HEX Color
          </button>
          <button
            className={`bg-slate-700 text-slate-50 p-2 rounded-sm focus:bg-slate-500`}
            onClick={() => setTypeColor("rgb")}
          >
            RGB Color
          </button>
          <button
            className={`bg-slate-700 text-slate-50 p-2 rounded-sm focus:bg-slate-500`}
            onClick={() =>
              typeColor === "hex"
                ? handleCreateRnd_HEX_Color()
                : handleCreateRnd_RGB_Color()
            }
          >
            Generate
          </button>
        </div>
      </h1>
      <div className="flex justify-center ">
        <div className="flex flex-col items-center">
          <h1 className=" uppercase font-bold p-2 text-center rounded-t-m bg-slate-50 w-[17.5rem]">
            <h1 className="">
              {typeColor === "hex" ? "HEX color: " : "RGB color: "}
            </h1>
            {color}
          </h1>
          <StarRating numStars={5} width={17.5} />
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
