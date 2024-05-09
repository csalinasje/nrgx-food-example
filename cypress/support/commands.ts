// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    createFood(id: string, name:string, description:string, color:string, group:string ): typeof createFood;
  }
}

function createFood(id: string, name:string, description:string, color:string, group:string): void {
    cy.visit('/')
    cy.get('[formControlName="food.id"]').type(id)
    cy.get('[formControlName="food.name"]').type(name)
    cy.get('[formControlName="food.description"]').type(description)
    cy.get('[formControlName="food.color"]').type(color)
    cy.get('[formControlName="food.group"]').type(group)
    cy.get('button').click()
}

// NOTE: You can use it like so:
Cypress.Commands.add('createFood', createFood);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
