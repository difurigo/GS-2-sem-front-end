"use client";
import React, { useState } from "react";
import "../globals.css"; // Importação global de estilos

// Componente para os campos de entrada do formulário
interface CampoEntradaProps {
  rotulo: string; // O texto exibido como rótulo acima do campo
  tipo: string; // Tipo do campo (e.g., "text", "email", "password")
  placeholder: string; // Texto de placeholder dentro do campo
  valor: string; // Valor atual do campo
  aoMudar: (valor: string) => void; // Função para lidar com alterações
}

// Componente reutilizável para criar campos de entrada
const CampoEntrada: React.FC<CampoEntradaProps> = ({
  rotulo,
  tipo,
  placeholder,
  valor,
  aoMudar,
}) => (
  <div className="campo-entrada-container flex flex-col mt-4 w-full">
    <label className="rotulo text-black">{rotulo}</label>
    <input
      type={tipo}
      placeholder={placeholder}
      value={valor}
      onChange={(e) => aoMudar(e.target.value)}
      className="campo-entrada px-4 py-2 mt-2 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 text-zinc-500"
    />
  </div>
);

const PaginaCadastro: React.FC = () => {
  // Estados para armazenar valores de entrada do formulário
  const [primeiroNome, setPrimeiroNome] = useState(""); // Armazena o primeiro nome do usuário
  const [sobrenome, setSobrenome] = useState(""); // Armazena o sobrenome do usuário
  const [email, setEmail] = useState(""); // Armazena o e-mail do usuário
  const [senha, setSenha] = useState(""); // Armazena a senha do usuário

  // Estados para controlar feedbacks e carregamento
  const [estaEnviando, setEstaEnviando] = useState(false); // Indica se o formulário está sendo enviado
  const [mensagemErro, setMensagemErro] = useState(""); // Armazena mensagens de erro
  const [mensagemSucesso, setMensagemSucesso] = useState(""); // Armazena mensagens de sucesso

  // Função para lidar com o envio do formulário
  const lidarComEnvio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    setEstaEnviando(true); // Define o estado de carregamento
    setMensagemErro(""); // Limpa mensagens de erro anteriores
    setMensagemSucesso(""); // Limpa mensagens de sucesso anteriores

    // Criação do objeto com os dados do usuário
    const dadosUsuario = {
      nome: `${primeiroNome} ${sobrenome}`, // Combina primeiro nome e sobrenome
      email: email,
      senha: senha,
    };

    try {
      // Faz uma requisição para o servidor usando fetch
      const resposta = await fetch("http://localhost:8080/usuario/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Define o tipo de conteúdo
        },
        body: JSON.stringify(dadosUsuario), // Converte os dados do usuário para JSON
      });
    
      if (resposta.ok) {
        // Caso o cadastro seja bem-sucedido
        const dados = await resposta.json();
        console.log("Usuário cadastrado com sucesso:", dados);
        setMensagemSucesso("Cadastro realizado com sucesso! Bem-vindo! 🎉");
        // Limpa os campos do formulário
        setPrimeiroNome("");
        setSobrenome("");
        setEmail("");
        setSenha("");
      } else {
        // Caso a resposta não seja bem-sucedida, exibe mensagem de erro
        const erroDados = await resposta.json();
        console.error("Erro ao cadastrar usuário:", erroDados);
        setMensagemErro("Ocorreu um erro ao cadastrar. Tente novamente.");
      }
    } catch (erro) {
      // Lida com erros de conexão ou outros problemas
      console.error("Erro de conexão:", erro);
      setMensagemErro("Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setEstaEnviando(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <div className="pagina-cadastro flex flex-col items-start bg-white">
      <div className="conteudo-formulario flex flex-col mt-10 mx-auto max-w-xl w-full px-4">
        <h1 className="titulo-pagina text-4xl font-bold text-black">
          Crie sua Conta 🚀
        </h1>
        <p className="descricao-pagina text-lg text-gray-600 mt-2">
          Preencha os campos abaixo para começar sua jornada conosco!
        </p>

        <form onSubmit={lidarComEnvio} className="formulario-cadastro mt-6">
          {/* Campo para o primeiro nome */}
          <CampoEntrada
            rotulo="Primeiro Nome"
            tipo="text"
            placeholder="Digite seu primeiro nome"
            valor={primeiroNome}
            aoMudar={setPrimeiroNome}
          />

          {/* Campo para o sobrenome */}
          <CampoEntrada
            rotulo="Sobrenome"
            tipo="text"
            placeholder="Digite seu sobrenome"
            valor={sobrenome}
            aoMudar={setSobrenome}
          />

          {/* Campo para o e-mail */}
          <CampoEntrada
            rotulo="E-mail"
            tipo="email"
            placeholder="seuemail@exemplo.com"
            valor={email}
            aoMudar={setEmail}
          />

          {/* Campo para a senha */}
          <CampoEntrada
            rotulo="Senha"
            tipo="password"
            placeholder="Crie uma senha segura"
            valor={senha}
            aoMudar={setSenha}
          />

          {/* Botão de envio */}
          <button
            type="submit"
            disabled={estaEnviando}
            className="botao-cadastro w-full px-6 py-3 mt-6 text-white bg-black hover:bg-gray-700 rounded-lg text-lg font-medium"
          >
            {estaEnviando ? "Cadastrando..." : "Cadastrar"}
          </button>

        </form>

        {/* Exibição de mensagens de erro ou sucesso */}
        {mensagemErro && (
          <p className="mensagem-erro text-red-500 mt-4">{mensagemErro}</p>
        )}
        {mensagemSucesso && (
          <p className="mensagem-sucesso text-green-500 mt-4">{mensagemSucesso}</p>
        )}
      </div>
    </div>
  );
};

export default PaginaCadastro;
