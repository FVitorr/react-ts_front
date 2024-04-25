
import Input from "../../components/Inputs";
import Body from "../../components/Body"
import { Container,MidBody,IFooter } from "./styles";
import Content from "../../components/Content";
import Button from "../../components/Button";

const Login = ()=>{
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
      <span>Don´t have an account ? <a href="/">Sing up free !</a></span>
      <Input placeholder={"Username"} text={"E-mail:"} type={"text"}/>
      <Input placeholder={"Password"} text={"Password:"} type={"password"}/>
      <IFooter> <span><input type="checkbox"/> Remember me</span> Forgot password ?</IFooter>
      <Button>Login</Button>
    </Content>
  </Body>
  </Container>
  </>);
}

export default Login;