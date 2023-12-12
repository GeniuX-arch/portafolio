import {React,useContext} from 'react'
import {proyectos} from '../data/experiencia'
import {traduction} from '../context/traduction'

export default function Experiencia() {
  const {Traduction}=useContext(traduction);
  if(Traduction){
  return (
    <div className='min-h-screen my-10'>
      <h1 className='mb-5 text-center text-3xl text-purple-400'>Proyectos</h1>
      {proyectos.map((value,index)=>

    <a key={index} href={value.url} target="_blank"className='m-64'>
    <div  className='my-32 p-1 rounded-xl flex flex-col sm:flex-row g-black transform transition-transform hover:scale-110 hover:cursor-pointer'>
        <div className='sm:w-2/3  '>
          <img src={value.imagen} alt="" />
        </div>
        <div className='sm:w-1/3 max-h-max p-3 flex flex-col justify-between   '>
            <p className='text-xl text-yellow-500'>{value.titulo}</p>
            <p className='mt-2'>{value.descripcion}</p>
            <div className='flex flex-row justify-start flex-wrap '>
              {value.tecnologias.map((values,index)=>{

                return(
                  <img key={index} src={values.svg} width={50} alt="" />
                )
              })}
            </div>
        </div>
    </div>
        </a>
      )
      }
     </div>
  )
    }else{
  return (
    <div className='min-h-screen my-10'>
      <h1 className='mb-5 text-center text-3xl text-purple-400'>Proyects</h1>
      {proyectos.map((value,index)=>

    <a key={index} href={value.url} target="_blank"className='m-64'>
    <div  className='my-32 p-1 rounded-xl flex flex-col sm:flex-row g-black transform transition-transform hover:scale-110 hover:cursor-pointer'>
        <div className='sm:w-2/3  '>
          <img src={value.imagen} alt="" />
        </div>
        <div className='sm:w-1/3 max-h-max p-3 flex flex-col justify-between   '>
            <p className='text-xl text-yellow-500'>{value.title}</p>
            <p className='mt-2'>{value.description}</p>
            <div className='flex flex-row justify-start flex-wrap '>
              {value.tecnologias.map((values,index)=>{

                return(
                  <img key={index} src={values.svg} width={50} alt="" />
                )
              })}
            </div>
        </div>
    </div>
        </a>
      )
      }
     </div>
  )
    }
}
