import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/randomColor/RandomColor";
import Input from "./components/input/Input";

function App() {
  return (
    <div className="flex">
      <div className="flex p-2 flex-col gap-2">
        <div>
          <Accordion divWidth={80} divHeigth={80} />
        </div>
        <RandomColor divWidth={80} divHeigth={"full"} />
      </div>

      <div className="flex flex-col">
        <div className="absolute top-10 left-[24rem]">
          <Input />
        </div>
        <ImageSlider
          url="https://picsum.photos/v2/list"
          limit={"10"}
          page={"2"}
        ></ImageSlider>
      </div>
      {/* <div className="h-[24.5rem] w-screen"></div> */}
    </div>
  );
}

export default App;
