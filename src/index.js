const NUMBER = (value) =>
  value && isNaN(Number(value)) ? "Campo numérico" : undefined;

const EMAIL = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Endereço de e-mail inválido"
    : undefined;

const FULLNAME = (value) =>
  value &&
  /^[a-zãâáàêéèíìîòóôõúùûüç]{1,}(?:\s+[a-zãâáàêéèíìîòóôõúùûüç]{1,})+/i.test(
    value
  )
    ? undefined
    : "Preencha com o nome completo";

const REQUIRED = (value) => (value ? undefined : "Obrigatório");

const ALPHA = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? "Apenas letras e números" : undefined;

const PHONE = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Telefone inválido"
    : undefined;

const ALPHASLASH = (value) =>
  value && /[^a-zA-Z0-9\/ ]/i.test(value)
    ? "Apenas letras e números"
    : undefined;

const DATE = (value) =>
  value && /[^(0?\d|[12]\d|3[01])[\/\-](0?\d|1[012])[\/\-]\d{4}$]/i.test(value)
    ? "Data inválida"
    : undefined;

const RG = (value) => {
  if (value.length < 9 || value.length > 11) {
    return "Formato de RG/CNH - RG inválido";
  }
  if (value.length >= 10 && value.length < 11)
    return "Formato de RG/CNH - RG inválido";
};

const CPF = (value) => {
  var soma = 0,
    resto;
  var value = value.replace(/\D/g, "");
  if (value.length !== 11 || value.match(/^(\d)\1+$/)) {
    return "Formato de CPF inválido";
  }
  for (var i = 1; i <= 9; i++) {
    soma += parseInt(value.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(value.substring(9, 10))) {
    return "Formato de CPF inválido";
  }
  soma = 0;
  for (var i = 1; i <= 10; i++) {
    soma = soma + parseInt(value.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  return resto === parseInt(value.substring(10, 11))
    ? undefined
    : "Formato de CPF inválido";
};

module.export = {
  NUMBER: NUMBER,
  EMAIL: EMAIL,
  FULLNAME: FULLNAME,
  PHONE: PHONE,
};
