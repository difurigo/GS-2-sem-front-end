"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";

const PerfilPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [residenciaId, setResidenciaId] = useState<number | null>(null);
  const [tipoResidencia, setTipoResidencia] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [numero, setNumero] = useState<number | null>(null);
  const [moradores, setMoradores] = useState<number | null>(null);

  const [eletrodomestico, setEletrodomestico] = useState<string>("");
  const [horasDiarias, setHorasDiarias] = useState<number | null>(null);

  const [nomeCarro, setNomeCarro] = useState<string>("");
  const [tipoVeiculo, setTipoVeiculo] = useState<string>("");
  const [kmMensal, setKmMensal] = useState<number | null>(null);

  const [tipoGas, setTipoGas] = useState<string>("");
  const [quantidadeMensal, setQuantidadeMensal] = useState<number | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("nomeUsuario");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleAdicionarResidencia = async () => {
    const payload = { tipoResidencia, endereco, numero, moradores };
    try {
      const response = await fetch("ENDPOINT_RESIDENCIA", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        setResidenciaId(data.residenciaId);
        alert("Residência adicionada com sucesso!");
      } else {
        alert("Erro ao adicionar residência.");
      }
    } catch (error) {
      console.error("Erro ao adicionar residência:", error);
    }
  };

  const handleAdicionarEletrodomestico = async () => {
    if (!residenciaId) return alert("Adicione uma residência primeiro.");
    const payload = {
      residencia: { residenciaId },
      nomeBem: eletrodomestico,
      horasDiarias,
    };
    try {
      const response = await fetch("http://localhost:8080/bens/eletrodomestico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert("Eletrodoméstico adicionado com sucesso!");
      } else {
        alert("Erro ao adicionar eletrodoméstico.");
      }
    } catch (error) {
      console.error("Erro ao adicionar eletrodoméstico:", error);
    }
  };

  const handleAdicionarCarro = async () => {
    if (!residenciaId) return alert("Adicione uma residência primeiro.");
    const payload = {
      residencia: { residenciaId },
      nomeBem: nomeCarro,
      tipoVeiculo,
      kmMensal,
    };
    try {
      const response = await fetch("http://localhost:8080/bens/carro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert("Carro adicionado com sucesso!");
      } else {
        alert("Erro ao adicionar carro.");
      }
    } catch (error) {
      console.error("Erro ao adicionar carro:", error);
    }
  };

  const handleAdicionarGas = async () => {
    if (!residenciaId) return alert("Adicione uma residência primeiro.");
    const payload = {
      residencia: { residenciaId },
      nomeBem: tipoGas === "GLP" ? "Cilindro de Gás" : "Gás Encanado",
      quantidadeMensal,
    };
    try {
      const response = await fetch("http://localhost:8080/bens/gas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert("Gás adicionado com sucesso!");
      } else {
        alert("Erro ao adicionar gás.");
      }
    } catch (error) {
      console.error("Erro ao adicionar gás:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-md rounded-lg w-11/12 max-w-4xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bem-vindo, {userName || "Usuário"}!</h1>
        <p className="text-gray-600 mb-6">Adicione informações sobre sua residência e bens para calcular o impacto.</p>

        {/* Formulário Residência */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adicionar Residência</h2>
          <div className="space-y-4">
            <select
              value={tipoResidencia}
              onChange={(e) => setTipoResidencia(e.target.value)}
              className="w-full p-3 border rounded-md"
            >
              <option value="">Selecione o tipo de residência</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>
            <input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            <input
              type="number"
              placeholder="Número"
              value={numero || ""}
              onChange={(e) => setNumero(Number(e.target.value))}
              className="w-full p-3 border rounded-md"
            />
            <input
              type="number"
              placeholder="Moradores"
              value={moradores || ""}
              onChange={(e) => setMoradores(Number(e.target.value))}
              className="w-full p-3 border rounded-md"
            />
            <button
              onClick={handleAdicionarResidencia}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
            >
              Adicionar Residência
            </button>
          </div>
        </div>

        {/* Outros Formulários */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formulário Eletrodoméstico */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adicionar Eletrodoméstico</h2>
            <div className="space-y-4">
              <select
                value={eletrodomestico}
                onChange={(e) => setEletrodomestico(e.target.value)}
                className="w-full p-3 border rounded-md"
              >
                <option value="">Selecione o eletrodoméstico</option>
                <option value="Geladeira">Geladeira</option>
                <option value="Fogão">Fogão</option>
              </select>
              <input
                type="number"
                placeholder="Horas Diárias"
                value={horasDiarias || ""}
                onChange={(e) => setHorasDiarias(Number(e.target.value))}
                className="w-full p-3 border rounded-md"
              />
              <button
                onClick={handleAdicionarEletrodomestico}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
              >
                Adicionar Eletrodoméstico
              </button>
            </div>
          </div>

          {/* Formulário Carro */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adicionar Carro</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome do Carro"
                value={nomeCarro}
                onChange={(e) => setNomeCarro(e.target.value)}
                className="w-full p-3 border rounded-md"
              />
              <select
                value={tipoVeiculo}
                onChange={(e) => setTipoVeiculo(e.target.value)}
                className="w-full p-3 border rounded-md"
              >
                <option value="">Selecione o tipo de veículo</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Elétrico">Elétrico</option>
              </select>
              <input
                type="number"
                placeholder="Km Mensal"
                value={kmMensal || ""}
                onChange={(e) => setKmMensal(Number(e.target.value))}
                className="w-full p-3 border rounded-md"
              />
              <button
                onClick={handleAdicionarCarro}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
              >
                Adicionar Carro
              </button>
            </div>
          </div>

          {/* Formulário Gás */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adicionar Gás</h2>
            <div className="space-y-4">
              <select
                value={tipoGas}
                onChange={(e) => setTipoGas(e.target.value)}
                className="w-full p-3 border rounded-md"
              >
                <option value="">Selecione o tipo de gás</option>
                <option value="GLP">GLP</option>
                <option value="Natural">Natural</option>
              </select>
              <input
                type="number"
                placeholder="Quantidade Mensal"
                value={quantidadeMensal || ""}
                onChange={(e) => setQuantidadeMensal(Number(e.target.value))}
                className="w-full p-3 border rounded-md"
              />
              <button
                onClick={handleAdicionarGas}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
              >
                Adicionar Gás
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilPage;
