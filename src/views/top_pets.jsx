import React, { useState } from "react";
import Header from "./header";

import '../styles/top_pets.css'

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

function TopPets(props){
    
    const [modalInfo, setModalInfo] = useState({
        nome: '',
        descricao: '',
        imagemSrc: ''
    })

    const openModal = (name, desc, imgSrc) => {
        setModalInfo({
            nome: name,
            descricao: desc,
            imagemSrc: imgSrc
        })
    }

    const closeModal = () =>{
        setModalInfo({
            nome: '',
            descricao: '',
            imagemSrc: ''
        })
    }

    return (
        <>
            <Header/>
            <div id="top-pet-modal" className="top-modal" style={{ display: modalInfo.nome ? 'flex' : 'none' }}>
                <span className="top-close-pet-span" onClick={closeModal}>X</span>
                <div className="top-pet-description">
                    <h3>{modalInfo.nome}</h3>
                    <p>
                        {modalInfo.descricao}
                    </p>
                </div>
                <img src={modalInfo.imagemSrc} alt="" id="top-pet-imagem"/>
            </div>
            <div id="top-overlay" css={{ display: modalInfo.nome ? 'flex' : 'none' }}></div>
            <section>
                <h1>Seu top 10 cães</h1>
                <div className="top-pets-table">
                    <div className="top-pets-row">
                        <div className="top-pet-content">
                            <img src={Pet1} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet1)}/>
                            <button>Adotar</button>
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet2}  onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet1)}/>
                            <button>Adotar</button>
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet3} onClick={() => openModal('Costelinha', 'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', Pet1)}/>
                            <button>Adotar</button>
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet4}/>
                            <button>Adotar</button>
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet5}/>
                            <button>Adotar</button>
                        </div>
                    </div>
                    <div className="top-pets-row">
                        <div className="top-pet-content">
                            <img src={Pet6}/> 
                            <button>Adotar</button>                       
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet7}/>
                            <button>Adotar</button>
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet8}/>
                            <button>Adotar</button>
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet9}/>
                            <button>Adotar</button>
                        </div>
                        <div className="top-pet-content">
                            <img src={Pet10}/>
                            <button>Adotar</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopPets