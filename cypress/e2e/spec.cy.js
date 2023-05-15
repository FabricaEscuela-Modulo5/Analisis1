describe('test direccion', () => {
  it('Visitar la página de login', () => {
    cy.visit("http://localhost:5173/")
  })
})

describe('test contiene campos de login', () => {
  it('Validar campos', () => {
    cy.visit("http://localhost:5173/")
    cy.contains("Usuario")
    cy.contains("Ingresar")
    cy.contains("Contraseña")
  })
})

describe('test boton de login', () => {
  it('Visitar la página de login e ingresar campos de formulario', () => {
    cy.visit("http://localhost:5173/")
    cy.get("#username").type("ejemplo@mail.com")
    cy.get("#password").type("12345")
    cy.contains("Ingresar").click()
    cy.contains("SOLICITUD DE RECONOCIMIENTO Y HOMOLOGACIÓN DE MATERIAS")
  })
})

describe('test boton de agregar', () => {
  it('Visitar la página de login, loggearse y volver', () => {
    cy.visit("http://localhost:5173/")
    cy.get("#username").type("ejemplo@mail.com")
    cy.get("#password").type("12345")
    cy.contains("Ingresar").click()
    cy.contains("Agregar").click()
  })
})

describe('test información footer', () => {
  it('Verificar campos del footer', () => {
    cy.visit("http://localhost:5173/")
    cy.contains("Universidad de Antioquia | Vigilada Mineducación | Acreditación institucional hasta el 2022 | NIT 890980040-8")
  })
})