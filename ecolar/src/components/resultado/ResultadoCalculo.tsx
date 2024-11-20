import React from 'react';

interface ResultadosProps {
  co2Emissions: number; 
}

const Resultados: React.FC<ResultadosProps> = ({ co2Emissions }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-xl w-full max-w-lg">
      <h3 className="text-3xl font-semibold mb-4">Resultados de Emissão de CO2</h3>
      <p className="text-xl mb-4">Emissões totais de CO2 calculadas:</p>
      <div className="text-4xl font-bold text-green-500">
        {co2Emissions.toFixed(2)} kg CO₂
      </div>
    </div>
  );
};

export default Resultados;
