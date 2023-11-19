import React from "react";
import "../styles/chat.css"

function PetCard({petModel, openModal}){
    return (
        <img src={petModel.imgUrl} alt="" onClick={() => openModal(petModel)} />
    )
}

export default PetCard