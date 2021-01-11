const semRetorno = (...args: string[]): void => {
  console.log(args.join(' '));
};
semRetorno('Tales', 'Lucas');

const pessoa: {
  readonly nome: string;
  [key: string]: unknown;
} = {
  nome: 'Tales Monteiro',
};

pessoa.teste = '3';
console.log(pessoa);
