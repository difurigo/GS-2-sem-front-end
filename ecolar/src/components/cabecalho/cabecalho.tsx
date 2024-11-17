import React from 'react';

const Cabecalho: React.FC = () => {
  return (
      <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-20 py-5 w-full text-xl font-medium text-black whitespace-nowrap bg-white bg-opacity-10 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e781f205da8400a4ed875fc268f563965ede79b7bcf660dde8f3f8a72c74b6fe?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain shrink-0 max-w-full aspect-[1.15] w-[149px]" alt="Logo" />
        <div className="flex flex-wrap gap-10 items-center my-auto max-md:max-w-full">
          <div className="self-stretch my-auto">Integrantes</div>
          <div className="self-stretch my-auto">Perfil</div>
          <div className="self-stretch my-auto">Eduque-se</div>
          <div className="gap-2 self-stretch px-6 py-3.5 my-auto text-base bg-black rounded-lg shadow-sm text-white text-opacity-90 max-md:px-5">
            Login
          </div>
        </div>
      </header>
  );
};

export default Cabecalho;