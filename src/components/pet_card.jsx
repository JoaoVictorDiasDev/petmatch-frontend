import React, { useState } from "react";
import "../styles/chat.css"
import useImage from "../hooks/useImage";
import PetModal from "./pet_modal";

function PetCard({petModel}){
    const image = useImage(petModel.idPet + ".jpg")
    petModel.imgUrl = image;

    const [isPetModalOpen, setIsPetModalOpen] = useState(false)

    function onClose(){
        setIsPetModalOpen(false);
    }


    return (
        <>
            <PetModal isOpen={isPetModalOpen} onClose={onClose} petModel={petModel}/>
            <div className="pet-card">
                <img src={image} alt="" onClick={() => setIsPetModalOpen(true)} />
            </div>
        </>
    )
}

export default PetCard