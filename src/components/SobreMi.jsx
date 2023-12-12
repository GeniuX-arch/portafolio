import {React, useContext,useState} from 'react'
import {traduction} from '../context/traduction'

export default function SobreMi() {
  const {Traduction}=useContext(traduction);

 if(Traduction){ 
  return (
    <div className='text-xl min-h-screen text-center my-20'>
        <h1 className='text-purple-400 font-bold text-2xl '>Sobre mi</h1>
        <br />
        <p>Es un placer saludarte. Mi nombre es Jhoan y me complace presentarme como desarrollador web con una <span className='text-yellow-500'>sólida experiencia </span>en la creación de soluciones digitales innovadoras. Me apasiona el mundo de la tecnología y estoy comprometido a brindar experiencias en línea excepcionales a través de un diseño y desarrollo web cuidadoso. </p>
        <br />

        <p>A lo largo de mi carrera, he adquirido <span className='text-yellow-500'>habilidades técnicas en lenguajes de suma importancia para la actualidad.</span> Mi enfoque no solo se centra en la funcionalidad, sino también en la usabilidad y el diseño estético, buscando siempre <span className='text-yellow-500'>proporcionar interfaces intuitivas y atractivas.</span></p>

        <br />

        <p>En resumen, mi objetivo es contribuir al éxito de los proyectos mediante la aplicación de mis habilidades técnicas y mi pasión por la creación de experiencias web excepcionales. Estoy emocionado por la posibilidad de colaborar en tus futuros proyectos y contribuir al crecimiento y éxito continuo de tu empresa</p>
    </div>
  )
 }else{
  
  return (
  <div className='text-xl min-h-screen text-center my-20'>
    <h1 className='text-purple-400 font-bold text-2xl'>About Me</h1>
    <br />
    <p>It's a pleasure to greet you. My name is Jhoan, and I'm delighted to introduce myself as a web developer with a <span className='text-yellow-500'>strong experience</span> in creating innovative digital solutions. I'm passionate about the world of technology and committed to delivering exceptional online experiences through careful web design and development.</p>
    <br />

    <p>Throughout my career, I've gained <span className='text-yellow-500'>technical skills in languages of great importance in today's landscape.</span> My focus extends beyond functionality to usability and aesthetic design, always striving to provide <span className='text-yellow-500'>intuitive and engaging interfaces.</span></p>
    <br />

    <br />

    <p>In summary, my goal is to contribute to project success by applying my technical skills and my passion for creating outstanding web experiences. I'm excited about the opportunity to collaborate on your future projects and contribute to the ongoing growth and success of your company.</p>
  </div>
  )
 }
}
