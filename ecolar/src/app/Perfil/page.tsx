"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";

const PerfilPage: React.FC = () => {
  const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
  const [idUsuario, setIdUsuario] = useState<string | null>(null);

  // Residência
  const [tipoResidencia, setTipoResidencia] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [logradouro, setLogradouro] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [numResidencia, setNumResidencia] = useState<number>(0);
  const [numMoradores, setNumMoradores] = useState<number>(0);

  const [mensagem, setMensagem] = useState<string>("");
  // Eletrodoméstico
  const [nomeBem, setNomeBem] = useState<string>("");
  const [horasDiarias, setHorasDiarias] = useState<number>(0);

  const adicionarEletrodomestico = async () => {
    if (!idUsuario) {
      setMensagem("Você precisa estar logado para adicionar um eletrodoméstico.");
      return;
    }

    const eletrodomesticoData = {
      residencia: { residenciaId: 1 }, // Substituir com o ID da residência real
      nomeBem,
      horasDiarias,
    };

    try {
      const resposta = await fetch("http://localhost:8080/bens/eletrodomestico", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eletrodomesticoData),
      });

      if (resposta.ok) {
        setMensagem("Eletrodoméstico adicionado com sucesso!");
        setNomeBem("");
        setHorasDiarias(0);
      } else {
        setMensagem("Erro ao adicionar eletrodoméstico.");
      }
    } catch {
      setMensagem("Erro de conexão.");
    }
  };

  // Carro
  const [nomeCarro, setNomeCarro] = useState<string>("");
  const [tipoVeiculo, setTipoVeiculo] = useState<string>("");
  const [kmMensal, setKmMensal] = useState<number>(0);

  const adicionarCarro = async () => {
    if (!idUsuario) {
      setMensagem("Você precisa estar logado para adicionar um carro.");
      return;
    }

    const carroData = {
      residencia: { residenciaId: 1 }, // Substituir com o ID da residência real
      nomeBem: nomeCarro,
      tipoVeiculo,
      kmMensal,
    };

  


    try {
      const resposta = await fetch("http://localhost:8080/bens/carro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carroData),
      });

      if (resposta.ok) {
        setMensagem("Carro adicionado com sucesso!");
        setNomeCarro("");
        setTipoVeiculo("");
        setKmMensal(0);
      } else {
        setMensagem("Erro ao adicionar carro.");
      }
    } catch {
      setMensagem("Erro de conexão.");
    }
  };


  useEffect(() => {
    const nome = localStorage.getItem("nomeUsuario");
    const id = localStorage.getItem("idUsuario");

    setNomeUsuario(nome);
    setIdUsuario(id);
  }, []);

  const adicionarResidencia = async () => {
    if (!idUsuario) {
      setMensagem("Você precisa estar logado para adicionar uma residência.");
      return;
    }

    const residenciaData = {
      idUsuario: parseInt(idUsuario),
      tipoResidencia,
      endereco: {
        cep,
        logradouro,
        cidade,
        estado,
      },
      numMoradores,
      numResidencia,
    };

    try {
      const resposta = await fetch("http://localhost:8080/residencias/adicionar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(residenciaData),
      });

      if (resposta.ok) {
        setMensagem("Residência adicionada com sucesso!");
        // Resetando os campos após sucesso
        setTipoResidencia("");
        setCep("");
        setLogradouro("");
        setCidade("");
        setEstado("");
        setNumResidencia(0);
        setNumMoradores(0);
      } else {
        setMensagem("Erro ao adicionar residência.");
      }
    } catch {
      setMensagem("Erro de conexão.");
    }
  };

  return (
    <div className="pagina-perfil flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Bem-vindo, {nomeUsuario || "Usuário"}!
      </h1>

      <div className="grid grid-cols-1 gap-4 mt-8">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Adicionar Residência</h2>
          {/* Inputs de residência */}
          <select
            value={tipoResidencia}
            onChange={(e) => setTipoResidencia(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          >
            <option value="" disabled>
              Tipo de Residência
            </option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
          </select>

          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="CEP"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          />

          <input
            type="text"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            placeholder="Logradouro"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          />

          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Cidade"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          />

          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            placeholder="Estado"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          />

          <input
            type="number"
            value={numResidencia}
            onChange={(e) => setNumResidencia(Number(e.target.value) || 0)}
            placeholder="Número"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          />

          <input
            type="number"
            value={numMoradores}
            onChange={(e) => setNumMoradores(Number(e.target.value) || 0)}
            placeholder="Número de Moradores"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          />

          <button
            onClick={adicionarResidencia}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Adicionar
          </button>
        </div>

        {/* Adicionar Eletrodoméstico */}
        {
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Adicionar Eletrodoméstico</h2>
          <select
            value={nomeBem}
            onChange={(e) => setNomeBem(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          >
            <option value="" disabled>Nome do Eletrodoméstico</option>
            <option value="Geladeira">Geladeira</option>
            <option value="Máquina de Lavar">Máquina de Lavar</option>
            <option value="Microondas">Microondas</option>
          </select>
          <input
            type="number"
            value={horasDiarias}
            onChange={(e) => setHorasDiarias(Number(e.target.value) || 0)}
            placeholder="Horas Diárias"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2 placeholder-gray-400"
          />

          <button
            onClick={adicionarEletrodomestico}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Adicionar
          </button>
        </div>
    }
        

        {/* Adicionar Carro */}
        {
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Adicionar Carro</h2>
          <input
            type="text"
            value={nomeCarro}
            onChange={(e) => setNomeCarro(e.target.value)}
            placeholder="Nome do Carro"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
          <select
            value={tipoVeiculo}
            onChange={(e) => setTipoVeiculo(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          >
            <option value="" disabled>Tipo de Veículo</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Diesel">Diesel</option>
            <option value="Elétrico">Elétrico</option>
          </select>
          <input
            type="number"
            value={kmMensal}
            onChange={(e) => setKmMensal(Number(e.target.value) || 0)}
            placeholder="KM Mensal"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 mt-2"
          />
          <button
            onClick={adicionarCarro}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Adicionar
          </button>
        </div>
    }

      </div>

      {mensagem && (
        <p
          className={`mt-4 ${
            mensagem.includes("sucesso") ? "text-green-500" : "text-red-500"
          }`}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
  
};

export default PerfilPage;
