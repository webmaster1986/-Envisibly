export const maskCurrency = (value, maxLength = 12, radix = ",") => {
  const currencyRegExp = new RegExp(
    `(\\d{1,${maxLength - 3}})(,)?(\\d{2})`,
    "g"
  );
  const num = value ? value.replace(currencyRegExp, (match, p1, p2, p3) =>
    [p1, p3].join(radix)
  ) : ""
  return num
};
