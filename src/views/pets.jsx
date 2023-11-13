import React , { useState } from "react";
import Header from "./header";

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


function Pets(props){
    const [modalInfo, setModalInfo] = useState({
        nome: '',
        descricao: '',
        imagemSrc: '',
      });
    
      const openModal = (nome, descricao, imagemSrc) => {
        setModalInfo({
          nome,
          descricao,
          imagemSrc,
        });
      };
    
      const closeModal = () => {
        setModalInfo({
          nome: '',
          descricao: '',
          imagemSrc: '',
        });
      };
    
      return (
        <>
          <Header />
    
          <div id="pet-modal" className="modal" style={{ display: modalInfo.nome ? 'flex' : 'none' }}>
            <span className="close-pet-span" onClick={closeModal}>X</span>
            <div className="pet-description">
              <h3>{modalInfo.nome}</h3>
              <p>{modalInfo.descricao}</p>
            </div>
            <img src={modalInfo.imagemSrc} alt="" id="pet-imagem" />
          </div>
    
          <div id="overlay" css={{ display: modalInfo.nome ? 'flex' : 'none' }}></div>
    
          <section id="pets">
            <h1>Adote um cãozinho!</h1>
            <div className="pets-table">
              <div className="pets-row">
                <img src={Pet1} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet1)} />
                <img src={Pet2} onClick={() => openModal('Outro Pet', 'Descrição do outro pet', Pet2)} />
                <img src={Pet3} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet3)} />
                <img src={Pet4} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet4)} />
              </div>
              <div className="pets-row">
                <img src={Pet5} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet5)} />
                <img src={Pet6} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet6)} />
                <img src={Pet7} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet7)} />
                <img src={Pet8} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet8)} />
              </div>
              <div className="pets-row">
                <img src={Pet9} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet9)} />
                <img src={Pet10} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet10)} />
                <img src={Pet11} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet11)} />
                <img src={Pet12} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet12)} />
              </div>
            </div>
          </section>
        </>
      );
}

export default Pets