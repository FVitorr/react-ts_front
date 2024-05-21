import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from "../../components/Inputs";
import Body from "../../components/Body";
import { Container, MidBody, IFooter } from "./styles";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Span from "../../components/Span";
import { isValidEmail } from '../../utils/emailValidator';
import { isValidPassword } from "../../utils/passwordValidator";

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(null);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(null);
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    if (!isValidPassword(password)) {
      setPasswordError('Invalid password');
      isValid = false;
    }

    if (isValid) {
      navigate('/react-ts_front/home');
    }
  };

  return (
    <>
      <Container>
        <Body>
          <MidBody>
            <h1>Welcome to website</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
          </MidBody>
          <Content>
            <h2>Login to your account</h2>
            <span>Don’t have an account? <Link to="/react-ts_front/register">Sign up!</Link></span>
            <Input text="Email:" placeholder="example@example.com" type="email" value={email} handleChange={handleEmailChange} />
            {emailError && <Span content={emailError} isVisible={true} />}

            <Input text="Password:" placeholder="Password" type="password" value={password} handleChange={handlePasswordChange} />
            {passwordError && <Span content={passwordError} isVisible={true} />}

            <IFooter>
              <span><input type="checkbox" /> Remember me</span>
              <a href="/">Forgot password?</a>
            </IFooter>
            <Button onClick={handleSubmit}>Login</Button>
          </Content>
        </Body>
      </Container>
    </>
  );
};

export default Login;
