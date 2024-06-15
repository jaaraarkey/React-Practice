// Single selection accordion
// Multi selection accordion

import { useState } from "react";
import data from "../data";
import { ChevronDown } from "lucide-react";
// Setup
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);
  const [multiStatus, setMultiStatus] = useState("Single accordion mode");

  let copyMultiSelection = [...multi];

  // Handlers
  const handle_Single_Selection = (getId) => {
    console.log(getId);
    if (getId) setSelected(getId === selected ? null : getId);
  };

  const handle_Multi_Selection = (getId) => {
    const findIndexOfClickedId = copyMultiSelection.indexOf(getId);
    console.log(findIndexOfClickedId);

    if (findIndexOfClickedId === -1 && findIndexOfClickedId !== 0) {
      copyMultiSelection.push(getId);
    } else copyMultiSelection.splice(findIndexOfClickedId, 1);

    setMulti(copyMultiSelection);
  };

  const btnHandler = () => {
    setMultiStatus((prevStatus) =>
      prevStatus === "Single accordion mode"
        ? "Multi accordion mode"
        : "Single accordion mode"
    );
  };
  // Component body
  return (
    <div className="wrapper m-2 flex flex-col items-center justify-center gap-2 rounded-lg shadow-md w-60">
      <button
        className={`bg-slate-600 p-2 text-white  rounded-t-md w-60`}
        onClick={() => {
          setEnableMulti(!enableMulti);
          btnHandler();
        }}
      >
        {multiStatus}
      </button>
      <div className="accordion w-60  rounded-md  ease-in-out duration-200 ">
        {data && data.length > 0 ? (
          data.map((e) => (
            <div
              key={e.id}
              className={`item p-2 mb-2 bg-slate-400 text-slate-50 rounded-b-md`}
            >
              <div
                className=" font-bold title gap-2 flex justify-between"
                onClick={
                  enableMulti
                    ? () => handle_Multi_Selection(e.id)
                    : () => handle_Single_Selection(e.id)
                }
              >
                <h3>{e.title}</h3>
                <span>
                  <ChevronDown size="20" />
                </span>
              </div>
              {enableMulti
                ? multi.indexOf(e.id) !== -1 && (
                    <div className="bg-white text-slate-900 p-2">
                      {e.content}
                    </div>
                  )
                : selected === e.id && (
                    <div className="bg-white text-slate-900 p-2">
                      {e.content}
                    </div>
                  )}
              {/* {selected === e.id || multi.indexOf(e.id) !== -1 ? (
                <div className="bg-white text-violet-500 p-2">{e.content}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div> No Data Found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
