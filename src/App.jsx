import { useState } from 'react'
import { Navbar,Main,SobreMi,Tecnologias,Experiencia,Footer,AboutMe } from './components/index.js'
import { Link, Element } from 'react-scroll';
import { ProviderTraduction } from './context/traduction.jsx';


function App() {
  return (
<div className=''>
            <ProviderTraduction>
              <Navbar />
            </ProviderTraduction>
      <div className='flex flex-row items-center justify-center bg-slate-950 font-Manrope'>
        <div className='w-11/12 sm:w-4/6 px-20 text-blue-50 flex flex-col'>
          <Element name='main'>
            <ProviderTraduction>
              <Main />
            </ProviderTraduction>
          </Element>
          <Element name='sobreMi'>
            <ProviderTraduction>
              <SobreMi />
            </ProviderTraduction>
          </Element>
          <Element name='tecnologias'>
            <ProviderTraduction>
              <Tecnologias />
            </ProviderTraduction>
          </Element>
          <Element name='experiencia'>
            <ProviderTraduction>
              <Experiencia />
            </ProviderTraduction>
          </Element>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
