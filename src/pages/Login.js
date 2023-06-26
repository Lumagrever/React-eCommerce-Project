import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");

    const handleEmail = (e) => {
        setEmail (e.target.value);
        setErrEmail ("");
    }
    const handlePassword = (e) => {
        setPassword (e.target.value);
        setErrPassword("");
    }
    const handleLogin = (e) => {
        e.preventDefault()
        if (!email){
            setErrEmail("Ingresa tu email");
        }
        if (!password) {
            setErrPassword("Ingresa tu contraseña")
        }
        if (email && password) {
            setEmail("")
            setPassword("")
          }
    }
  return (
    <div className="w-full">
      <div className="w-full pb-20">
        <form className="w-[350px] mx-auto flex flex-col items-center bg-gray-300">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Iniciar Sesión
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                onChange={handleEmail}
                value={email}
                  className="w-full lowercase py-1 border border-gray-600 px-2 text-base rounded-sm outline-none"
                  type="email"
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Contraseña</p>
                <input
                onChange={handlePassword}
                value={password}
                  className="w-full lowercase py-1 border border-gray-600 px-2 text-base rounded-sm outline-none"
                  type="password"
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errPassword}
                  </p>
                )}
              </div>
              <button
                onClick={handleLogin}
                className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800"
              >
                Conectar
              </button>
            </div>
            </div>
            <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
              <span className="w-1/3 text-center">¿No tenes cuenta?</span>
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            </p>
            <Link className="w-full" to="/registration">
              <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800">
                Registrate
              </button>
              </Link>
          </form>
      </div>
    </div>
  );
};

export default Login;
