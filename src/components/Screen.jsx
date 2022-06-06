import React from 'react';
import './Screen.css';

export default function Screen() {
  return (
    <div className='screenContainer'>
      <div className='proyectos contenedor'>
          <a href="https://juanelcaballo.club/20079/Lab6/index.html" className='link'>Trabajo 1</a>
          <a href="https://juanelcaballo.club/20079/Lab8/build/index.html" className='link'>Trabajo 2</a>
          <a href="https://juanelcaballo.club/20079/Lab3/index.html" className='link'>Trabajo 3</a>
      </div>
      <div className='nombre'>Kenneth Galvez</div>
      <div className='redes contenedor'>
          <a href="https://www.instagram.com/kenivel_marivel/" className='link'>Instagram</a>
          <a href="https://www.linkedin.com/in/kenneth-galvez-49259b1a0/" className='link'>Linkedin</a>
          <a href="https://github.com/KennethGalvez" className='link'>GitHub</a>
      </div>
    </div>

  )
}

