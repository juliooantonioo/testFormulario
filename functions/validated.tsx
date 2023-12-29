export const validated = (isRequired, value, validation) => {
  let validated = isRequired && value === "";
  if (validation === 'email') {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const validatedMail = !(regexEmail.test(value));
    validated = validated || validatedMail
  }
  return validated
}