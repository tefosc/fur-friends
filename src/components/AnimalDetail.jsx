import PropTypes from "prop-types";
export function AnimalDetail({ selectedAnimal }) {
  if (!selectedAnimal)
    return (
      <p className="text-black ">
        Seleccione una mascota para ver mas detalles
      </p>
    );
  return (
    <div className="flex flex-col bg-white text-black md:w-[300px] w-auto rounded-xl">
      <div className="flex md:flex-col justify-between items-center gap-1">
        <img
          src={selectedAnimal.image}
          alt="Image Dogo"
          className="md:rounded-t-xl object-cover h-full w-[120px] md:w-full rounded-tl-xl"
        />
        <h2 className="md:mt-5 text-xl font-bold left-0">
          {selectedAnimal.name}
        </h2>
        <p className="md:mt-1 font-extralight mr-3.5">
          {" "}
          {selectedAnimal.breed}
        </p>
      </div>

      <div className="flex items-center justify-around gap-2 mt-3">
        <div className="flex flex-col items-center justify-center bg-gray-100 p-2 rounded-xl">
          <p className="font-bold">Edad</p>
          <p> {selectedAnimal.age}</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-2 rounded-xl">
          <p className="font-bold">Estatura</p>
          <p>{selectedAnimal.size}</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-2 rounded-xl">
          <p className="font-bold">Peso</p>
          <p> {selectedAnimal.weight}</p>
        </div>
      </div>
      <p className="my-3">{selectedAnimal.description}</p>
    </div>
  );
}
AnimalDetail.propTypes = {
  selectedAnimal: PropTypes.any,
};
