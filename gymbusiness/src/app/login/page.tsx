"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

type Dia = {
    id_dia: string;
    dia: string;
    estado: boolean;
};

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dia, setDia] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        if (dia) {
            const timer = setTimeout(() => router.push("/admin"), 1500);
            return () => clearTimeout(timer);
        }
    }, [dia, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setDia(null);

        try {
            const res = await fetch("http://127.0.0.1:8000/api/dias/");
            if (!res.ok) throw new Error("Error al obtener los días");

            const data: Dia[] = await res.json();
            if (data.length > 0) setDia(data[0].dia);
            else setError("No se encontraron días en el servicio");
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>{isRegister ? "Regístrate" : "Inicio de sesión"}</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Cargando..." : isRegister ? "Registrarse" : "Iniciar Sesión"}
                    </button>
                </form>

                {dia && (
                    <p style={{ marginTop: "1rem", color: "green", fontWeight: 600 }}>
                        Día recibido: {dia}
                    </p>
                )}

                {error && (
                    <p style={{ marginTop: "1rem", color: "red", fontWeight: 600 }}>
                        {error}
                    </p>
                )}

                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    {isRegister ? (
                        <button className="toggle-link" onClick={() => setIsRegister(false)}>
                            ¿Ya tienes cuenta? <span>Inicia sesión</span>
                        </button>
                    ) : (
                        <button className="toggle-link" onClick={() => setIsRegister(true)}>
                            ¿No tienes cuenta? <span>Regístrate</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
