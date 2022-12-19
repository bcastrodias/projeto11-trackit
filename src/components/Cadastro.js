import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const onPressButton = () => {
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        { email, password, name, image }
      )
      .then(() => navigate("/"))
      .catch(() => alert("Preencha adequadamente"));

    // {email, password, username, image}
    // {email: email, password: password, username: username, image: image}
  };

  return (
    <Container>
      <Input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={onPressButton}> Cadastrar </Button>
    </Container>
  );
};

const Input = styled.input`
  height: 45px;
  width: 303px;
  border-radius: 5px;
`;

const Container = styled.div``;

const Button = styled.button`
  height: 45px;
  width: 303px;
  border-radius: 5px;
`;

export default Cadastro;
