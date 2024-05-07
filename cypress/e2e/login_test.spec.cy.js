describe('Authorization Test', () => {
    it('Positive Login test', () => {
        cy.fixture('cypressAuthorization').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.log('Проверка, что пользователь успешно авторизовался (перешел в ЛК)')
            cy.url().should('equal', 'https://dev.profteam.su/account/main')
        });
    });
});