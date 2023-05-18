/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve preencher e salvar um novo contato', () => {
        
        cy.get('input[type="text"]').type('Caroline Goes')
        cy.get('input[type="email"]').type('goescaroline@hotmail.com')
        cy.get('input[type="tel"]').type('11 959585548')
        cy.get('button[type="submit"]').click()
        cy.screenshot('novo-contato')
    })
    it('Deve editar um contato', () => {
        cy.get('button[type="button"]').contains('Editar').click()
        cy.get('input[type="text"]').clear().type('Caroline Duque')
        cy.get('input[type="email"]').clear().type('duquecaroline@gmail.com')
        cy.get('input[type="tel"]').clear().type('11 988562653')
        cy.get('button[type="submit"]').contains('Salvar').click()
        cy.screenshot('contato-alterado')
    })
    it('Deve deletar um cadastro', () => {
        cy.get('button[type="button"]').contains('Deletar').click()
        cy.screenshot('contato-deletado')
    })
})
