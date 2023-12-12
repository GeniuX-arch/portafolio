import {React,useContext} from 'react'
import {icons} from '../data/icons'
import {traduction} from '../context/traduction'

export default function Tecnologias() {
  const {Traduction}=useContext(traduction);
  if(Traduction){
  return (
    <div className='min-h-screen'>
      
    <h1 className='text-2xl text-center text-purple-400 font-bold mb-3'>Competencias desarrolladas</h1> <p className='text-center text-xl'>Además de mi experiencia técnica, valoro la actualización constante y la adopción de nuevas tecnologías. Estoy comprometido a mantenerme al día con las últimas tendencias y mejores prácticas en el campo del desarrollo web.</p>
    <div className='flex  flex-row flex-wrap justify-center mt-6'>
    { 
      icons.map((values,index)=>{
        return(
        <div key={index} className='w-20 border border-slate-950 m-10 flex flex-col justify-center text-center '>
          <img src={values.svg} alt="" />
          <p className='mt-3'>{values.name}</p>
        </div>)
      })
    } 

    </div>
    </div>
  )
  }else{

  return (
    <div className='min-h-screen'>
      
      <h1 className='text-2xl text-center text-purple-400 font-bold mb-3'>Developed Skills</h1>
<p className='text-center text-xl'>In addition to my technical expertise, I value continuous learning and the adoption of new technologies. I am committed to staying up-to-date with the latest trends and best practices in the field of web development.</p>

    <div className='flex  flex-row flex-wrap justify-center mt-6'>
    { 
      icons.map((values,index)=>{
        return(
        <div key={index} className='w-20 border border-slate-950 m-10 flex flex-col justify-center text-center '>
          <img src={values.svg} alt="" />
          <p className='mt-3'>{values.name}</p>
        </div>)
      })
    } 

    </div>
    </div>
  )
  }
  
}
