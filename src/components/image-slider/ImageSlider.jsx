// eslint-disable-next-line no-unused-vars
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Input } from "../input/Input";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      console.log(data);

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  useEffect(() => {
    if (url !== " ") fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (loading)
    return (
      <div className="text-center bg-slate-100">
        Data is loading... <br /> Please wait
      </div>
    );
  if (errorMsg !== null) {
    return <div>Oops! Error occured: {errorMsg}</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container rounded-lg justify-center align-middle w-screen">
      {/* Img Carusell */}
      <div className="flex p-2 items-center ">
        <button
          className="arrow  absolute  left-100 shadow-xl bg-slate-900 bg-opacity-25 bg-blur-xl"
          onClick={handlePrevious}
          onKeyDown={(event) => handlePrevious(event.key)}
        >
          <ChevronLeft size={60} color="white" />
        </button>
        {image && image.length
          ? image.map((e, index) => (
              <img
                key={e.id}
                alt={e.download_url}
                src={e.download_url}
                className={`current-img rounded-md shadow-xl h-full w-full object-contain ${
                  currentSlide === index ? "" : "hidden"
                }`}
              />
            ))
          : null}
        <button
          className="arrow position absolute right-[3.3rem] shadow-xl bg-slate-900 bg-opacity-25 bg-blur-xl"
          onClick={handleNext}
        >
          <ChevronRight size={60} color="white" />
        </button>
      </div>
      <div className="absolute left-1/2 bottom-120">
        <span className="circle-indicator flex justify-center  bottom-7 ">
          {image && image.length
            ? image.map((_, index) => (
                <button
                  key={index}
                  className={`current-indicator ${
                    currentSlide === index
                      ? "bg-slate-500 h-3 w-3 rounded-full outline-none  ml-2"
                      : "bg-slate-200 h-3 w-3 rounded-full outline-none  ml-2"
                  }`}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
