export const createSelectOptions = (array) => {
  return array.map((item) => (
    { name: item, value: item}
  ))
};