import { AnimalList } from "../components/AnimalList";
import { AnimalDetail } from "../components/AnimalDetail";
import { useState } from "react";
import { mockPets } from "../utils/mockPets";

export function AdoptionPage() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="flex  justify-evenly bg-slate-500">
      <article>
        <AnimalList animals={mockPets} onSelect={setSelectedAnimal} />
      </article>
      <aside>
        <AnimalDetail selectedAnimal={selectedAnimal} />
      </aside>
    </div>
  );
}
