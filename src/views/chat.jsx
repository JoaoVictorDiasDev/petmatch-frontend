import React from "react";
import { useState } from "react";
import "../styles/chat.css"

import Header from './header.jsx'
import UserImg from '../images/user_chat.png'
import ChatImg from '../images/gpt_user.png'

function Chat(props){
    return (
        <>
            <Header/>
            <div id="chat">
                <div id="chat-area">
                    <div className="user-from">
                        <img src={ChatImg} alt="imagem do chat gpt" />
                        <p>
                            Olá! Estamos aqui para te ajudar a achar o pet ideal. Por favor, nos conte um pouco 
                            sobre seu estilo de vida para que possamos achar uma anilmazinho compatível. Por exemplo,
                            “Eu sou um adulto que trabalha fora todos os dias, gosto de caminhar no parque e ir para 
                            praia aos finais de semana. No meu tempo em casa, gosto relaxar e criar bons momentos ao lado de quem amo.”
                        </p>
                    </div>
                    <div className="user-to">
                    <img src={UserImg} alt="imagem do usuário" />
                        <p>Eu sou uma senhora idosa, com um pouco de dificuldade no deslocamento. Moro sozinha em um apartamento pequeno. 
                            Costumo passar uns dias com os meus filhos, que gostam da ideia de eu ter um cãozinho.</p>
                    </div>
                    <div className="user-from">
                        <img src={ChatImg} alt="imagem do chat gpt" />
                        <p>
                            Olá! Estamos aqui para te ajudar a achar o pet ideal. Por favor, nos conte um pouco 
                            sobre seu estilo de vida para que possamos achar uma anilmazinho compatível. Por exemplo,
                            “Eu sou um adulto que trabalha fora todos os dias, gosto de caminhar no parque e ir para 
                            praia aos finais de semana. No meu tempo em casa, gosto relaxar e criar bons momentos ao lado de quem amo.”
                        </p>
                    </div>
                    <div className="user-to">
                    <img src={UserImg} alt="imagem do usuário" />
                        <p>Eu sou uma senhora idosa, com um pouco de dificuldade no deslocamento. Moro sozinha em um apartamento pequeno. 
                            Costumo passar uns dias com os meus filhos, que gostam da ideia de eu ter um cãozinho.</p>
                    </div>
                    <div className="user-from">
                        <img src={ChatImg} alt="imagem do chat gpt" />
                        <p>
                            Olá! Estamos aqui para te ajudar a achar o pet ideal. Por favor, nos conte um pouco 
                            sobre seu estilo de vida para que possamos achar uma anilmazinho compatível. Por exemplo,
                            “Eu sou um adulto que trabalha fora todos os dias, gosto de caminhar no parque e ir para 
                            praia aos finais de semana. No meu tempo em casa, gosto relaxar e criar bons momentos ao lado de quem amo.”
                        </p>
                    </div>
                    <div className="user-to">
                    <img src={UserImg} alt="imagem do usuário" />
                        <p>Eu sou uma senhora idosa, com um pouco de dificuldade no deslocamento. Moro sozinha em um apartamento pequeno. 
                            Costumo passar uns dias com os meus filhos, que gostam da ideia de eu ter um cãozinho.</p>
                    </div>
                    <div className="user-from">
                        <img src={ChatImg} alt="imagem do chat gpt" />
                        <p>
                            Olá! Estamos aqui para te ajudar a achar o pet ideal. Por favor, nos conte um pouco 
                            sobre seu estilo de vida para que possamos achar uma anilmazinho compatível. Por exemplo,
                            “Eu sou um adulto que trabalha fora todos os dias, gosto de caminhar no parque e ir para 
                            praia aos finais de semana. No meu tempo em casa, gosto relaxar e criar bons momentos ao lado de quem amo.”
                        </p>
                    </div>
                    <div className="user-to">
                    <img src={UserImg} alt="imagem do usuário" />
                        <p>Eu sou uma senhora idosa, com um pouco de dificuldade no deslocamento. Moro sozinha em um apartamento pequeno. 
                            Costumo passar uns dias com os meus filhos, que gostam da ideia de eu ter um cãozinho.</p>
                    </div>
                </div>
                <div id="send-text-area">
                    <input type="text" name="chat-input" id="chat-input" placeholder="Envie uma mensagem..."/>
                </div>
            </div>
        </>
    )
}

export default Chat