export const isValidPhone = (password: string) => {
  const phoneRegex = /^\(\d{3}\) \d{5}-\d{4}$/;
  return phoneRegex.test(password);
};


export const formatPhone = (phone:string)=> {
  const phoneInit = phone.replace(/\D/g, '');
  if (phone.length <= 12 ){
    const match = phoneInit.match(/^(\d{0,3})(\d{0,5})(\d{0,4})$/);
    const formattedValue = `(${match[1]}) ${match[2]}-${match[3]}`;

    if (isValidPhone(formattedValue)){
      return formattedValue;
    }
  }
  return phoneInit;
}