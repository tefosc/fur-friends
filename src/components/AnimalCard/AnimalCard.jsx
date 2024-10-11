import PropTypes from "prop-types";
import "./styles.css";
export function AnimalCard({ animal, onSelect }) {
  return (
    <div
      className="m-2 rounded-lg shadow-bottom cursor-pointer text-black flex justify-between items-center md:w-72 md:h-32 w-72 h-32"
      onClick={() => onSelect(animal)}
    >
      <img
        className="w-24 h-full object-cover rounded-md "
        src={animal.image}
      />
      <div className="flex flex-col gap-4 items-start justify-start -translate-x-full">
        <h3 className="flex flex-col font-bold text-sm">{animal.name}</h3>
        <p className="font-light text-xs">{animal.breed}</p>
      </div>
    </div>
  );
}
AnimalCard.propTypes = {
  animal: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
