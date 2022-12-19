import React from "react";
import { AuthProvider } from "./ contexts/auth";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<></>} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
