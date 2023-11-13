import React from "react";
import Header from "./header";
import '../styles/login.css'

function Login(props){
    return(
        <>
            <Header/>
            <section id="login">
                <p>Logue com sua conta PetMatch</p>
                <div class="login-box">
                    <input type="email" name="email" id="" placeholder="E-mail"/>
                    <input type="password" name="password" id="" placeholder="Senha"/>
                    <button>Logar</button>
                    <a href="#">Esqueci a senha</a>
                    <a href="#">Criar conta</a>
                </div>
        
            </section>
        </>
    )
}

export default Login