import React, { useContext,useEffect,useState } from 'react';
import logos from '../assets/logos.jpg';
import { traduction } from '../context/traduction';

export default function Main() {
  const { Traduction } = useContext(traduction);
  const [, forceRender] = useState();

  useEffect(() => {
    forceRender({});
  }, [Traduction]);

  console.log(Traduction)
  return (
    <main className='flex flex-col mb-10 text-xl justify-center items-center min-h-screen'>
      <div className='text-center mt-16 text-9xl font-BadScript m-20 flex flex-row'>
        <div className='rounded-full bg-purple-800 py-10 px-5'>G</div>
        <div className='py-10'>eniuX</div>
      </div>

      <p className='font-Manrope text-center'>
        {Traduction ? (
          <>
            Tu <span className='text-yellow-500'>desarrollador web</span> de{' '}
            <span className='text-yellow-500'>confianza</span>
          </>
        ) : (
          <>
            Your <span className='text-yellow-500'>trusted</span>{' '}
            <span className='text-yellow-500'>web developer</span>
          </>
        )}
      </p>
    </main>
  );
}