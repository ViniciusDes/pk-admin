import { toast } from 'react-toastify';
import { toUint8Array } from 'js-base64';
import { GetToastOptionsParams } from './types';

export const optionsActiveAndInative = [
  {
    label: 'Ativo',
    value: 1,
  },
  {
    label: 'Inativo',
    value: 2,
  },
];
export const optionsYesAndNo = [
  {
    label: 'Sim',
    value: 1,
  },
  {
    label: 'Não',
    value: 0,
  },
];

export function containsLetter(arg: string): boolean {
  const letterRegex = /[a-zA-Z]/;
  return letterRegex.test(arg);
}

export const getToastOptions = (params?: GetToastOptionsParams) => ({
  autoClose: params?.timeAutoClose ?? 4000,
  position: params?.position ?? toast.POSITION.TOP_CENTER,
});

export const errorAlertMessage = (error: any | unknown) => {
  const msg = `Erro: ${error?.response?.data.message || error?.message || error?.error || error}`;
  return toast.error(msg, getToastOptions());
};

export function removeSpecialCharacters(text: string): string {
  const regex = /[^a-zA-Z0-9]/g;

  const textWithOutSpecialCharacters = String(text).replace(regex, '');

  return textWithOutSpecialCharacters;
}

export function validateCnpjIsValid(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]/g, '');

  if (cnpj.length !== 14) {
    return false;
  }

  const digitosIguais = /^(\d)\1+$/.test(cnpj);
  if (digitosIguais) {
    return false;
  }

  let soma = 0;
  let peso = 5;
  for (let i = 0; i < 12; i++) {
    soma += parseInt(cnpj.charAt(i), 10) * peso;
    peso = peso === 2 ? 9 : peso - 1;
  }
  const primeiroDigito = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  soma = 0;
  peso = 6;
  for (let i = 0; i < 13; i++) {
    soma += parseInt(cnpj.charAt(i), 10) * peso;
    peso = peso === 2 ? 9 : peso - 1;
  }
  const segundoDigito = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (
    parseInt(cnpj.charAt(12), 10) !== primeiroDigito ||
    parseInt(cnpj.charAt(13), 10) !== segundoDigito
  ) {
    return false;
  }

  return true;
}

export function validateCPFIsValid(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  const digits = cpf.split('').map(Number);
  const sum = digits.slice(0, 9).reduce((acc, digit, index) => {
    return acc + digit * (10 - index);
  }, 0);

  const remainder = sum % 11;
  const firstDigit = remainder < 2 ? 0 : 11 - remainder;

  if (firstDigit !== digits[9]) {
    return false;
  }

  const sum2 = digits.slice(0, 10).reduce((acc, digit, index) => {
    return acc + digit * (11 - index);
  }, 0);

  const remainder2 = sum2 % 11;
  const secondDigit = remainder2 < 2 ? 0 : 11 - remainder2;

  if (secondDigit !== digits[10]) {
    return false;
  }

  return true;
}

export function maskCpfCnpj(value: string): string {
  value = value.replace(/\D/g, '');

  if (value.length <= 11) {
    // CPF: 999.999.999-99
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{2})/, '$1-$2');
  } else {
    // CNPJ: 99.999.999/9999-99
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
  }

  return value;
}

export function cnpjMask(valor: string) {
  valor = valor
    .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura os dois últimos 2 números, com um - antes dos dois números
  return valor;
}

export function cpfMask(valor: string) {
  valor = valor
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  return valor;
}

export function cepMask(valor: string) {
  valor = valor
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(\d{5})(\d{3})/, '$1-$2');
  // .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  return valor;
}

export const dateTimeToDateTimeBR = (date: string) => {
  const data = new Date(date);
  return data.toLocaleString('pt-BR').replace(',', '');
};

export const defineDadosPadraoObjetoSelect = (label: string, value: string, dados: any[]) => {
  const propriedadesLabel = String(label).split(',');
  return dados.map((item) => ({
    value: item[value],
    label:
      propriedadesLabel.length > 1
        ? `${item[propriedadesLabel[0]]} - ${item[propriedadesLabel[1].trim()]}`
        : item[propriedadesLabel[0]],
  }));
};

export const formatDateToDateTime = (date: Date) => {
  if (!date) {
    return '';
  }
  function padZero(numero: number) {
    return numero < 10 ? `0${numero}` : numero;
  }
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};

export const base64ToFile = (base64String: string, fileName: string): File => {
  const arr = base64String.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mime });
  return new File([blob], fileName, { type: mime });
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result?.toString() || '');
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export const fileToBlob = (file: File): Blob => {
  return new Blob([file], { type: file.type });
};

export const toDataUrl = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();

  const file = new File([blob], 'fileName', { type: blob.type });

  return file;
};
