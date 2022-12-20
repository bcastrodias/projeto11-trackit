import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <img src="assets/imgs/logo.svg"></img>
      <label htmlFor="email">E-mail</label>
      <Input id="email" type="email" />
      <label htmlFor="password">Senha</label>
      <Input id="password" type="text" />
      <Entrar>
        <Link to="/habitos"></Link>
      </Entrar>
      <Cadastro>
        <Link to="/cadastro"> Não tem uma conta? Cadastre-se! </Link>
      </Cadastro>
    </>
  );
};

export default Login;

const Input = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const Entrar = styled.button`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
`;

const Cadastro = styled.p`
  width: 232px;
  height: 17px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
`;
