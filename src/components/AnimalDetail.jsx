import PropTypes from "prop-types";
export function AnimalDetail({ selectedAnimal }) {
  if (!selectedAnimal)
    return <p>Seleccione una mascota para ver mas detalles</p>;
  return (
    <div className="flex flex-col ">
      <h2> {selectedAnimal.name}</h2>
      <p>Raza: {selectedAnimal.breed}</p>
      <p>Edad: {selectedAnimal.age}</p>
      <p>Estatura: {selectedAnimal.size}</p>
      <p>Peso: {selectedAnimal.weight}</p>
      <p>{selectedAnimal.description}</p>
    </div>
  );
}
AnimalDetail.propTypes = {
  selectedAnimal: PropTypes.any,
};
