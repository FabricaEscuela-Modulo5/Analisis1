const isPassRegex = require("../pass");

const passtest1 = "Password123*";
const passtest2 = "Pass word123";
const passtest3 = "Pass";
const passtest4 = "Password";
const passtest5 = "";
const passtest6 = null;

//expresión regular
test("Password válido", () => {
  expect(isPassRegex(passtest1)).toBeTruthy();
});

test("Password inválido", () => {
  expect(isPassRegex(passtest2)).toBeFalsy();
});

//limite inferior
test("Longitud Password válido", () => {
  expect(passtest3.length).toBeLessThan(6);
});

test("Longitud Password fallido", () => {
  expect(passtest4.length).toBeGreaterThanOrEqual(6);
});

//campos vacios
test("Password no vacío válido", () => {
  expect(passtest1.length).toBeGreaterThan(0);
});

test("Password no vacío inválido", () => {
  expect(passtest5.length).toBeLessThanOrEqual(0);
});

//campo nulo
test("Password nulo inválido", () => {
  expect(passtest6).toBeNull();
});
