import React from 'react'
import { Link } from 'react-router-dom'

// Importando todas as telas apenas no header (não alterar pfv)
import '../styles/header.css'

// importando imagens
import Logo from '../images/logo.png'
import Pata from '../images/pata.png'
import Chat from '../images/chat.png'
import User from '../images/user.png'


function Header(props) {
    return(
        <header>
            <Link to='/'>
            <img src={Logo} alt="logo-marca"/>
            </Link>
            <menu>  
                {/* <Router> */}

                    <div class="header-items">
                        <div>
                            <img src={Pata} alt="pet"/>
                            <Link to='/pets'>Pets</Link>
                        </div>
                        <div>
                            <img src={Chat} alt="chat"/>
                            <Link to='/chat'>Chat</Link>
                        </div>
                        <div>
                            <img src={User} alt="user"/>
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                {/* </Router> */}
            </menu>
        </header>
    )
}

export default Header