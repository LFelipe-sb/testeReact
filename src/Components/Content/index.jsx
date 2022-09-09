import React from 'react';
import contentPhoto from '../../Assets/photo.jpeg';
import linkedIn from '../../Assets/linkedin.png';
import github from '../../Assets/github.png';
import jsLogo from '../../Assets/js.png';
import reactLogo from '../../Assets/react-logo.png';
import nodeLogo from '../../Assets/node-logo.png';
import './style.css';

function Index() {
  return (
    <>
      <div className="content">
        <h1>Luís Felipe dos Santos Barbosa</h1>

        <div className="informacoes">
          <img src={contentPhoto} alt="Homem com roupa social, encostado em parede com efeito de luzes vermelha" />
        
          <div>
            <p>Desenvolvedor Fullstack com ênfase nas tecnologias Node e React (javascript / typescript), Java e bancos de dados relacionais. Entusiasta de novas tecnologia, apaixonado por programação. Sempre disposto a aprender arquiteturas, tecnologias e desenvolver novos projetos. Em busca de novos desafios e crescimento na área de desenvolvimento para agregar valor a empresa e seus clientes. Facilidade para trabalhar em equipe, com alto comprometimento nos prazos e qualidade nas entregas da demandas. </p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar gravida varius. Phasellus ut ornare ipsum, nec pretium ligula. Vivamus euismod volutpat sem, ac sagittis ex mattis ac. Aliquam eu odio nulla. Sed vitae ex tellus. Vestibulum fermentum tincidunt velit eget ornare. Donec vitae ultricies purus. Nunc lobortis, dui eget aliquam aliquam, mi nisl rhoncus lorem, ut varius diam ligula quis tortor.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar gravida varius. Phasellus ut ornare ipsum, nec pretium ligula. Vivamus euismod volutpat sem, ac sagittis ex mattis ac. Aliquam eu odio nulla. Sed vitae ex tellus. Vestibulum fermentum tincidunt velit eget ornare. Donec vitae ultricies purus. Nunc lobortis, dui eget aliquam aliquam, mi nisl rhoncus lorem, ut varius diam ligula quis tortor.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar gravida varius. Phasellus ut ornare ipsum, nec pretium ligula. Vivamus euismod volutpat sem, ac sagittis ex mattis ac. Aliquam eu odio nulla. Sed vitae ex tellus. Vestibulum fermentum tincidunt velit eget ornare. Donec vitae ultricies purus. Nunc lobortis, dui eget aliquam aliquam, mi nisl rhoncus lorem, ut varius diam ligula quis tortor.</p>

            <h3>Curiosisdades:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar gravida varius. Phasellus ut ornare ipsum, nec pretium ligula. Vivamus euismod volutpat sem, ac sagittis ex mattis ac. Aliquam eu odio nulla. Sed vitae ex tellus. Vestibulum fermentum tincidunt velit eget ornare. Donec vitae ultricies purus. Nunc lobortis, dui eget aliquam aliquam, mi nisl rhoncus lorem, ut varius diam ligula quis tortor.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar gravida varius. Phasellus ut ornare ipsum, nec pretium ligula. Vivamus euismod volutpat sem, ac sagittis ex mattis ac. Aliquam eu odio nulla. Sed vitae ex tellus. Vestibulum fermentum tincidunt velit eget ornare. Donec vitae ultricies purus. Nunc lobortis, dui eget aliquam aliquam, mi nisl rhoncus lorem, ut varius diam ligula quis tortor.</p>
            <br />
            <ul className="curiosidades">
              <li>Curiosidade 01</li>
              <li>Curiosidade 02</li>
              <li>Curiosidade 03</li>
              <li>Curiosidade 04</li>
              <li>Curiosidade 05</li>
            </ul>

            <h3>Informações:</h3>
            <ul className="contatos">
              <li>luis.sb@hotmail.com</li>
              <li>11 4002-8922</li>
              <li>01/01/1995</li>
              <li>São Paulo - SP</li>
            </ul>
            <ul className="links_sociais">
              <li><img src={linkedIn} alt="Logo do LinkedIn" /></li>
              <li><img src={github} alt="Logo do Github" /></li>
            </ul>
          </div>        
        </div>    
      </div>

    <div className="aprendizado">
      <h3>O que estou aprendendo?</h3>

      <div className="tecnologias">
        <figure>
          <img src={jsLogo} alt="Logo do javascript" />
          <figcaption>JS ES6+</figcaption>
        </figure>

        <figure>
          <img src={reactLogo} alt="Logo do React" />
          <figcaption>React e <br/>React Native</figcaption>
        </figure>

        <figure>
          <img src={nodeLogo} alt="Logo do Node" />
          <figcaption>Node.js</figcaption>
        </figure>
      </div>
    </div>
  </>
  )
}

export default Index;