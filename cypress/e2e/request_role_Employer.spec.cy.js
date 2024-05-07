describe('Request Add Role Employer Test', () => {
    it('Positive Request Employer test', () => {
        cy.fixture('cypressRequestEmployer').then(data => {
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

            cy.log('Выбор роли работодателя')
            cy.get('.select-role-form > :nth-child(1)').click()

            cy.log('Выбор создания нового ЛК работодателя')
            cy.get('.variants-company > :nth-child(2)').click()

            cy.log('Ввод названия компании')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_company)

            cy.log('Ввод адреса компании')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_company)

            cy.log('Ввод краткого описания компании')
            cy.get('.form-area').type(data.description_company)

            cy.log('Клик по кнопке "Добавить"')
            cy.get('.create-company-form__description-block > .button').click()

            cy.wait(2000)

            cy.log('Переход на страницу заявок (клик по ссылке "Заявки")')
            cy.get(':nth-child(3) > .menu-item__item-name').click()

            cy.log('Проверка, что заявка на создание организации существует')
            cy.get('.shared-list-item').should('exist')
        });
    });
});