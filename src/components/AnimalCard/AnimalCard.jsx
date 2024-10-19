import PropTypes from "prop-types";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
export function AnimalCard({ animal, onSelect }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleIsFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  return (
    <div
      className="m-2 rounded-lg shadow-bottom cursor-pointer text-black flex justify-between items-center md:w-72 md:h-32 w-full h-32"
      onClick={() => onSelect(animal)}
    >
      <img
        className="w-28 h-full object-cover rounded-md "
        src={animal.image}
      />
      <div className="flex flex-col gap-4 items-start pl-4 flex-grow">
        <h3 className="flex flex-col font-bold text-sm">{animal.name}</h3>
        <p className="font-light text-xs">{animal.breed}</p>
      </div>
      <button className="ml-4" onClick={handleIsFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
    </div>
  );
}
AnimalCard.propTypes = {
  animal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
