export const maskCurrency = (value, maxLength = 12, radix = ",") => {
  if (!value) {
    return  '';
  }
  const valueArr = String(value).split('.');
  const num = valueArr[0].replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g,  ",");
  if (valueArr.length > 1) {
    return `${num}.${valueArr[1]}`
  } else {
    return num;
  }
};
