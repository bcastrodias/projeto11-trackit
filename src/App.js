import React from "react";
import { AuthProvider } from "./ contexts/auth";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico ";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<></>} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
