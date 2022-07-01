const number = (value) =>
  value && isNaN(Number(value)) ? "Campo numérico" : undefined;

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Endereço de e-mail inválido"
    : undefined;

const fullname = (value) =>
  value &&
  /^[a-zãâáàêéèíìîòóôõúùûüç]{1,}(?:\s+[a-zãâáàêéèíìîòóôõúùûüç]{1,})+/i.test(
    value
  )
    ? undefined
    : "Preencha com o nome completo";

const phone = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Telefone inválido"
    : undefined;

module.export = {
  isNumber: number,
  isEmail: email,
  fullName: fullname,
  isFone: phone,
};
