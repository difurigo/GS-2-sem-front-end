"use client";
import React, { useState } from 'react';
import axios from 'axios';
import '../globals.css';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, value, onChange }) => (
  <div className="flex flex-col mt-2.5 w-full whitespace-nowrap min-h-[80px] max-md:max-w-full">
    <label className="text-black max-md:max-w-full">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 shrink gap-2 px-4 py-3 mt-2 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 size-full text-zinc-500 max-md:max-w-full"
    />
  </div>
);

const CadastroPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const usuario = {
      nome: `${firstName} ${lastName}`,
      email: email,
      senha: password,
    };

    try {
      const response = await axios.post('/usuario', usuario);

      console.log('Usuário cadastrado com sucesso:', response.data);
      setSuccessMessage('Cadastro realizado com sucesso!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.error('Erro ao cadastrar usuário:', error);
      setErrorMessage('Ocorreu um erro ao cadastrar o usuário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col items-start font-medium bg-white">
      <div className="flex flex-col mt-28 ml-36 max-w-full text-base w-[626px] max-md:mt-10">
        <h1 className="text-6xl font-bold tracking-tighter text-black whitespace-nowrap max-md:mr-0.5 max-md:max-w-full max-md:text-4xl">
          Cadastre-se
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-9 mt-6">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 min-h-[80px] w-fit">
              <InputField
                label="Primeiro nome"
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={setFirstName}
              />
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 min-h-[80px] w-fit">
              <InputField
                label="Último nome"
                type="text"
                placeholder="Smitherton"
                value={lastName}
                onChange={setLastName}
              />
            </div>
          </div>
          <InputField
            label="Email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={setEmail}
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="********"
            value={password}
            onChange={setPassword}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="gap-2 self-stretch px-8 py-4 mt-10 text-xl text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5"
          >
            {isSubmitting ? 'Cadastrando...' : 'Cadastre'}
          </button>
        </form>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
    </div>
  );
};

export default CadastroPage;
