import styled from "styled-components";
import { useRef, useState } from "react";
import { formatCPF } from "./utils/validationsUtils";

import ReactLogoDesktop from "/img/ReactLogo-White.png";
import ReactLogoMobile from "/img/ReactLogo.png";
import BottomWave from "/img/bottom_wave.svg";
import RightWave from "/img/right_wave.svg";
import LoginCarousselImg from "/img/LoginPageCaroussel.png";
import { FaUser } from "react-icons/fa";

import { BegginBackground } from "./components/BegginBackground";
import { Input } from "./components/inputs/Input";
import { PasswordInput } from "./components/inputs/PasswordInput";
import { Link } from "./components/buttons/Link";
import { PrimaryButton } from "./components/buttons/PrimaryButton";

const LoginContainer = styled.div`
  width: 90%;
  max-width: 800px;
  display: flex;
  align-items: center;
  gap: 40px;

  .left_content {
    width: 50%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: var(--blue);
    border-radius: 16px;
    padding: 16px;

    #logo {
      width: 80px;
    }
    #middle-text {
      width: 250px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      text-align: center;
    }
    #caroussel {
      width: 300px;
      margin: 0 auto;
    }
  }

  .login_form {
    width: 50%;
    min-width: 300px;
    max-width: 360px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      font-size: 28px;
    }

    #header_error_msg {
      height: 20px;
      color: red;
    }

    #highlight_text {
      color: var(--blue);
      font-weight: bold;
    }

    #forgot-pass {
      display: flex;
      justify-content: end;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 770px) {
    box-shadow: none;
    background: none;
    margin: 0;

    .left_content {
      display: none;
    }

    .login_form {
      width: 100%;
      min-width: auto;
      align-self: flex-start;
      padding: 0 16px;
    }
  }
`;

export const LoginPage = () => {
  const loginRef = useRef();

  const [validCpf, setValidCpf] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setIsLoggingIn(true);

    setFieldErrors({});

    const loginRefs = loginRef.current;

    let cpf = loginRefs.cpf.value;
    let password = loginRefs.password.value;

    let errors = {};

    if (!validCpf) errors.cpf = "Insira um CPF válido.";
    if (!cpf) errors.cpf = "Digite o CPF ou ID da conta.";
    if (!password) errors.password = "Digite sua senha.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsLoggingIn(false);
      return;
    }

    cpf = cpf.replace(/\D/g, "");

    try {
      setTimeout(() => {
        setIsLoggingIn(false);
      }, 3000);
    } catch (error) {
      errors.cpf = "Usuário ou senha incorretos.";
      setFieldErrors(errors);
      setIsLoggingIn(false);
    }
  };

  return (
    <BegginBackground>
      <img src={ReactLogoMobile} id="login-mobile-logo" alt="" />
      <LoginContainer>
        <div className="left_content">
          <img src={ReactLogoDesktop} alt="" id="logo" />
          <p id="middle-text">Aplicação desenvolvida em React</p>
          <img src={LoginCarousselImg} alt="" id="caroussel" />
        </div>

        <div className="login_form">
          <div className="form_header">
            <span id="greetings">
              Bem-vindo(a) ao <span id="highlight_text">System</span>
            </span>
            <h1>Entrar</h1>
            <p id="header_error_msg">{fieldErrors.showAtHeader}</p>
          </div>
          <form ref={loginRef} onSubmit={handleLoginSubmit}>
            <Input
              type="text"
              name="cpf"
              label="CPF"
              icon={<FaUser />}
              error={fieldErrors.cpf}
              required={true}
              placeholder=""
              inputFormater={formatCPF}
              setFormatFlag={setValidCpf}
              onChangeHandler={() => setFieldErrors({})}
            />
            <PasswordInput
              name="password"
              label="Senha"
              error={fieldErrors.password}
              required={true}
              placeholder=""
            />
            <Link href="/" text="Esqueceu sua senha?" alignment="right" />
            <br />
            <PrimaryButton
              text={isLoggingIn ? "Entrando..." : "Entrar"}
              width="100%"
              disabled={isLoggingIn}
            />
          </form>
          <br />
          <Link
            href="/"
            additionalText="Não tem uma conta?"
            text="Registre-se agora"
          />
          <Link href="/" text="Termos de uso" />
        </div>
      </LoginContainer>
      <img src={BottomWave} alt="" id="login-bottom-svg" />
      {<img src={RightWave} alt="" id="login-right-svg" />}
    </BegginBackground>
  );
};
