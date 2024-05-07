describe('Add Role Student Test', () => {
    it('Positive Add Role test', () => {
        cy.fixture('cypressAddRole').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('.page-nav__role-block > .button').click()

            cy.log('Выбор роли студента')
            cy.get('.select-role-form > :nth-child(3)').click()

            cy.log('Проверка, что появилась текст роли Студента')
            cy.get('.menu-item__name').should('have.text', 'Студент')

            cy.log('Проверка, что появился блок "Сбросить роль Студента"')
            cy.get('[data-v-02661ece=""][data-v-4e40dec7=""]').should('have.text', 'Студент')
        });
    });
});

