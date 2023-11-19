
function PetModal ({isOpen, onClose, petModel}) {
    if (!isOpen) return null;

    return (
        <>
          <div id="pet-modal" className="modal">
            <span className="close-pet-span" onClick={onClose}>X</span>
            <div className="pet-description">
              <h3>{petModel.name}</h3>
              <p>{petModel.descricao}</p>
            </div>
            <img src={petModel.imgUrl} alt="" id="pet-imagem" />
          </div>
        </>
    )
}

export default PetModal;