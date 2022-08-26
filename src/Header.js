import {useEffect, useState} from 'react';
import {auth} from './firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function Header(props) {

  /*
const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
*/


  function criarConta(e) {

    e.preventDefault();
    const email = document.getElementById('email-cadastro').value;
    const password = document.getElementById('senha-cadastro').value;
    const user = document.getElementById('username-cadastro').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Conta criada com sucesso!');
        let modal = document.querySelector('.modalCriarConta');
        modal.style.display = "none";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

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
              <input id='email-cadastro' type={"text"} placeholder={"Seu e-mail..."}></input>
              <input id='username-cadastro' type={"text"} placeholder={"Seu usuário..."}></input>
              <input id='senha-cadastro' type={"password"} placeholder={"Sua senha..."}></input>
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