/* eslint-disable no-restricted-properties */
/* eslint-disable import/prefer-default-export */
export const round = (value: number, precision: number) => {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};
