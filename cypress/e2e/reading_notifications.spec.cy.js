describe('Reading Notifications Test', () => {
    it("Positive Read Notifications test", () => {
        cy.fixture('cypressNotifications').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.wait(3000)

            cy.log('Клик по ссылке "Уведомления"')
            cy.get('.header__nav > [href="/notification"] > .header__label').click()

            cy.wait(3000)

            cy.log('Клик по ссылке "Прочитать все"')
            cy.get('.notification-title > .link').click()

            cy.log('Проверка, что уведомления прочитались (равны 0)')
            cy.get('.notification-title > .notification-count').should('have.text', '0')
        });
    });
});