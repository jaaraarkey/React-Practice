import { Star } from "lucide-react";
import { useState } from "react";

const StarRating = ({ numStars, width }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getIndex) => {
    setRating(getIndex);
  };

  const handleMouseEnter = (getIndex) => {
    setHover(getIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div
      className={` flex justify-center p-2 bg-slate-800 w-[${width}rem] flex rounded-b-lg shadow-lg`}
    >
      {[...Array(numStars)].map((_, index) => {
        index += 1;

        return (
          <Star
            className="shadow-lg "
            color="white"
            key={index}
            fill={index <= hover || index <= rating ? "white" : "none"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={"1.5rem"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
