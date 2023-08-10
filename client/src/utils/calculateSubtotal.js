export const calculateSubtotal = (data) => {
  let subtotal = 0;

  for (let item of data) {
    subtotal += (parseFloat(item.price) * parseInt(item.quantity))
  }

  return (Math.round(subtotal * 100) / 100);
}