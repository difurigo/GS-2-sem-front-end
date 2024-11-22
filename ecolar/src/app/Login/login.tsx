import React, { useState } from "react";
import { login } from "../api/loginService";

const Login = () => {
    const [email, setEmail] = useState<string>(""); // Tipagem explícita
    const [senha, setSenha] = useState<string>(""); // Tipagem explícita
    const [error, setError] = useState<string | null>(null); // Aceita null ou string
    const [success, setSuccess] = useState<string | null>(null); // Aceita null ou string
    const [loading, setLoading] = useState<boolean>(false); // Estado de carregamento

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Limpa mensagens de erro
        setSuccess(null); // Limpa mensagens de sucesso
        setLoading(true); // Inicia o estado de carregamento

        try {
            const result = await login(email, senha);
            setSuccess(result); // Define a mensagem de sucesso do backend
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Ocorreu um erro inesperado. Tente novamente."
            );
        } finally {
            setLoading(false); // Finaliza o estado de carregamento
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ display: "block", margin: "10px auto", width: "100%" }}
                />
                <label htmlFor="senha">Senha:</label>
                <input
                    id="senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    style={{ display: "block", margin: "10px auto", width: "100%" }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Carregando..." : "Entrar"}
                </button>
            </form>
            {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
            {success && <p style={{ color: "green", marginTop: "20px" }}>{success}</p>}
        </div>
    );
};

export default Login;
