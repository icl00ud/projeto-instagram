import {useEffect, useState} from 'react';

function Header(props) {

    return(
        <div className="header">
        <div className="center">
          <div className="header_logo">
            <a href=""><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img></a>
          </div>
          {
            (props.user)?
            <div className="header_logadoInfo">
              <p>Olá, <b>{props.user}</b>.</p>
              <a href="#">Postar!</a>
            </div>
            :
            <div className="header_loginForm">
              <form>
                <input type="text" placeholder="Login..."></input>
                <input type="password" placeholder="Senha..."></input>
                <input type="submit" name="acao" value="Login"></input>
              </form>
              <div className="btn_criarConta">
                <a href="#">Criar conta!</a>
              </div>
            </div>
          }
          
        </div>
      </div>
    ) 
}

export default Header;