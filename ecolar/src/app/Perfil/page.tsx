"use client";
import * as React from "react";
import "../globals.css";

interface ProfilePageProps {
  userName: string;
  userId: string;
}

export default function ProfilePage({ userName, userId }: ProfilePageProps) {
  const [residenceForm, setResidenceForm] = React.useState({
    type: "",
    address: "",
    number: "",
    residents: "",
  });

  const [applianceForm, setApplianceForm] = React.useState({
    name: "",
    hours: "",
  });

  const [vehicleForm, setVehicleForm] = React.useState({
    type: "",
    kmMonth: "",
  });

  const [gasForm, setGasForm] = React.useState({
    type: "",
    quantity: "",
  });

  const [showResults, setShowResults] = React.useState(false); // Estado para alternar entre formulários e resultados
  const [calculationResult, setCalculationResult] = React.useState({
    co2Emission: 0,
    economicImpact: 0,
  });

  const handleCalculateCO2 = () => {
    // Implementar a lógica de cálculo com base nos dados dos formulários
    const co2Emission = 123; // Valor de exemplo
    const economicImpact = 456; // Valor de exemplo

    setCalculationResult({
      co2Emission,
      economicImpact,
    });
    setShowResults(true); // Mostra os resultados
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
          {!showResults ? (
            <>
              <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                {/* Residence Form */}
                <form className="flex flex-col items-start py-6 pr-20 pl-7 mx-auto w-full text-2xl text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <h3 className="text-4xl font-semibold leading-tight">
                    Adicionar residência
                  </h3>
                  <select
                    value={residenceForm.type}
                    onChange={(e) =>
                      setResidenceForm((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
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
                    onChange={(e) =>
                      setResidenceForm((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    placeholder="Endereço"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                    aria-label="Endereço"
                  />
                  <input
                    type="number"
                    value={residenceForm.number}
                    onChange={(e) =>
                      setResidenceForm((prev) => ({
                        ...prev,
                        number: e.target.value,
                      }))
                    }
                    placeholder="Número"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                    aria-label="Número"
                  />
                  <select
                    value={residenceForm.residents}
                    onChange={(e) =>
                      setResidenceForm((prev) => ({
                        ...prev,
                        residents: e.target.value,
                      }))
                    }
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
                    type="button"
                    className="gap-2 self-stretch px-6 py-3 mt-7 font-semibold text-white whitespace-nowrap bg-black shadow-sm max-md:px-5"
                  >
                    Adicionar
                  </button>
                </form>

                {/* Appliance Form */}
                <form className="flex flex-col items-start px-5 py-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:mt-10 max-md:max-w-full">
                  <h3 className="self-stretch text-4xl leading-tight max-md:max-w-full">
                    Adicionar eletrodoméstico
                  </h3>
                  <select
                    value={applianceForm.name}
                    onChange={(e) =>
                      setApplianceForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
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
                    onChange={(e) =>
                      setApplianceForm((prev) => ({
                        ...prev,
                        hours: e.target.value,
                      }))
                    }
                    placeholder="Horas diárias de uso"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                    aria-label="Horas diárias de uso"
                  />
                  <button
                    type="button"
                    className="gap-2 self-stretch px-6 py-3 mt-32 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10"
                  >
                    Adicionar
                  </button>
                </form>
              </div>

              <div className="mt-14 grid grid-cols-2 gap-5 max-md:grid-cols-1">
                {/* Vehicle Form */}
                <form className="flex flex-col items-start py-8 pr-20 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <h3 className="text-4xl leading-tight">Adicionar carro</h3>
                  <select
                    value={vehicleForm.type}
                    onChange={(e) =>
                      setVehicleForm((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
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
                    onChange={(e) =>
                      setVehicleForm((prev) => ({
                        ...prev,
                        kmMonth: e.target.value,
                      }))
                    }
                    placeholder="KM mensal"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                    aria-label="Quilometragem mensal"
                  />
                  <button
                    type="button"
                    className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10"
                  >
                    Adicionar
                  </button>
                </form>

                {/* Gas Form */}
                <form className="flex flex-col items-start pt-10 pr-20 pb-5 pl-7 mx-auto w-full text-2xl font-semibold text-black rounded-xl bg-neutral-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <h3 className="text-4xl leading-tight">Adicionar gás</h3>
                  <select
                    value={gasForm.type}
                    onChange={(e) =>
                      setGasForm((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
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
                    onChange={(e) =>
                      setGasForm((prev) => ({
                        ...prev,
                        quantity: e.target.value,
                      }))
                    }
                    placeholder="Quantidade mensal"
                    className="gap-2 self-stretch py-1 pr-6 pl-6 mt-3 shadow-sm bg-neutral-200 min-h-[42px] max-md:px-5 w-full"
                    aria-label="Quantidade mensal"
                  />
                  <button
                    type="button"
                    className="gap-2 self-stretch px-6 py-3 mt-28 text-white whitespace-nowrap bg-black shadow-sm max-md:px-5 max-md:mt-10"
                  >
                    Adicionar
                  </button>
                </form>
              </div>

              <button
                onClick={handleCalculateCO2}
                className="self-center px-4 py-5 mt-14 max-w-full text-3xl font-semibold text-black bg-green-500 rounded-xl w-[239px] max-md:mt-10"
                aria-label="Calcular emissão de CO2"
              >
                Calcular Co2!
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-semibold">
                Cálculo de CO2 e Impacto Social
              </h2>
              <div className="flex flex-wrap gap-10 mt-10 justify-center w-full">
                {/* Emissão de CO2 */}
                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <h3 className="text-xl text-white font-bold bg-black rounded-lg p-2 mb-5">Emissão de CO2</h3>
                  <p className="text-lg">{calculationResult.co2Emission} kg</p>
                </div>

                {/* Impacto Econômico */}
                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <h3 className="text-xl text-white font-bold bg-black rounded-lg p-2 mb-5">Impacto Econômico</h3>
                  <p className="text-lg">
                    R$ {calculationResult.economicImpact}
                  </p>
                </div>

                {/* Como Melhorar? */}
                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full">
                  <h3 className="text-xl text-white font-bold bg-black rounded-lg p-2 mb-5">Como Melhorar?</h3>
                  <p className="text-lg">
                    Reduzir a emissão de CO₂ em casa é simples: opte por
                    lâmpadas LED, desligue aparelhos fora de uso e invista em
                    eletrodomésticos eficientes. Fontes renováveis, como painéis
                    solares, ajudam a diminuir o impacto. Prefira ventiladores
                    ao ar-condicionado, lave roupas com água fria e pratique a
                    compostagem para resíduos orgânicos. Pequenas mudanças fazem
                    grande diferença!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowResults(false)}
                className="mt-10 px-6 py-3 text-white bg-black rounded-lg"
              >
                Voltar
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
