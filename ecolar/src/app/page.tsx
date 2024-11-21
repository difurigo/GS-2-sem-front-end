import Image from 'next/image';
import React from 'react';
import "../app/globals.css"


const EcoLarPage: React.FC = () => {
  const developers = [
    { name: "Luis Henrique", rm: "RM:558935", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bffbccdb1d35a24d918de3932a5758012416894a92ab25cc629544eca5670de?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" },
    { name: "Melissa Pereira", rm: "RM:555656", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9b84c73010d5d84dd1cee7403a8161fbdc2670c8cb3f708fce9ae7853dd65c9?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" },
    { name: "Diego Furigo", rm: "RM558755", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/20e8f537301039f543e1bfc779f26093c3a31bdda0b06198667d2dffc8cd2dbb?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" }
  ];

  const features = [
    { title: "Calculo CO2", description: "Aqui usamos as informações inseridas para calcular seu impacto de CO2 no planeta", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f0fc88e558349a6075c531f797c2b2b566d530b900972a35e067f9dbf3c0b10?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" },
    { title: "Perfil", description: "Aqui voce consegue ver e inserir suas informações de eletrodometicos, residencias, carros e/ou gás", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/82c5fa69ca21411a66d421864957a4722ad20fea91d2c9977ae889506d65dc45?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" }
  ];

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col items-start px-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col self-stretch max-md:max-w-full">
          <div className="flex flex-col w-full h-[315px] max-md:max-w-full">
            <h1 className="text-6xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
              EcoLar
            </h1>
            <p className="mt-6 text-3xl leading-10 text-black text-opacity-80 max-md:max-w-full">
              A EcoLar é uma organização focada em promover{" "}
              <span className="font-bold text-green-600">soluções sustentáveis</span>{" "}
              para residências, visando reduzir o impacto ambiental e melhorar a eficiência energética dos lares. 
              A EcoLar desenvolve projetos e fornece orientações para{" "}
              <span className="font-bold text-green-500">minimizar a emissão de CO₂</span>, 
              incentivar o uso de energias renováveis e otimizar o consumo de recursos, 
              contribuindo para um futuro mais sustentável e consciente.
            </p>
          </div>
        </div>

        <h2 className="mt-24 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:text-4xl">
          Funcionalidades
        </h2>

        <div className="flex overflow-hidden flex-col self-stretch mt-9 rounded-3xl max-md:mr-2.5 max-md:max-w-full">
          <Image 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ddc136757b52e61eb65968cab762d99f69eeb576001ab2be5e6d2e66b4cd42?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" 
            alt="Funcionalidades overview" 
            width={1230} 
            height={351} 
            className="object-contain w-full rounded-3xl"
          />
        </div>

        <h3 className="mt-7 text-4xl font-medium text-black">Eduque-se</h3>
        <p className="mt-12 text-3xl text-zinc-500 max-md:mt-10 max-md:max-w-full">
          Aqui voce pode aprender como diminuir seu impacto negativo sobre nosso planeta
        </p>

        <div className="self-stretch mt-20 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow h-[725px] max-md:mt-10 max-md:max-w-full">
                  <Image 
                    src={feature.imageSrc} 
                    alt={feature.title} 
                    width={592} 
                    height={523} 
                    className="object-contain max-w-full rounded-3xl"
                  />
                  <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                    <h3 className="text-4xl font-medium text-black max-md:max-w-full">{feature.title}</h3>
                    <p className="mt-1 text-3xl leading-10 text-zinc-500 max-md:max-w-full">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Porque usar EcoLar?
        </div>

        <div className="mt-9 w-full max-w-[1230px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="text-4xl font-bold text-black leading-[54px] max-md:max-w-full">
                    <span className="font-medium">Com a EcoLar, você investe no seu </span>
                    <span className="text-green-600">lar</span>
                    <span className="font-medium"> e no </span>
                    <span className="text-green-600">planeta</span>
                    <span className="font-medium"> ao mesmo tempo.</span>
                  </div>
                  <div className="mt-2 text-3xl leading-10 text-zinc-500 max-md:max-w-full">
                    Na EcoLar, acreditamos que é possível morar de forma sustentável sem abrir mão da economia. 
                    Nossas soluções são desenvolvidas para ajudar você a reduzir os custos com energia e outros recursos, 
                    oferecendo orientações práticas e serviços que transformam a sua casa em um ambiente mais eficiente e econômico.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <Image 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6995a97e2d7de533390a9f9c831873fff67c060c35e52d5fd434a81ec2aa944?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8" 
                alt="Sustainable home illustration" 
                width={344} 
                height={374} 
                className="object-contain self-stretch my-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-4xl font-medium text-black max-md:max-w-full">
          Tecnologia e Inovação para um <span className="font-bold text-green-600">Futuro Verde</span>
        </div>

        <div className="self-stretch text-3xl leading-10 text-zinc-500 max-md:max-w-full">
          A EcoLar usa tecnologia de ponta e inovação para medir e otimizar o consumo de energia e recursos em sua residência. 
          Nosso sistema oferece relatórios personalizados, diagnóstico de emissões de CO₂ e dicas práticas de redução de impacto ambiental. 
          Com a EcoLar, você não apenas entende o consumo de sua casa, mas também transforma sua residência em um modelo de sustentabilidade.
        </div>

        <h2 className="mt-16 text-5xl font-semibold tracking-tighter text-black max-md:mt-10 max-md:ml-1.5 max-md:text-4xl">
          Desenvolvedores
        </h2>

        <div className="self-center mt-8 w-full max-w-[1186px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {developers.map((dev, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start py-6 pr-20 pl-6 mx-auto w-full font-medium bg-gray-200 rounded-xl max-md:px-5 max-md:mt-9">
                  <h3 className="text-3xl text-black">{dev.name}</h3>
                  <div className="flex gap-3.5 mt-7 text-2xl whitespace-nowrap text-zinc-500">
                    <Image 
                      src={dev.imageSrc} 
                      alt={`${dev.name}'s profile picture`} 
                      width={90} 
                      height={90} 
                      className="object-contain shrink-0 rounded-full"
                    />
                    <span className="my-auto basis-auto">{dev.rm}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EcoLarPage;