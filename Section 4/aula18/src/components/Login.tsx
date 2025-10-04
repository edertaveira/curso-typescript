import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "eder@example.com" && password === "123456") {
      setLoggedIn(true);
      setError(null);
    } else {
      setError("Credenciais inválidas!");
    }
  };

  if (loggedIn) return <h1>Bem-vindo, {email}!</h1>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64 mx-auto mt-10">
      {error && (
        <div role="alert" className="text-red-600 text-sm" data-testid="login-error">
          {error}
        </div>
      )}
      <input
        aria-label="Email"
        type="email"
        name="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <input
        aria-label="Senha"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Entrar
      </button>
    </form>
  );
}