function capitalize(x) {
  let arr = x.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

export default capitalize;
