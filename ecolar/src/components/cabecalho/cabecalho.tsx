import Link from 'next/link';

const Cabecalho: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-20 py-5 w-full text-xl font-medium text-black whitespace-nowrap bg-white bg-opacity-10 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      {/* Logo com link para a página inicial */}
      <Link href="/" passHref>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e781f205da8400a4ed875fc268f563965ede79b7bcf660dde8f3f8a72c74b6fe?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
          className="object-contain shrink-0 max-w-full aspect-[1.15] w-[149px] cursor-pointer"
          alt="Logo"
        />
      </Link>

      <div className="flex flex-wrap gap-10 items-center my-auto max-md:max-w-full">
        {/* Navegação para diferentes páginas */}
        <Link href="/devs" passHref>
          <div className="self-stretch my-auto cursor-pointer">Integrantes</div>
        </Link>

        <Link href="/perf" passHref>
          <div className="self-stretch my-auto cursor-pointer">Perfil</div>
        </Link>

        <Link href="/Eduquese" passHref>
          <div className="self-stretch my-auto cursor-pointer">Eduque-se</div>
        </Link>

        <Link href="/Login" passHref>
          <div className="gap-2 self-stretch px-6 py-3.5 my-auto text-base bg-black rounded-lg shadow-sm text-white text-opacity-90 max-md:px-5 cursor-pointer">
            Login
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Cabecalho;
