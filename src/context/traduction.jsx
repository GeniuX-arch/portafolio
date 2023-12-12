import React, { createContext, useContext, useState, useEffect } from 'react';

const TraductionContext = createContext();

export function ProviderTraduction({ children }) {
  const [Traduction, setTraduction] = useState(() => {
    // Intentar obtener Traduction desde localStorage al inicio
    const storedTraduction = localStorage.getItem('Traduction');
    return storedTraduction ? JSON.parse(storedTraduction) : false;
  });

  const Spanish = () => {
    setTraduction(true);
  };

  const English = () => {
    setTraduction(false);
  };

  useEffect(() => {
    // Almacena Traduction en localStorage cada vez que cambia
    localStorage.setItem('Traduction', JSON.stringify(Traduction));
  }, [Traduction]);

  return (
    <TraductionContext.Provider value={{ Traduction, Spanish, English }}>
      {children}
    </TraductionContext.Provider>
  );
}

export const traduction = TraductionContext;