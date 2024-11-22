"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import Link from "next/link";

interface LoginFormData {
  firstName: string;
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    firstName: "",
    email: "",
    password: "",
  });

  const router = useRouter(); // Para redirecionar

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      nome: formData.firstName,
      email: formData.email,
      senha: formData.password,
    };

    try {
      const response = await fetch("http://localhost:8080/usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.message.includes("Login realizado com sucesso")) {
          const nomeUsuario = data.message.split(", ")[1];
          // Armazenar o nome do usuário no localStorage
          localStorage.setItem("nomeUsuario", nomeUsuario);

          // Redirecionar para a página desejada
          router.push("/Perfil");
        } else {
          console.error("Mensagem inesperada:", data.message);
        }
      } else {
        const error = await response.json();
        console.error("Login failed:", error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col items-start font-medium bg-white">
      <main className="flex flex-col mt-10 ml-36 max-w-full w-[626px] max-md:mt-10">
        <h1 className="text-6xl font-bold tracking-tighter text-black whitespace-nowrap max-md:mr-0.5 max-md:max-w-full max-md:text-4xl">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6 max-w-full h-20 w-[295px]">
            <label htmlFor="firstName" className="text-3xl text-black">
              Primeiro nome
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="gap-2 px-4 py-3 mt-2 w-full text-xl whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-neutral-200 min-h-[51px] text-zinc-500"
              placeholder="Jane"
            />
          </div>
          <div className="flex flex-col mt-8 w-full h-20 whitespace-nowrap max-md:max-w-full">
            <label htmlFor="email" className="text-3xl text-black max-md:max-w-full">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-1 shrink gap-2 px-4 pt-3 pb-1.5 mt-2 w-full text-xl leading-8 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 min-h-[52px] text-zinc-500 max-md:max-w-full"
              placeholder="email@janesfakedomain.net"
            />
          </div>
          <div className="flex flex-col mt-8 w-full h-20 whitespace-nowrap max-md:max-w-full">
            <label htmlFor="password" className="text-3xl text-black max-md:max-w-full">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="flex-1 shrink gap-2 px-4 py-2.5 mt-2 w-full text-xl bg-white rounded-lg border border-solid shadow-sm border-neutral-200 min-h-[49px] text-zinc-500 max-md:max-w-full"
              placeholder="••••••••"
            />
          </div>
          <div className="mt-5">
            <Link href="/Cadastro">Não possui conta? Cadastre-se</Link>
          </div>
          <button
            type="submit"
            className="gap-2 self-stretch px-8 py-4 mt-20 text-2xl text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5 max-md:mt-10"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
