
import Input from "../../components/Inputs";
import Body from "../../components/Body"
import { Container,MidBody,IFooter,Section } from "./styles";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Span from "../../components/Span"

import React, { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidator';
import { Password } from "styled-icons/fluentui-system-filled";
import { isValidPassword } from "../../utils/passwordValidator";

const Register = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidemail, setisValidEmail] = useState(true);
  const [isValidpassword, setisValidpassword] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setisValidEmail(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setisValidpassword(true)
  };

  const handleSubimit = () =>{
    if (!isValidEmail(email)){
      setisValidEmail(false);
    }
    if (!isValidPassword(email)){
      setisValidpassword(false);
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
      <h2>Register to your account</h2>
      <span>Do have an account ? <a href="/">Sing-up !</a></span>
      <Input text={"Email:"} placeholder={"exemple@example.com.br"}  type={"email"} value={email} handleChange={handleEmailChange}/>
      <Input text={"Password:"} placeholder={"Password"}  type={"password"} value={password} handleChange={handlePasswordChange}/>
      <Section>
        <Input text={"Name:"} placeholder={"Full Name"}  type={"text"} value={password} handleChange={handlePasswordChange}
        customStyles={{ width: "45%" }}/>
        <Input text={"Birthday:"} placeholder={""}  type={"date"} value={email} handleChange={handleEmailChange}
        customStyles={{ width: "50%" }}/>
      </Section>
      <Section>
        <Input text={"Phone:"} placeholder={"Full Name"}  type={"tel"} value={password} handleChange={handlePasswordChange} customStyles={{ width: "45%" }}/>
        <Input text={"Country:"} placeholder={"Brasil"}  type={"text"} value={password} handleChange={handlePasswordChange}
        customStyles={{ width: "50%" }}/>
      </Section>

      <Span content="Senha Invalido: Use Simbolos,Letras e Numeros" isVisible = {!isValidpassword}/>

      <IFooter> <span><input type="checkbox"/> 
      Lorem Ipsum </span> <a href="/">Help ?</a></IFooter>
      <Button onclick = {handleSubimit}>Register</Button>
    </Content>
  </Body>
  </Container>
  </>);
}

export default Register;