import "../styles/pets_modal.css"

function PetModal({isOpen, onClose, petModel}) {
    if (!isOpen) return null;

    return (
        <>
            <div className="pet-modal">
                <span className="close-pet-span" onClick={onClose}>X</span>
                <div className="pet-info">
                    <h3>{petModel.name}</h3>
                    <p>{petModel.descricao}</p>
                </div>
                <div className="pet-image">
                    <img src={petModel.imgUrl} alt="" id="pet-imagem"/>
                </div>
            </div>
        </>
    )
}

export default PetModal;