import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/randomColor/RandomColor";

function App() {
  return (
    <div className="flex ">
      <div className="flex p-2 flex-col gap-6 self-start">
        <Accordion />
        <Accordion />
      </div>

      <div className="h-[24.5rem]">
        <RandomColor />
      </div>
    </div>
  );
}

export default App;
