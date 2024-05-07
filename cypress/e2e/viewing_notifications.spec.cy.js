describe('Viewing Notifications Test', () => {
    it("Positive View Notifications test", () => {
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

            cy.log('Проверка, что пользователь успешно перешел на страницу уведомлений')
            cy.url().should('equal', 'https://dev.profteam.su/notification')

            cy.log('Клик по кнопке "Просмотреть"')
            cy.get(':nth-child(1) > .notification-list-item > .button').click()

            cy.log('Проверка, что пользователь успешно перешел на страницу откликов')
            cy.url().should('equal', 'https://dev.profteam.su/responses')
        });
    });
});
