import React, { Component } from 'react';
import '../assets/styles/Main.scss'
import '../assets/styles/Header.scss'

class Header extends Component {
    render() {
        return(
            <header className="header">
                <img className="header__img" src="../assets/images/logo-platzi-video-BW2.png" alt="App Video" />
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img src="../assets/images/user-icon.png" alt="" />
                        <p>Perfil</p>
                    </div>
                    <ul>
                        <li><a href="/">Cuenta</a></li>
                        <li><a href="/">Cerrar Sesión</a></li>
                    </ul>
                </div>
            </header>
        )
    };
}

export default Header;