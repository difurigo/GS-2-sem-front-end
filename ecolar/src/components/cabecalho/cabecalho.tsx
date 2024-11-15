import React from 'react';

export default function Cabecalho() {
    return (
        <header className="flex items-center justify-between p-4">
            <span className="text-xl">
                {/* icone */}
                <span className="inline-block">🍃</span>
            </span>
            <button className="px-4 py-2 bg-black text-white rounded">Login</button>
        </header>
    );
}
