import React from 'react';
import './globals.css';


const NotFound404: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col self-center mt-24 max-w-full w-[943px] max-md:mt-10">
        <div className="self-center text-6xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
          404 - Not Found
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8eb902bd155e9e2ada8a705b0a2aee7a7a15e5ba46919bda7c0e5187b06ff8?placeholderIfAbsent=true&apiKey=4b34c10274424c8b980c81c1ce496da8"
          alt="404 Error Illustration"
          className="object-contain mt-4 w-full rounded-lg aspect-[0.96] max-md:max-w-full"
        />
        <div className="self-end mt-3.5 mr-11 text-3xl font-semibold text-black max-md:mr-2.5">
          Les abortades
        </div>
      </div>
    </div>
  );
};

export default NotFound404;