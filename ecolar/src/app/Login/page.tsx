"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

// Componente reutilizável para os campos de entrada
interface CampoEntradaProps {
  rotulo: string;
  tipo: string;
  placeholder: string;
  valor: string;
  aoMudar: (valor: string) => void;
}

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

const PaginaLogin: React.FC = () => {
  const router = useRouter();
  const [primeiroNome, setPrimeiroNome] = useState(""); // Armazena o primeiro nome do usuário
  const [sobrenome, setSobrenome] = useState(""); // Armazena o sobrenome do usuário
  const [email, setEmail] = useState(""); // Armazena o e-mail do usuário
  const [senha, setSenha] = useState(""); // Armazena a senha do usuário

  const [estaEnviando, setEstaEnviando] = useState(false); // Indica se o formulário está sendo enviado
  const [mensagemErro, setMensagemErro] = useState(""); // Armazena mensagens de erro

  // Função para lidar com o envio do formulário
  const lidarComEnvio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstaEnviando(true);
    setMensagemErro("");

    // Criação do objeto com os dados do usuário
    const dadosUsuario = {
      nome: `${primeiroNome} ${sobrenome}`,
      email: email,
      senha: senha,
    };

    try {
      // Faz uma requisição para o servidor usando fetch
      const resposta = await fetch("http://localhost:8080/usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosUsuario),
      });

      if (resposta.status === 404) {
        // Caso o login não seja encontrado, redireciona para a página de cadastro
        router.push("/Cadastro");
      } else if (resposta.ok) {
        // Caso o login seja bem-sucedido
        const dados = await resposta.json();
        console.log("Login bem-sucedido:", dados);
        router.push("/Perfil");
      } else {
        // Caso a resposta não seja bem-sucedida, exibe mensagem de erro
        const erroDados = await resposta.json();
        console.error("Erro ao fazer login:", erroDados);
        setMensagemErro("Credenciais inválidas. Tente novamente.");
      }
    } catch (erro) {
      console.error("Erro de conexão:", erro);
      setMensagemErro("Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setEstaEnviando(false);
    }
  };

  return (
    <div className="pagina-login flex flex-col items-start bg-white">
      <div className="conteudo-formulario flex flex-col mt-10 mx-auto max-w-xl w-full px-4">
        <h1 className="titulo-pagina text-4xl font-bold text-black">
          Faça Login 🚀
        </h1>
        <p className="descricao-pagina text-lg text-gray-600 mt-2">
          Insira suas credenciais para acessar sua conta!
        </p>

        <form onSubmit={lidarComEnvio} className="formulario-login mt-6">
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
            placeholder="Digite sua senha"
            valor={senha}
            aoMudar={setSenha}
          />

          {/* Botão de envio */}
          <button
            type="submit"
            disabled={estaEnviando}
            className="botao-login w-full px-6 py-3 mt-6 text-white bg-black hover:bg-gray-700 rounded-lg text-lg font-medium"
          >
            {estaEnviando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Ainda não tem conta?{" "}
          <a href="/Cadastro" className="text-blue-500 hover:underline">
            Cadastre-se agora
          </a>
        </p>


        {/* Exibição de mensagens de erro */}
        {mensagemErro && (
          <p className="mensagem-erro text-red-500 mt-4">{mensagemErro}</p>
        )}
      </div>
    </div>
  );
};

export default PaginaLogin;
