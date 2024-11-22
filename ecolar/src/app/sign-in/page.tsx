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
  const [email, setEmail] = useState(""); // Armazena o e-mail do usuário
  const [senha, setSenha] = useState(""); // Armazena a senha do usuário
  const [estaEnviando, setEstaEnviando] = useState(false); // Indica se o formulário está sendo enviado
  const [mensagemErro, setMensagemErro] = useState(""); // Armazena mensagens de erro

  // Função para lidar com o envio do formulário
  const lidarComEnvio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstaEnviando(true);
    setMensagemErro("");

    try {
      // Faz uma requisição para buscar todos os usuários
      const resposta = await fetch("http://localhost:8080/usuario/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resposta.ok) {
        throw new Error("Erro ao buscar usuários.");
      }

      const usuarios = await resposta.json();

      // Verifica se o email e a senha correspondem a algum usuário
      const usuarioEncontrado = usuarios.find(
        (usuario: { email: string; senha: string }) =>
          usuario.email === email && usuario.senha === senha
      );

      if (usuarioEncontrado) {
        // Armazena os dados do usuário no localStorage
        localStorage.setItem("nomeUsuario", usuarioEncontrado.nome);
        localStorage.setItem("idUsuario", usuarioEncontrado.id.toString());
        localStorage.setItem("emailUsuario", usuarioEncontrado.email);

        console.log("Login bem-sucedido:", usuarioEncontrado);

        // Redireciona para a página de perfil
        router.push("/Perfil");
      } else {
        // Exibe mensagem de erro caso as credenciais estejam incorretas
        setMensagemErro("Email ou senha incorretos. Tente novamente.");
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
          <a href="/cad" className="text-blue-500 hover:underline">
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
