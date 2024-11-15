import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center p-6 bg-white min-h-screen">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EcoLar</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
                A EcoLar é uma organização focada em promover <span className="text-green-600 font-semibold">soluções sustentáveis</span> para residências, visando reduzir o impacto ambiental e melhorar a eficiência energética dos lares. A EcoLar desenvolve projetos e fornece orientações para <span className="text-green-600 font-semibold">minimizar a emissão de CO₂</span>, incentivar o uso de energias renováveis e otimizar o consumo de recursos, contribuindo para um futuro mais sustentável e consciente.
            </p>

            <section className="w-full max-w-4xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funcionalidades</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image 
                            src="/img/educase.jpg" 
                            alt="Eduque-se" 
                            width={400} 
                            height={250} 
                            layout="responsive"
                        />
                        <div className="eduque-se">
                            <h3 className="text-xl font-semibold text-gray-900">Eduque-se</h3>
                            <p className="text-gray-700">
                                Aqui você pode aprender como diminuir seu impacto negativo sobre nosso planeta.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image 
                            src="/img/sustainable.jpg" 
                            alt="Soluções Sustentáveis" 
                            width={400} 
                            height={250} 
                            layout="responsive"
                        />
                        <div className="flex flex-col items-center p-6 bg-white min-h-screen">
            

            <section className="w-full max-w-4xl mb-8">
                <div className="CO2">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image 
                            src="/img/co2.jpg" 
                            alt="Calculo CO2" 
                            width={400} 
                            height={250} 
                            layout="responsive"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900">Calculo CO2</h3>
                            <p className="text-gray-700">
                                Aqui usamos as informações inseridas para calcular seu impacto de CO₂ no planeta.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image 
                            src="/img/perfil.jpg" 
                            alt="Perfil" 
                            width={400} 
                            height={250} 
                            layout="responsive"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900">Perfil</h3>
                            <p className="text-gray-700">
                                Aqui você consegue ver e inserir suas informações de eletrodomésticos, residências, carros e/ou gás.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-3xl mb-8 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Por que usar EcoLar?</h2>
                <p className="mb-4">
                    Com a EcoLar, você investe no seu <span className="text-green-600 font-semibold">lar</span> e no <span className="text-green-600 font-semibold">planeta</span> ao mesmo tempo.
                </p>
                <p className="mb-4">
                    Na EcoLar, acreditamos que é possível morar de forma sustentável sem abrir mão da economia. Nossas soluções são desenvolvidas para ajudar você a reduzir os custos com energia e outros recursos, oferecendo orientações práticas e serviços que transformam a sua casa em um ambiente mais eficiente e econômico.
                </p>
                <div className="flex items-center justify-center mb-4">
                    <Image 
                        src="/img/house-icon.png" 
                        alt="Casa Sustentável" 
                        width={80} 
                        height={80} 
                    />
                </div>
                <p>
                    A EcoLar usa tecnologia de ponta e inovação para medir e otimizar o consumo de energia e recursos em sua residência. Nosso sistema oferece relatórios personalizados, diagnóstico de emissões de CO₂ e dicas práticas de redução de impacto ambiental. Com a EcoLar, você não apenas entende o consumo de sua casa, mas também transforma sua residência em um modelo de sustentabilidade.
                </p>
            </section>

            <section className="w-full max-w-4xl mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Desenvolvedores</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
                        <Image 
                            src="/img/luis-henrique.jpg" 
                            alt="Luis Henrique" 
                            width={80} 
                            height={80} 
                            className="rounded-full mx-auto"
                        />
                        <h3 className="text-xl font-semibold mt-4">Luis Henrique</h3>
                        <p className="text-gray-600">RM:558935</p>
                    </div>
                    <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
                        <Image 
                            src="/img/melissa-pereira.jpg" 
                            alt="Melissa Pereira" 
                            width={80} 
                            height={80} 
                            className="rounded-full mx-auto"
                        />
                        <h3 className="text-xl font-semibold mt-4">Melissa Pereira</h3>
                        <p className="text-gray-600">RM:555656</p>
                    </div>
                    <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
                        <Image 
                            src="/img/diego-furigo.jpg" 
                            alt="Diego Furigo" 
                            width={80} 
                            height={80} 
                            className="rounded-full mx-auto"
                        />
                        <h3 className="text-xl font-semibold mt-4">Diego Furigo</h3>
                        <p className="text-gray-600">RM:558755</p>
                    </div>
                </div>
            </section>
        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
