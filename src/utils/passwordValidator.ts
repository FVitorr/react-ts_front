export const isValidPassword = (password: string) => {
  // Expressão regular para validar a senha
  const passwordRegex = /^(?=.*[!@#$%^&*()])(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;

  // Retorna true se a senha corresponder à expressão regular, caso contrário, retorna false
  return passwordRegex.test(password);
};
