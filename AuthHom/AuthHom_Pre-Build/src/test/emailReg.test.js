const emailReg = require("../emailReg")

const email1 = "test1234@gmail.com";
const email2 = "asdas";
const email3 = "12312@d";
const email4 = "qweqweq@dds.c";
const email5 = "";
const email6 = null;



test("Correo válido", () => {
  expect(emailReg(email1)).toBeTruthy();
});

test("Correo inválido", () => {
  expect(emailReg(email2)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(emailReg(email3)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(emailReg(email4)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(emailReg(email5)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(email6).toBeNull();
});