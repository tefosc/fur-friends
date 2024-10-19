import { AnimalList } from "../components/AnimalList";
import { AnimalDetail } from "../components/AnimalDetail";
import { useState } from "react";
import { mockPets } from "../utils/mockPets";

export function AdoptionPage() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:justify-evenly justify-evenly">
      <article>
        <AnimalList animals={mockPets} onSelect={setSelectedAnimal} />
      </article>
      <aside className="md:w-auto w-full">
        <AnimalDetail selectedAnimal={selectedAnimal} />
      </aside>
    </div>
  );
}
