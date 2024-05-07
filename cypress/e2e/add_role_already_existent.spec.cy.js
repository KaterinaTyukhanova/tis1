describe('Add Role Student Test', () => {
    it('Role already added test', () => {
        cy.fixture('cypressAddRole').then(data => {
            //уже подана заявка на роль работодателя, но пока заявку не одобрили, роль не отображается
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.already_add_role_login)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.wait(3000)

            cy.log('Переход на страницу заявок (клик по ссылке "Заявки")')
            cy.get(':nth-child(3) > .menu-item__item-name').click()

            cy.log('Проверка, что уже есть заявка на добавление роли')
            cy.get('.shared-list-item').should('exist')

            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('.page-nav__role-block > .button').click()

            cy.log('Выбор роли студента')
            cy.get('.select-role-form > :nth-child(3)').click()

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get('.select-role__button-block > .form-error > span')
            .should('exist')
        });
    });
});