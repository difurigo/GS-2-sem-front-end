"use client";
import React, { useState } from 'react';
import '../globals.css';

interface ResidenceFormData {
  type: string;
  address: string;
  number: string;
  residents: string;
}

interface ApplianceFormData {
  name: string;
  power: string;
}

interface CarFormData {
  type: string;
  monthlyKm: string;
}

interface GasFormData {
  type: string;
  monthlyQuantity: string;
}

const EcoLarPage: React.FC = () => {
  const [residenceForm, setResidenceForm] = useState<ResidenceFormData>({
    type: '',
    address: '',
    number: '',
    residents: '',
  });

  const [applianceForm, setApplianceForm] = useState<ApplianceFormData>({
    name: '',
    power: '',
  });

  const [carForm, setCarForm] = useState<CarFormData>({
    type: '',
    monthlyKm: '',
  });

  const [gasForm, setGasForm] = useState<GasFormData>({
    type: '',
    monthlyQuantity: '',
  });

  const handleResidenceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setResidenceForm({ ...residenceForm, [e.target.name]: e.target.value });
  };

  const handleApplianceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplianceForm({ ...applianceForm, [e.target.name]: e.target.value });
  };

  const handleCarChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCarForm({ ...carForm, [e.target.name]: e.target.value });
  };

  const handleGasChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setGasForm({ ...gasForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (formType: string) => (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${formType} form submitted:`, formType === 'residence' ? residenceForm : formType === 'appliance' ? applianceForm : formType === 'car' ? carForm : gasForm);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">


      <div className="flex flex-col items-start self-center mt-12 ml-2.5 w-full max-w-[1227px] max-md:mt-10 max-md:max-w-full">
        <div className="px-16 py-6 max-w-full rounded-xl bg-neutral-100 w-[1206px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/483c4adedfd94c73143a079cb4dc3a680376dbedb30c7c0d4ea9d3d600e530f2?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain shrink-0 max-w-full aspect-square w-[136px] max-md:mt-10" alt="Profile" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-10 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:text-4xl">
                <div className="max-md:text-4xl">
                  Nome <br />
                </div>
                <div className="self-start mt-6 max-md:text-4xl">Id:</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex relative flex-col self-stretch px-10 pt-24 mt-14 w-full rounded-xl min-h-[1107px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92a46a8c0bdcf3c57bb31c8599918c9d779a52ee50a375ca3544337929c08242?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-cover absolute inset-0 size-full" alt="Background" />
          <div className="relative max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <form onSubmit={handleSubmit('residence')} className="flex relative flex-col items-start py-6 pr-20 pl-7 mx-auto w-full text-2xl text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-semibold leading-tight">Adicionar residência</div>
                  <div className="flex gap-2 items-center px-6 py-1.5 py-3 pr-4 mt-6 h-12 rounded-lg shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full">
                    <select
                      name="type"
                      value={residenceForm.type}
                      onChange={handleResidenceChange}
                      className="w-full bg-transparent"
                      aria-label="Tipo residencia"
                    >
                      <option value="">Tipo residencia</option>
                      <option value="casa">Casa</option>
                      <option value="apartamento">Apartamento</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={residenceForm.address}
                    onChange={handleResidenceChange}
                    placeholder="Endereço"
                    className="gap-2 self-stretch py-1 py-3 pr-6 pl-6 mt-3 whitespace-nowrap rounded-lg shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                  />
                  <input
                    type="text"
                    name="number"
                    value={residenceForm.number}
                    onChange={handleResidenceChange}
                    placeholder="Numero"
                    className="gap-2 self-stretch px-6 py-1 py-3 mt-3 whitespace-nowrap rounded-lg shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                  />
                  <input
                    type="text"
                    name="residents"
                    value={residenceForm.residents}
                    onChange={handleResidenceChange}
                    placeholder="Moradores"
                    className="gap-2 self-stretch px-6 py-0.5 py-3 mt-3 whitespace-nowrap rounded-lg shadow-sm bg-neutral-200 min-h-[39px] max-md:px-5 w-full"
                  />
                  <button type="submit" className="gap-2 self-stretch px-6 py-3 mt-6 font-semibold text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5">
                    Adicionar
                  </button>
                </form>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <form onSubmit={handleSubmit('appliance')} className="flex relative flex-col items-start px-5 py-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:mt-10 max-md:max-w-full">
                  <div className="self-stretch text-4xl leading-tight max-md:max-w-full">Adicionar eletrodomestico</div>
                  <input
                    type="text"
                    name="name"
                    value={applianceForm.name}
                    onChange={handleApplianceChange}
                    placeholder="Nome"
                    className="gap-2 self-stretch px-6 py-1.5 py-3 mt-6 h-12 whitespace-nowrap rounded-lg shadow-sm bg-neutral-200 min-h-[48px] max-md:px-5 max-md:ml-2.5 w-full"
                  />
                  <input
                    type="text"
                    name="power"
                    value={applianceForm.power}
                    onChange={handleApplianceChange}
                    placeholder="Potência"
                    className="gap-2 self-stretch px-6 py-1 py-3 mt-5 whitespace-nowrap rounded-lg shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 max-md:ml-2.5 w-full"
                  />
                  <button type="submit" className="gap-2 self-stretch px-6 py-3 mt-32 text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:ml-2">
                    Adicionar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="relative mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <form onSubmit={handleSubmit('car')} className="flex relative flex-col items-start py-8 pr-20 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl leading-tight">Adicionar carro</div>
                  <div className="flex gap-2 items-center px-6 py-1.5 py-3 pr-2 mt-5 h-12 rounded-lg shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full">
                    <select
                      name="type"
                      value={carForm.type}
                      onChange={handleCarChange}
                      className="w-full bg-transparent"
                      aria-label="Tipo veículo"
                    >
                      <option value="">Tipo veículo</option>
                      <option value="carro">Carro</option>
                      <option value="moto">Moto</option>
                      <option value="bicicleta-eletrica">Bicicleta eletrica</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="monthlyKm"
                    value={carForm.monthlyKm}
                    onChange={handleCarChange}
                    placeholder="KM mensal"
                    className="gap-2 self-stretch px-6 py-1 py-3 mt-5 rounded-lg shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                  />
                  <button type="submit" className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5 max-md:mt-10">
                    Adicionar
                  </button>
                </form>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <form onSubmit={handleSubmit('gas')} className="flex relative flex-col items-start pt-10 pr-20 pb-5 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl leading-tight">Adicionar gás</div>
                  <div className="flex gap-2 items-center px-6 py-1.5 py-3 pr-2.5 mt-5 h-12 rounded-lg shadow-sm bg-neutral-200 min-h-[48px] max-md:pl-5 w-full">
                    <select
                      name="type"
                      value={gasForm.type}
                      onChange={handleGasChange}
                      className="w-full bg-transparent"
                      aria-label="Tipo de gás"
                    >
                      <option value="">Tipo de gás</option>
                      <option value="natural">Botijão</option>
                      <option value="butano">Encanado</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="monthlyQuantity"
                    value={gasForm.monthlyQuantity}
                    onChange={handleGasChange}
                    placeholder="Quantidade mensal"
                    className="gap-2 self-stretch px-6 py-1 py-3 mt-5 rounded-lg shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                  />
                  <button type="submit" className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5 max-md:mt-10">
                    Adicionar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="relative self-center px-4 py-5 mt-14 max-w-full text-3xl font-semibold text-black bg-green-500 rounded-xl w-[239px] max-md:mt-10">
  Calcular Co2!
</div>
</div>
<div className="mt-20 ml-3.5 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
  Seções
</div>
<div className="mt-20 max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center h-[164px] max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e53ee967d9813f52234af20da42920ad2ffd2337d058d2c6ec23739a45039?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain aspect-[1.05] w-[60px]" alt="Residência icon" />
        <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
          Residência
        </div>
        <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
          O consumo de energia em sua casa, como para aquecimento e refrigeração, está diretamente ligado às emissões de CO2. Ambientes mais eficientes energeticamente geram menos impacto no meio ambiente.
        </div>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center h-[164px] max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9d6b762e19d76e3dae73970b3ac760ca94e0c2befeec45a6e1aeb15fa067c15?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain aspect-[0.94] w-[51px]" alt="Eletrodomestico icon" />
        <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
          Eletrodomestico
        </div>
        <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
          Os aparelhos elétricos consomem energia e, dependendo da eficiência deles, podem aumentar ou reduzir suas emissões de CO2. Usar aparelhos mais eficientes ajuda a minimizar esse impacto.
        </div>
      </div>
    </div>
  </div>
</div>
<div className="mt-28 w-full max-w-[1205px] max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center mt-2.5 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca18199a3478b8385bad99042c5d8844b127599d4c0f10167c5d58e34d8b8b42?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain w-9 aspect-[1.03]" alt="Carro icon" />
        <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
          Adicionar Carro
        </div>
        <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
          O transporte, especialmente o uso de combustíveis fósseis, é uma das maiores fontes de CO2. A frequência de uso e a eficiência do veículo têm grande impacto nas emissões geradas.
        </div>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-center max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e781fd2f5772492bd51be251ecbae86cc8f0fa0d98a2af159d903298b0ad22?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain aspect-[0.96] w-[54px]" alt="Gás icon" />
        <div className="mt-2 text-3xl font-medium text-black max-md:max-w-full">
          Adicionar gás
        </div>
        <div className="mt-2 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
          O uso de gás para aquecer ou cozinhar também contribui para a emissão de CO2. O tipo e a quantidade de gás consumido influenciam o impacto ambiental.
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
);
};

export default EcoLarPage;