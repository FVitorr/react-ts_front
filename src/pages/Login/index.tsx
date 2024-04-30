
import Input from "../../components/Inputs";
import Body from "../../components/Body"
import { Container,MidBody,IFooter } from "./styles";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Span from "../../components/Span"

import { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidator';
// import { Password } from "styled-icons/fluentui-system-filled";
import { isValidPassword } from "../../utils/passwordValidator";
import { Link } from "react-router-dom";

const Login = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidemail, setisValidEmail] = useState('');
  const [isValidpassword, setisValidpassword] = useState('');

  const handleEmailChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setisValidEmail('');
  };

  const handlePasswordChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setisValidpassword('')
  };

  const handleSubimit = () =>{
    if (!isValidEmail(email)){
      setisValidEmail('Invalid email address');
    }
    if (!isValidPassword(email)){
      setisValidpassword('Invalid password');
    }
    return;
  }


  return(<>
  <Container>
  <Body>
    <MidBody>
      <h1>
        Welcome to website
      </h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
      </p>
    </MidBody>
    <Content>
      <h2>Login to your account</h2>
      <span>Don´t have an account ? <Link to="/react-ts_front/register">Sign up!</Link></span>
      <Input text={"Email:"} placeholder={"example@example.com"}  type={"email"} value={email} handleChange={handleEmailChange}/>
      <Span content= {isValidemail} isVisible = {true}/>

      <Input text={"Password:"} placeholder={"Password"}  type={"password"} value={password} handleChange={handlePasswordChange}/>

      <Span content={isValidpassword} isVisible = {true}/>

      <IFooter> <span><input type="checkbox"/> 
        Remember me</span> <a href="/">Forgot password ?</a>
      </IFooter>
      <Button onClick = {handleSubimit}>Login</Button>
    </Content>
  </Body>
  </Container>
  </>);
}

export default Login;