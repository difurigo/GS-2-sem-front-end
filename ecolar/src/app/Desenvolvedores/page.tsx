"use client";
import React from 'react';
import '../globals.css';

interface DeveloperCardProps {
  name: string;
  rm: string;
  imageUrl: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ name, rm, imageUrl }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col items-start py-6 pr-20 pl-6 mx-auto w-full font-medium bg-gray-200 rounded-xl max-md:px-5 max-md:mt-9">
      <div className="text-3xl text-black">{name}</div>
      <div className="flex gap-3.5 mt-7 text-2xl whitespace-nowrap text-zinc-500">
        <img loading="lazy" src={imageUrl} className="object-contain shrink-0 rounded-full aspect-[1.03] w-[90px]" alt={name} />
        <div className="my-auto basis-auto">RM:{rm}</div>
      </div>
    </div>
  </div>
);

interface ProfileCardProps {
  name: string;
  rm: string;
  links: { [key: string]: string };
  turma: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, rm, links, turma }) => (
  <div className="flex flex-col p-8 mt-12 w-full font-medium bg-white rounded-xl border border-solid border-neutral-200 max-w-[1106px] min-h-[245px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="text-2xl text-black max-md:max-w-full">{name}</div>
    <div className="flex gap-4 items-center mt-12 max-w-full text-base text-black min-h-[97px] w-[258px] max-md:mt-10">
      <div className="flex gap-4 items-center self-stretch my-auto whitespace-nowrap min-h-[97px] min-w-[240px] w-[258px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad47470f8615a3840dd4d6591878166e40e76e0901e13cf01a49079d4862d483?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-[1.06] w-[103px]" alt={name} />
        <div className="self-stretch my-auto">RM:{rm}</div>
      </div>
      {Object.entries(links).map(([platform, link], index) => (
        <React.Fragment key={platform}>
          <img loading="lazy" src={`http://b.io/ext_${5 + index}-`} className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-[1.06] w-[103px]" alt={platform} />
          <div className="self-stretch my-auto whitespace-nowrap">{link}</div>
        </React.Fragment>
      ))}
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/316e48114a5e7513568d47aed2c03bcd915247be70aa89b2c7fef9f04b784b63?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-[1.06] w-[103px]" alt="Turma" />
      <div className="self-stretch my-auto">Turma: {turma}</div>
    </div>
  </div>
);

const IntegrantesPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col items-start mt-20 ml-16 w-full max-w-[1219px] max-md:mt-10 max-md:max-w-full">
        <div className="text-5xl font-semibold tracking-tighter text-black max-md:text-4xl">
          Desenvolvedores
        </div>
        <div className="self-end mt-8 w-full max-w-[1186px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <DeveloperCard name="Luis Henrique" rm="558935" imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/370743605fc37792fa86bdc5d7d96f9c19f2fd96cb6ae32abef3e417bc3fa055?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" />
            <DeveloperCard name="Melissa Pereira" rm="555656" imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b84c73010d5d84dd1cee7403a8161fbdc2670c8cb3f708fce9ae7853dd65c9?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" />
            <DeveloperCard name="Diego Furigo" rm="558755" imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/370743605fc37792fa86bdc5d7d96f9c19f2fd96cb6ae32abef3e417bc3fa055?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" />
          </div>
        </div>
        <div className="mt-14 ml-3.5 text-3xl font-semibold text-black max-md:mt-10 max-md:ml-2.5">
          Perfis
        </div>
        <ProfileCard
          name="Diego Furigo"
          rm="558935"
          links={{ GitHub: "Link", LinkedIn: "Link" }}
          turma="1TDSPY"
        />
        <ProfileCard
          name="Luis Henrique"
          rm="558935"
          links={{ GitHub: "Link", LinkedIn: "luixvieira" }}
          turma="1TDSPY"
        />
        <ProfileCard
          name="Melissa Pereira"
          rm="558935"
          links={{ GitHub: "Link", LinkedIn: "Link" }}
          turma="1TDSPY"
        />
      </div>
    </div>
  );
};

export default IntegrantesPage;