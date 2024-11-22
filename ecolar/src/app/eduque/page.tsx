"use client";
import React from 'react';
import '../globals.css';

type EcoEducationPageProps = object

const EcoEducationPage: React.FC<EcoEducationPageProps> = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-2 bg-white">
      <div className="flex flex-col px-20 mt-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="self-start text-6xl font-bold tracking-tighter text-black max-md:text-4xl">
          Eduque-se
        </div>
        <p className="mt-7 text-3xl text-black max-md:mt-10 max-md:max-w-full">
        Aqui oferecemos informações essenciais sobre as emissões de monóxido de carbono (CO), um gás venenoso produzido pela queima incompleta de combustíveis. Através de dicas práticas e dados informativos, nossa missão é ajudar você a entender e reduzir os perigos do CO, promovendo um ambiente mais seguro e sustentável.
          </p>
        <div className="mt-16 max-md:mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5de2923990bb35ba08805c5dda66f661d4f73d5221ad4edd7fde564537c6b0?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                className="object-contain grow w-full rounded-xl aspect-[0.76] max-md:mt-10"
                alt="Educational content 1"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d5fb70b19de4e1f8d8c6af062ea0c396041fa01a07b94655cc8db703af5120?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                className="object-contain grow w-full rounded-xl aspect-[0.76] max-md:mt-10"
                alt="Educational content 2"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dfa1e6df50db49cca14ee80bd5bcd3551bee1c545b9dcf097b7e216359a3af7?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                className="object-contain grow w-full rounded-xl aspect-[0.77] max-md:mt-10"
                alt="Educational content 3"
              />
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="grow px-14 py-16 w-full text-4xl font-semibold text-black rounded-none bg-zinc-300 max-md:px-5 max-md:mt-10">
                O que é o CO2
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="grow px-16 py-11 w-full text-4xl font-semibold text-center text-black rounded-none bg-zinc-300 max-md:px-5 max-md:mt-10">
                Impactos ambientais
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="grow px-16 py-16 w-full text-4xl font-semibold text-center text-black whitespace-nowrap rounded-none bg-zinc-300 max-md:px-5 max-md:mt-10">
                Eco-Homes
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-8 pt-9 pb-96 text-4xl font-semibold text-black rounded-xl min-h-[526px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5542f3f140f8e7671bb0d6f73f97c21659d051d20ddb39a3df60e263691d4?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                  className="object-cover absolute inset-0 size-full"
                  alt="Background"
                />
                Como Fazer a nossa parte
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex shrink-0 mx-auto max-w-full rounded-none bg-zinc-300 h-[526px] w-[609px]" />
            </div>
          </div>
        </div>
        <div className="self-start mt-16 text-3xl text-black max-md:mt-10 max-md:max-w-full">
          <span className="text-5xl font-bold">Top Ações para Economizar Custos</span>
          <br />
          <br />
          Pendure a roupa para secar em vez de usar a secadora
          <br />
          Pendurar a roupa para secar, em vez de usar a secadora, economiza cerca de 153 kg de CO₂ por ano – o que corresponde a R$327 por ano (com base em 150 ciclos anuais).
          <br />
          <br />
          Reduza o aquecimento em 1ºC
          <br />
          Diminuir a temperatura do aquecimento em 1ºC pode reduzir seu consumo de energia em 8%. Para uma conta média de gás de 12.500 kWh, isso reduzirá suas emissões de CO₂ em 184 kg – o que equivale a R$264 por ano.
          <br />
          <br />
          Encha a chaleira apenas com a quantidade de água que você precisa para ferver
          <br />
          Fervendo apenas a quantidade de água necessária para sua bebida quente, você economiza 72 kg de CO₂ por ano – o que representa R$117 por ano.
          <br />
          <br />
          Desligue os equipamentos elétricos quando não estiverem em uso
          <br />
          Desligar completamente apenas uma TV LCD (em vez de deixá-la no modo standby) por 18 horas por dia economiza cerca de 5 kg de CO₂ por ano – o que resulta em uma economia de R$10 por ano. Desligue todos os outros equipamentos elétricos quando não estiverem em uso para multiplicar essas economias.
        </div>
        <div className="self-center mt-48 w-full max-w-[1253px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
              <div className="mt-7 text-3xl text-black max-md:mt-10 max-md:max-w-full">
                CarbonFair é uma plataforma que conecta empresas e organizações a projetos ambientais que ajudam a neutralizar as emissões de dióxido de carbono (CO₂) por meio da compra de créditos de carbono. Esses créditos representam a quantidade de CO₂ que foi evitada ou removida da atmosfera por iniciativas sustentáveis, como reflorestamento, projetos de energia renovável e tecnologias de captura de carbono.
                <br />
                <br />
                A empresa oferece uma maneira prática e eficiente para que as empresas compensem suas emissões, contribuindo para suas metas de sustentabilidade e conformidade com regulamentações ambientais, além de apoiar projetos que promovem o bem-estar do planeta.
                <br />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-4xl font-semibold text-center text-black max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5eb166b94c449753ecee28a273143edd8e438c0221cfff3f52eb9ad4e59cf1d?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                  className="object-contain w-full rounded-xl aspect-[0.77]"
                  alt="Carbon credits"
                />
                <div className="px-16 py-11 rounded-none bg-zinc-300 max-md:px-5">
                  Créditos de Carbono
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 ml-3 max-w-full rounded-xl bg-neutral-200 bg-opacity-60 h-[66px] w-[110%]" />
      </div>
    </div>
  );
};

export default EcoEducationPage;