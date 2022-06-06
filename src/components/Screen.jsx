import React from 'react';
import './Screen.css';
import Memoria from '../img/Juego.png';
import Calculadora from '../img/calcu.png';
import Libro from '../img/libro.png';
import Insta from '../img/insta.png';
import Linke from '../img/Llogo.png';
import Git from '../img/gitlogo.png';

export default function Screen() {
  return (
    <div className='screenContainer'>
      <div className='proyectos contenedor'>
          <a href="https://juanelcaballo.club/20079/Lab6/index.html" className='link'>
                <img src={Memoria} alt="" />
          </a>
          <a href="https://juanelcaballo.club/20079/Lab8/build/index.html" className='link'>
                <img src={Calculadora} alt="" />
          </a>
          <a href="https://juanelcaballo.club/20079/Lab3/index.html" className='link'>
                <img src={Libro} alt="" />

          </a>
      </div>
      <div className='nombre'>
        <div class="bouncing-text">
            <div class="K">K</div>
            <div class="E">E</div>
            <div class="N">N</div>
            <div class="N2">N</div>
            <div class="E2">E</div>
            <div class="T">T</div>
            <div class="H">H</div>
            <div class="G">G</div>
            <div class="A">A</div>
            <div class="L">L</div>
            <div class="V">V</div>
            <div class="E3">E</div>
            <div class="Z">Z</div>
            <div class="shadow"></div>
            <div class="shadow-two"></div>
        </div>
      </div>
      <div className='redes contenedor'>
          <a href="https://www.instagram.com/kenivel_marivel/" className='link'>
                <img src={Insta} alt="" />

          </a>
          <a href="https://www.linkedin.com/in/kenneth-galvez-49259b1a0/" className='link'>
                <img src={Linke} alt="" />
          </a>
          <a href="https://github.com/KennethGalvez" className='link'>
                <img src={Git} alt="" />
          </a>
      </div>
    </div>

  )
}

