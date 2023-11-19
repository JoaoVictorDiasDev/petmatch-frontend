import React , { useEffect, useState } from "react";
import Header from "./header";
import PetCard from "./../components/pet_card";

import '../styles/pets.css';

import Pet1 from "../images/pets/pet1.png"
import Pet2 from "../images/pets/pet2.png"
import Pet3 from "../images/pets/pet3.png"
import Pet4 from "../images/pets/pet4.png"
import Pet5 from "../images/pets/pet5.png"
import Pet6 from "../images/pets/pet6.png"
import Pet7 from "../images/pets/pet7.png"
import Pet8 from "../images/pets/pet8.png"
import Pet9 from "../images/pets/pet9.png"
import Pet10 from "../images/pets/pet10.png"
import Pet11 from "../images/pets/pet11.png"
import Pet12 from "../images/pets/pet12.png"
import { useFetch } from "../hooks/useFetch";
import useImage from "../hooks/useImage";
import PetModal from "../components/pet_modal";


function Pets(props){
    const pets = useFetch('http://localhost:8080/findPets');

      return (
        <>
          <Header />
          {/* LISTA TODOS PETS*/}
          <section id="pets">
            <h1>Adote um cãozinho!</h1>

            <div className="pets-table">
                {pets.map(pet => <PetCard petModel={pet}/>)}
            </div>

          </section>
        </>
      );
}

export default Pets