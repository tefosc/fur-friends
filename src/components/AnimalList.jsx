import PropTypes from "prop-types";
import { AnimalCard } from "./AnimalCard/AnimalCard";

export function AnimalList({ animals, onSelect }) {
  return (
    <div className="flex flex-col gap-2 ">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} onSelect={onSelect} />
      ))}
    </div>
  );
}
AnimalList.propTypes = {
  animals: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
};
