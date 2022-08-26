import {useEffect, useState} from 'react';

function Header(props) {

  function criarConta(e) {
    e.preventDefault();
    

    // Criar conta firebase
  }

  function abrirModalCriarConta(e) {
    e.preventDefault();
    let modal = document.querySelector('.modalCriarConta');
    modal.style.display = "block";
  }

  function fecharModalCriar() {
    let modal = document.querySelector('.modalCriarConta');
    modal.style.display = "none";

  }



    return(

        <div className="header">

        <div className='modalCriarConta'>
          <div className='formCriarConta'>
            <div onClick={()=>fecharModalCriar()} className='close-modal-criar'>X</div>
            <h2>Criar Conta</h2>
            <form onSubmit={(e)=>criarConta(e)}>
              <input type={"text"} placeholder={"Seu e-mail..."}></input>
              <input type={"text"} placeholder={"Seu username"}></input>
              <input type={"password"} placeholder={"Sua senha..."}></input>
              <input type={"submit"} value={"Criar Conta"}></input>
            </form>
          </div>
        </div>

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
                <a onClick={(e)=>abrirModalCriarConta(e)} href="#">Criar conta!</a>
              </div>
            </div>
          }
          
        </div>
      </div>
    ) 
}

export default Header;