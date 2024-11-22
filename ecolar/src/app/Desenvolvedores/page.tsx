"use client";
import React from 'react';
import '../globals.css';

// Interface para o cartão de desenvolvedor
interface DeveloperCardProps {
  name: string; // Nome do desenvolvedor
  rm: string; // RM (registro do desenvolvedor)
  imageUrl: string; // URL da imagem de perfil
}

// Componente de cartão de desenvolvedor
const DeveloperCard: React.FC<DeveloperCardProps> = ({ name, rm, imageUrl }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col items-start py-6 pr-20 pl-6 mx-auto w-full font-medium bg-gray-200 rounded-xl max-md:px-5 max-md:mt-9">
      {/* Nome do desenvolvedor */}
      <div className="text-3xl text-black">{name}</div>
      <div className="flex gap-3.5 mt-7 text-2xl whitespace-nowrap text-zinc-500">
        {/* Imagem do desenvolvedor */}
        <img
          loading="lazy"
          src={imageUrl}
          className="object-contain shrink-0 rounded-full aspect-[1.03] w-[90px]"
          alt={`Foto de ${name}`}
        />
        {/* RM do desenvolvedor */}
        <div className="my-auto basis-auto">RM: {rm}</div>
      </div>
    </div>
  </div>
);

// Interface para o cartão de perfil
interface ProfileCardProps {
  name: string; // Nome do integrante
  rm: string; // RM do integrante
  links: { [platform: string]: string }; // Links para redes sociais
  classGroup: string; // Nome da turma
  imageUrl: string; // URL da imagem de perfil
}

// Componente de cartão de perfil
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  rm,
  links,
  classGroup,
  imageUrl,
}) => (
  <div className="flex flex-col p-8 mt-12 w-full font-medium bg-white rounded-xl border border-solid border-neutral-200 max-w-[1106px] min-h-[245px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    {/* Nome do integrante */}
    <div className="text-2xl text-black max-md:max-w-full">{name}</div>
    <div className="flex gap-4 items-center mt-12 max-w-full text-base text-black min-h-[97px] w-[258px] max-md:mt-10">
      <div className="flex gap-4 items-center self-stretch my-auto whitespace-nowrap min-h-[97px] min-w-[240px] w-[258px]">
        {/* Imagem do integrante */}
        <img
          loading="lazy"
          src={imageUrl}
          className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-[1.06] w-[103px]"
          alt={`Foto de ${name}`}
        />
        {/* RM do integrante */}
        <div className="self-stretch my-auto">RM: {rm}</div>
      </div>
      {/* Links para redes sociais */}
      {Object.entries(links).map(([platform, link]) => {
        const logoMap: Record<string, string> = {
          GitHub: "https://cdn-icons-png.flaticon.com/256/25/25231.png",
          LinkedIn: "https://cdn-icons-png.flaticon.com/256/174/174857.png",
        };
        return (
          <div key={platform} className="flex items-center gap-2">
            <img
              loading="lazy"
              src={logoMap[platform] || ""}
              className="object-contain rounded-full w-[32px] h-[32px]"
              alt={`Ícone do ${platform}`}
            />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch my-auto whitespace-nowrap text-blue-500 underline"
            >
              {platform}
            </a>
          </div>
        );
      })}
      {/* Nome da turma */}
      <div className="self-stretch my-auto">Turma: {classGroup}</div>
    </div>
  </div>
);

// Página dos integrantes
const TeamPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col items-start mt-20 ml-16 w-full max-w-[1219px] max-md:mt-10 max-md:max-w-full">
        {/* Título da página */}
        <div className="text-5xl font-semibold tracking-tighter text-black max-md:text-4xl">
          Desenvolvedores
        </div>
        <div className="self-end mt-8 w-full max-w-[1186px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <DeveloperCard
              name="Luis Henrique"
              rm="558935"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4bffbccdb1d35a24d918de3932a5758012416894a92ab25cc629544eca5670de?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
            />
            <DeveloperCard
              name="Melissa Pereira"
              rm="555656"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b84c73010d5d84dd1cee7403a8161fbdc2670c8cb3f708fce9ae7853dd65c9?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
            />
            <DeveloperCard
              name="Diego Furigo"
              rm="558755"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/20e8f537301039f543e1bfc779f26093c3a31bdda0b06198667d2dffc8cd2dbb?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
            />
          </div>
        </div>
        {/* Título da seção de perfis */}
        <div className="mt-14 ml-3.5 text-3xl font-semibold text-black max-md:mt-10 max-md:ml-2.5">
          Perfis
        </div>
        <ProfileCard
          name="Diego Furigo"
          rm="558935"
          links={{
            GitHub: "https://github.com/difurigo",
            LinkedIn: "https://www.linkedin.com/in/diego-furigo-do-nascimento-4091311b3/",
          }}
          classGroup="1TDSPY"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/20e8f537301039f543e1bfc779f26093c3a31bdda0b06198667d2dffc8cd2dbb?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
        />
        <ProfileCard
          name="Luis Henrique"
          rm="558935"
          links={{
            GitHub: "https://github.com/luixvieira",
            LinkedIn: "https://www.linkedin.com/in/luhenrivieira/",
          }}
          classGroup="1TDSPY"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4bffbccdb1d35a24d918de3932a5758012416894a92ab25cc629544eca5670de?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
        />
        <ProfileCard
          name="Melissa Pereira"
          rm="558935"
          links={{
            GitHub: "https://github.com/Melpscosta",
            LinkedIn: "https://www.linkedin.com/in/melissa-pereira-b3a2a519a/",
          }}
          classGroup="1TDSPY"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b84c73010d5d84dd1cee7403a8161fbdc2670c8cb3f708fce9ae7853dd65c9?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
        />
      </div>
    </div>
  );
};

export default TeamPage;
