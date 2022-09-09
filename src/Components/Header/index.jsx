import React from 'react';
import profilePhoto from '../../Assets/photo3.jfif';
import './style.css';

function Index() {
  return (
    <header>
      <img src={profilePhoto} />
      <nav>
        <ul>
          <li>Sobre</li>
          <li>Atividades</li>
          <li>Hobbies</li>
          <li>Contatos</li>
        </ul>
      </nav>
    </header>
  )
}

export default Index