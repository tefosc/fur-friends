import PropTypes from "prop-types";
import { AnimalCard } from "./AnimalCard/AnimalCard";
import { useState } from "react";

export function AnimalList({ animals, onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAnimals = animals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl md:w-[370px] w-full text-black">
      <h2 className="text-2xl font-serif top-0 bg-white ">🐶 Amigos peludos</h2>
      <input
        className="bg-gray-100 w-full py-1 px-2 rounded-lg"
        placeholder="🔎 Busca a tu amigo peludo"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="bg-white p-2 w-full overflow-y-auto overflow-x-hidden md:max-h-[75vh] max-h-[50vh]">
        {filteredAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

AnimalList.propTypes = {
  animals: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
