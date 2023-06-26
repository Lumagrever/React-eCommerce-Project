import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // Manejo de errores y mensajes
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");

  // Validacion de Email

  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Funciones Handle
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrPassword("");
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Ingresa tu nombre");
    }
    if (!email) {
      setErrEmail("Ingresa tu email");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Ingresa un email válido");
      }
    }
    if (!password) {
      setErrPassword("ingresa tu contraseña");
    } else {
      if (password.length < 6) {
        setErrPassword("la constraseña debe tener al menos 6 carácteres");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirma tu contraseña");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Las contraseñas no conciden");
      }
    }
    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      // =========== Registro de Firebase ===============
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full pb-20">
        <form className="w-[370px] mx-auto flex flex-col items-center">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Zona de Registro
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Nombre</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full py-1 border border-gray-600 px-2 text-base rounded-sm outline-none"
                  type="text"
                />
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errClientName}
                  </p>
                )}
              </div>
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
                  className="w-full py-1 border border-gray-600 px-2 text-base rounded-sm outline-none"
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
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Confirmar contraseña</p>
                <input
                  onChange={handleCPassword}
                  value={cPassword}
                  className="w-full py-1 border border-gray-600 px-2 text-base rounded-sm outline-none"
                  type="password"
                />
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errCPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">Minimo 6 caracteres</p>
              </div>
              <button
                onClick={handleRegistration}
                className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800"
              >
                Continuar
              </button>
            </div>
            <div>
              <p className="text-xs text-black leading-4 mt-4">
                Tenes una cuenta?{" "}
                <Link to="/login">
                  <span className="text text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100 ">
                    Inicia sesión
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;