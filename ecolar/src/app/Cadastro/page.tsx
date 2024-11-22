"use client";
import React, { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex overflow-hidden flex-col items-start font-medium bg-white">
      <div className="flex flex-col mt-10 ml-36 max-w-full text-base w-[626px] max-md:mt-10">
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
                label="Ultimo nome"
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
            className="gap-2 self-stretch px-8 py-4 mt-10 text-xl text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5"
          >
            Cadastre
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;