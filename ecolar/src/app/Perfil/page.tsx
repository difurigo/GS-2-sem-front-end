"use client";
import * as React from 'react';
import '../globals.css';

interface ProfilePageProps {
  userName: string;
  userId: string;
}

export default function ProfilePage({ userName, userId }: ProfilePageProps) {
  const [residenceForm, setResidenceForm] = React.useState({
    type: '',
    address: '',
    number: '',
    residents: ''
  });

  const [applianceForm, setApplianceForm] = React.useState({
    name: '',
    hours: ''
  });

  const [vehicleForm, setVehicleForm] = React.useState({
    type: '',
    kmMonth: ''
  });

  const [gasForm, setGasForm] = React.useState({
    type: '',
    quantity: ''
  });

  const handleResidenceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle residence form submission
  };

  const handleApplianceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appliance form submission
  };

  const handleVehicleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle vehicle form submission
  };

  const handleGasSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle gas form submission
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex flex-col items-start self-center mt-12 w-full max-w-[1237px] max-md:mt-10 max-md:max-w-full">
        <section className="self-center px-16 py-6 max-w-full rounded-xl bg-neutral-100 w-[1206px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img 
                loading="lazy" 
                src="/profile-image.jpg" 
                className="object-contain shrink-0 max-w-full aspect-square w-[136px] max-md:mt-10" 
                alt="Profile" 
              />
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto w-full text-5xl font-semibold tracking-tighter text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
                <div className="flex gap-4 max-md:text-4xl">
                  <div className="max-md:text-4xl">Nome:</div>
                  <div className="max-md:text-4xl">{userName}</div>
                </div>
                <div className="flex gap-6 self-start mt-1.5 max-md:text-4xl">
                  <div className="self-start max-md:text-4xl">Id:</div>
                  <div className="max-md:text-4xl">{userId}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col self-stretch px-10 pt-24 pb-9 mt-14 ml-2.5 w-full rounded-xl bg-zinc-600 bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {/* Residence Form */}
            <form onSubmit={handleResidenceSubmit} className="flex flex-col items-start py-6 pr-20 pl-7 mx-auto w-full text-2xl text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <h3 className="text-4xl font-semibold leading-tight">Adicionar residência</h3>
              <select
                value={residenceForm.type}
                onChange={(e) => setResidenceForm(prev => ({ ...prev, type: e.target.value }))}
                className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full"
                aria-label="Tipo residência"
              >
                <option value="">Selecione o tipo de residência</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="sobrado">Sobrado</option>
              </select>
              <input
                type="text"
                value={residenceForm.address}
                onChange={(e) => setResidenceForm(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Endereço"
                className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                aria-label="Endereço"
              />
              <input
                type="number"
                value={residenceForm.number}
                onChange={(e) => setResidenceForm(prev => ({ ...prev, number: e.target.value }))}
                placeholder="Número"
                className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                aria-label="Número"
              />
              <select
                value={residenceForm.residents}
                onChange={(e) => setResidenceForm(prev => ({ ...prev, residents: e.target.value }))}
                className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full"
                aria-label="Número de moradores"
              >
                <option value="">Selecione o número de moradores</option>
                <option value="1">1 morador</option>
                <option value="2">2 moradores</option>
                <option value="3">3 moradores</option>
                <option value="4+">4 ou mais moradores</option>
              </select>
              <button
                type="submit"
                className="gap-2 self-stretch px-6 py-3 mt-7 font-semibold text-white whitespace-nowrap bg-black shadow-sm max-md:px-5"
              >
                Adicionar
              </button>
            </form>

            {/* Appliance Form */}
            <form onSubmit={handleApplianceSubmit} className="flex flex-col items-start px-5 py-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:mt-10 max-md:max-w-full">
              <h3 className="self-stretch text-4xl leading-tight max-md:max-w-full">
                Adicionar eletrodoméstico
              </h3>
              <select
                value={applianceForm.name}
                onChange={(e) => setApplianceForm(prev => ({ ...prev, name: e.target.value }))}
                className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full"
                aria-label="Nome do eletrodoméstico"
              >
                <option value="">Selecione o eletrodoméstico</option>
                <option value="geladeira">Geladeira</option>
                <option value="microondas">Microondas</option>
                <option value="lavaRoupas">Máquina de Lavar</option>
                <option value="arCondicionado">Ar Condicionado</option>
              </select>
              <input
                type="number"
                value={applianceForm.hours}
                onChange={(e) => setApplianceForm(prev => ({ ...prev, hours: e.target.value }))}
                placeholder="Horas diárias de uso"
                className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                aria-label="Horas diárias de uso"
              />
              <button
                type="submit"
                className="gap-2 self-stretch px-6 py-3 mt-32 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10"
              >
                Adicionar
              </button>
            </form>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {/* Vehicle Form */}
            <form onSubmit={handleVehicleSubmit} className="flex flex-col items-start py-8 pr-20 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <h3 className="text-4xl leading-tight">Adicionar carro</h3>
              <select
                value={vehicleForm.type}
                onChange={(e) => setVehicleForm(prev => ({ ...prev, type: e.target.value }))}
                className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full"
                aria-label="Tipo de veículo"
              >
                <option value="">Selecione o tipo de veículo</option>
                <option value="hatch">Hatch</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="pickup">Pickup</option>
              </select>
              <input
                type="number"
                value={vehicleForm.kmMonth}
                onChange={(e) => setVehicleForm(prev => ({ ...prev, kmMonth: e.target.value }))}
                placeholder="KM mensal"
                className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                aria-label="Quilometragem mensal"
              />
              <button
                type="submit"
                className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10"
              >
                Adicionar
              </button>
            </form>

            {/* Gas Form */}
            <form onSubmit={handleGasSubmit} className="flex flex-col items-start pt-10 pr-20 pb-5 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <h3 className="text-4xl leading-tight">Adicionar gás</h3>
              <select
                value={gasForm.type}
                onChange={(e) => setGasForm(prev => ({ ...prev, type: e.target.value }))}
                className="flex gap-2 items-center py-1.5 pr-4 pl-6 mt-6 shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full"
                aria-label="Tipo de gás"
              >
                <option value="">Selecione o tipo de gás</option>
                <option value="natural">Gás Natural</option>
                <option value="glp">GLP (Botijão)</option>
              </select>
              <input
                type="number"
                value={gasForm.quantity}
                onChange={(e) => setGasForm(prev => ({ ...prev, quantity: e.target.value }))}
                placeholder="Quantidade mensal"
                className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                aria-label="Quantidade mensal"
              />
              <button
                type="submit"
                className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10"
              >
                Adicionar
              </button>
            </form>
          </div>

          <button
            className="self-center px-4 py-5 mt-14 max-w-full text-3xl font-semibold text-black bg-green-500 rounded-xl w-[239px] max-md:mt-10"
            aria-label="Calcular emissão de CO2"
          >
            Calcular Co2!
          </button>
        </section>

        <h2 className="mt-20 ml-3 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
          Seções
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-10 w-full max-w-[1207px] max-md:grid-cols-1 pb-20">
          {[
            {
              icon: "/residence-icon.jpg",
              title: "Residência",
              description:
                "O consumo de energia em sua casa, como para aquecimento e refrigeração, está diretamente ligado às emissões de CO2. Ambientes mais eficientes energeticamente geram menos impacto no meio ambiente.",
            },
            {
              icon: "/appliance-icon.jpg",
              title: "Eletrodoméstico",
              description:
                "Os aparelhos elétricos consomem energia e, dependendo da eficiência deles, podem aumentar ou reduzir suas emissões de CO2. Usar aparelhos mais eficientes ajuda a minimizar esse impacto.",
            },
            {
              icon: "/vehicle-icon.jpg",
              title: "Adicionar Carro",
              description:
                "O transporte, especialmente o uso de combustíveis fósseis, é uma das maiores fontes de CO2. A frequência de uso e a eficiência do veículo têm grande impacto nas emissões geradas.",
            },
            {
              icon: "/gas-icon.jpg",
              title: "Adicionar gás",
              description:
                "O uso de gás para aquecer ou cozinhar também contribui para a emissão de CO2. O tipo e a quantidade de gás consumido influenciam o impacto ambiental.",
            },
          ].map((section, index) => (
            <div key={index} className="flex flex-col items-start gap-4 h-auto max-md:mt-10">
              {/* Ícone */}
              <img
                loading="lazy"
                src={section.icon}
                className="object-contain w-[60px] h-[60px]"
                alt={`${section.title} icon`}
              />
              {/* Título */}
              <h3 className="text-2xl font-bold text-black">{section.title}</h3>
              {/* Descrição */}
              <p className="text-base text-zinc-600 leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}