describe('Authorization Test', () => {
    it('Wrong login test', () => {
        cy.fixture('cypressAuthorization').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод неправильного логина')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_login)
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > .form-error > span')
            .should('exist')
        });
    });
    it('None-existent login and password test', () => {
        cy.fixture('cypressAuthorization').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод несуществующего логина')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_login)
            
            cy.log('Ввод несуществующего пароля')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.none_existent_password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > .form-error > span')
            .should('exist')
        });
    });
    it('Wrong password test', () => {
        cy.fixture('cypressAuthorization').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод неправильного пароля')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.wrong_password)

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(2) > .form-error > span')
            .should('exist')
        });
    });
});