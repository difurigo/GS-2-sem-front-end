"use client"
import * as React from "react";
import { useState, useEffect } from "react";
import "../globals.css";
interface CalculatorPageProps {
  userId?: string;
}

export default function CalculatorPage({ }: CalculatorPageProps) {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Recupera o nome do usuário armazenado no localStorage
    const storedName = localStorage.getItem("nomeUsuario");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col items-start self-center mt-12 w-full max-w-[1237px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center px-16 py-6 max-w-full rounded-xl bg-neutral-100 w-[1206px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/483c4adedfd94c73143a079cb4dc3a680376dbedb30c7c0d4ea9d3d600e530f2?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                className="object-contain shrink-0 max-w-full aspect-square w-[136px] max-md:mt-10"
                alt="User profile"
              />
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto w-full text-5xl font-semibold tracking-tighter text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
                <div className="flex gap-4 max-md:text-4xl">
                  <div className="max-md:text-4xl">
                    Nome:
                    <br />
                  </div>
                  <div className="max-md:text-4xl">{userName || "Usuário"}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-stretch px-10 pt-24 pb-9 mt-14 ml-2.5 w-full rounded-xl bg-zinc-600 bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start py-6 pr-20 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-semibold leading-tight">
                    Adicionar residência
                  </div>

                  <select defaultValue="" className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 rounded-md shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5">
                    <option value="" disabled>Selecione o tipo de residência</option>
                    <option value="casa">Casa</option>
                    <option value="apartamento">Apartamento</option>
                  </select>

                  <input
                    type="text"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 whitespace-nowrap shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Endereço"
                  />

                  <input
                    type="number"
                    min="0"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 whitespace-nowrap shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Número"
                  />

                  <input
                    type="number"
                    min="0"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 whitespace-nowrap shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Moradores"
                  />
                  <button className="gap-2 self-stretch px-6 py-3 mt-7 font-semibold text-white whitespace-nowrap bg-black shadow-sm max-md:px-5">
                    Adicionar
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start px-5 py-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:mt-10 max-md:max-w-full">
                  <div className="self-stretch text-4xl leading-tight max-md:max-w-full">
                    Adicionar eletrodomestico
                  </div>

                  <select defaultValue="" className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 rounded-md shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5">
                      <option value="" disabled>Selecione os eletrodometicos</option>
                      <option value="chuveiro">Chuveiro</option>
                      <option value="fogao">Fogão</option>
                      <option value="air-fryer">Air-Fryer</option>
                      <option value="televisao">Televisão</option>
                      <option value="ar-condicionado">Ar-condicionado</option>
                      <option value="computador">Computador</option>
                      <option value="micro-ondas">Micro-ondas</option>
                      <option value="geladeira">Geladeira</option>
                      <option value="liquidificador">Liquidificador</option>
                      <option value="batedeira">Batedeira</option>
                      <option value="cafeteira">Cafeteira</option>
                      <option value="maquina-de-lavar">Máquina de Lavar Roupas</option>
                      <option value="ventilador">Ventilador</option>
                  </select>

                  <input
                    type="number"
                    min="0"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 whitespace-nowrap shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Horas diárias"
                  />

                  <button className="gap-2 self-stretch px-6 py-3 mt-32 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10 max-md:ml-2">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start py-8 pr-20 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl leading-tight">Adicionar carro</div>
                  
                  <select defaultValue="" className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 rounded-md shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5">
                    <option value="" disabled>Selecione o tipo de veículo</option>
                    <option value="carro">Carro</option>
                    <option value="moto">Moto</option>
                  </select>

                  <input
                    type="number"
                    min="0"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 whitespace-nowrap shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Km mensal"
                  />

                  <button className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10">
                    Adicionar
                  </button>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start pt-10 pr-20 pb-5 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl leading-tight">Adicionar gás</div>
          
                  <select defaultValue="" className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 rounded-md shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5">
                    <option value="" disabled>Selecione o tipo de gás</option>
                    <option value="glp">Gás de cozinha</option>
                    <option value="natural">Gás encanado</option>
                  </select>

                  <input
                    type="number"
                    min="0"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 whitespace-nowrap shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Quantidade mensal"
                  />
                  <button className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="self-center px-4 py-5 mt-14 max-w-full text-3xl font-semibold text-black bg-green-500 rounded-xl w-[239px] max-md:mt-10">
            Calcular Co2!
          </button>
        </div>
        <div className="mt-20 ml-3 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
          Seções
        </div>
        <div className="mt-20 w-full max-w-[1207px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center h-[164px] max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e53ee967d9813f52234af20da42920ad2ffd2337d058d2c6ec23739a45039?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                  className="object-contain aspect-[1.05] w-[60px]"
                  alt="Residence section icon"
                />
                <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
                  Residência
                </div>
                <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                  O consumo de energia em sua casa, como para aquecimento e
                  refrigeração, está diretamente ligado às emissões de CO2.
                  Ambientes mais eficientes energeticamente geram menos impacto
                  no meio ambiente.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center h-[164px] max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9d6b762e19d76e3dae73970b3ac760ca94e0c2befeec45a6e1aeb15fa067c15?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                  className="object-contain aspect-[0.94] w-[51px]"
                  alt="Appliance section icon"
                />
                <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
                  Eletrodomestico
                </div>
                <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                  Os aparelhos elétricos consomem energia e, dependendo da
                  eficiência deles, podem aumentar ou reduzir suas emissões de
                  CO2. Usar aparelhos mais eficientes ajuda a minimizar esse
                  impacto.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 w-full max-w-[1205px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center mt-2.5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca18199a3478b8385bad99042c5d8844b127599d4c0f10167c5d58e34d8b8b42?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                  className="object-contain w-9 aspect-[1.03]"
                  alt="Vehicle section icon"
                />
                <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
                  Adicionar Carro
                </div>
                <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                  O transporte, especialmente o uso de combustíveis fósseis, é
                  uma das maiores fontes de CO2. A frequência de uso e a
                  eficiência do veículo têm grande impacto nas emissões geradas.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e781fd2f5772492bd51be251ecbae86cc8f0fa0d98a2af159d903298b0ad22?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
                  className="object-contain aspect-[0.96] w-[54px]"
                  alt="Gas section icon"
                />
                <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
                  Adicionar gás
                </div>
                <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                  O uso de gás para aquecer ou cozinhar também contribui para a
                  emissão de CO2. O tipo e a quantidade de gás consumido
                  influenciam o impacto ambiental.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}