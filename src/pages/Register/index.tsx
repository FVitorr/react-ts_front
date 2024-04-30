
import Input from "../../components/Inputs";
import Body from "../../components/Body"
import { Container,MidBody,IFooter,Section } from "./styles";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Span from "../../components/Span"

import { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidator';
// import { Password } from "styled-icons/fluentui-system-filled";
import { isValidPassword } from "../../utils/passwordValidator";
import { formatPhone, isValidPhone } from "../../utils/phoneUtils";
import { Link } from "react-router-dom";

const Register = ()=>{
  const [email, setEmail] = useState('');
  const [isValidemail, setisValidEmail] = useState(true);

  const [password, setPassword] = useState('');
  const [isValidpassword, setisValidpassword] = useState(true);

  const [phone, setPhone] = useState('');
  const [msgPhone, setmsgPhone] = useState('');

  const [date] = useState('')
  const [nome] = useState('')

  const handleEmailChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setisValidEmail(true);
  };

  const handlePasswordChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setisValidpassword(true)
  };
  
 
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    
    // Verifica se a propriedade inputType está presente no evento
    if (event.nativeEvent instanceof InputEvent && (
        inputValue.length <= 12 || event.nativeEvent.inputType === 'deleteContentBackward'
    )) {
        const formattedValue = formatPhone(inputValue);
        setPhone(formattedValue);

        if (!isValidPhone(formattedValue)) {
            setmsgPhone("Invalid phone");
        } else {
            setmsgPhone("");
        }
    }
  };

  
  const handleDateChange = () =>{
    console.log("test");
  }
  
  
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
      <h2>Create your account !</h2>
      <span>Do have an account ? <Link to="/react-ts_front/">Login</Link></span>
      <Input text={"Email:"} placeholder={"exemple@example.com.br"}  type={"email"} value={email} handleChange={handleEmailChange}/>
      
      <Span content="Invalid email address" isVisible = {!isValidemail}/>

      <Input text={"Password:"} placeholder={"Password"}  type={"password"} value={password} handleChange={handlePasswordChange}/>
      <Span content="Invalid password" isVisible = {!isValidpassword}/>

      <Section>
        <Input text={"Name:"} placeholder={"Full Name"}  type={"text"} value={nome} handleChange={handlePasswordChange}
        customStyles={{ width: "45%" }}/>
        <Input text={"Birthday:"} placeholder={""}  type={"date"} value={date} handleChange={handleDateChange}
        customStyles={{ width: "50%" }}/>
      </Section>

      <Span content="Name and Birthday must be filled in" isVisible = {!isValidpassword}/>

      <Section>
        <Input text={"Phone:"} placeholder="(xxx) xxxxx-xxxx"  type={"tel"} value={phone} handleChange={handlePhoneChange} customStyles={{ width: "45%" }}/>
        <Input text={"Country:"} placeholder={"Brasil"}  type={"text"} value={password} handleChange={handlePasswordChange}
        customStyles={{ width: "50%" }}/>
      </Section>

      <Span content={msgPhone} isVisible = {true}/>

      <IFooter> <span><input type="checkbox"/> 
      Lorem Ipsum </span></IFooter>
      <Button onClick = {handleSubimit}>Register</Button>
    </Content>
  </Body>
  </Container>
  </>);
}

export default Register;