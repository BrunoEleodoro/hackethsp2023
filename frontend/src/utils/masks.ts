export const currencyFormat = (value?: string) => {
  if (value === '0' || value === undefined) return 'R$ 0,00';
  return parseFloat(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
