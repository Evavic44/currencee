export function isInputNum(input) {
  if (input === "" || /^[0-9.]*$/.test(input.toString())) return true;
  return false;
}
