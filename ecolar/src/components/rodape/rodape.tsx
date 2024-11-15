import React from 'react';

export default function Rodape() {
    return (
        <footer className="bg-green-500 text-black p-4 flex justify-between items-start">
            <div>
                <span className="text-xl">EcoLar</span>
                <p className="mt-2 font-semibold">Oferecimento:</p>
                <ul className="text-gray-800">
                    <li>Di Furigo</li>
                    <li>Lu Vieira</li>
                    <li>Mel</li>
                </ul>
            </div>
            <span className="text-black self-end">Para prof Ale &lt;3</span>
        </footer>
    );
}
