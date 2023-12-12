import {React,useContext} from 'react'
import {Link,Element} from 'react-scroll';
import person from '../assets/navbar/person.svg'
import home from '../assets/navbar/home.svg'
import lightbulb from '../assets/navbar/light-bulb.svg'
import experience from '../assets/navbar/experience.svg'
import {traduction} from '../context/traduction'
import language from '../assets/navbar/language.svg'





export default function Navbar() {

  const { Traduction,Spanish, English } = useContext(traduction);
  const traducir = ()=>{
    if(Traduction){
      English();
      window.location.reload(true);
      
    }else{
      Spanish();
      window.location.reload(true);
    }

  }
  console.log(Traduction);


  return (
    <nav className='sm:right-0 p-4 fixed sm:items-center top-1/2 transform -translate-y-1/2 z-10'>
      <ul className='flex flex-row sm:flex-col items-center justify-center sm:py-10 m-5  rounded-full bg-purple-900 text-white'>
        <li>
          <button onClick={traducir}>
            <img src={language} alt="" width={40} className='transform transition-transform hover:scale-110 hover:cursor-pointe'/>
          </button>

      </li>
        <li className='hover:cursor-pointer m-5'>
            <Link to="main" smooth={true} duration={500}>
              <img src={home} alt="" width={50} className='transform transition-transform hover:scale-110 hover:cursor-pointe' />
            </Link>
        </li>
        <li className='hover:cursor-pointer m-5'>
          <Link to="sobreMi" smooth={true} duration={500} offset={0}>
            <img src={person} alt="" width={50} className='transform transition-transform hover:scale-110 hover:cursor-pointe'/>
          </Link>
        </li>
        <li className='hover:cursor-pointer m-5'>
          <Link to="tecnologias" smooth={true} duration={500} offset={0}>
            <img src={lightbulb} alt="" width={50} className='transform transition-transform hover:scale-110 hover:cursor-pointe' />
          </Link>
        </li>
        <li className='hover:cursor-pointer m-5'>
          <Link to="experiencia" smooth={true} duration={500} offset={0}>
            <img src={experience} alt="" width={50} className='transform transition-transform hover:scale-110 hover:cursor-pointe'/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
