export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);

  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.flatMap((item) => item[type]);

  return ["all", ...new Set(unique)];
};
