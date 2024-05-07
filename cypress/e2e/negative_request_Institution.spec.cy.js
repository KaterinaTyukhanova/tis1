describe('Request Add Role Institution Test', () => {
    it('Role already added test', () => {
        cy.fixture('cypressRequestInstitution').then(data => {
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

            cy.log('Выбор роли ОУ')
            cy.get('.select-role-form > :nth-child(2)').click()

            cy.log('Выбор создания нового ЛК ОУ')
            cy.get('.variants-company > :nth-child(2)').click()

            cy.log('Ввод названия организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_institution)

            cy.log('Ввод адреса организации')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_institution)

            cy.log('Ввод краткого описания организации')
            cy.get('.form-area').type(data.description_institution)

            cy.log('Клик по кнопке "Добавить"')
            cy.get('.create-company-form__description-block > .button').click()

            cy.log('Проверка, что появилась ошибка названия')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error > span')
            .should('exist')

            cy.log('Проверка, что появилась ошибка адреса')
            cy.get(':nth-child(2) > .form-error > span')
            .should('exist')

            cy.log('Проверка, что появилась ошибка краткого описания')
            cy.get(':nth-child(2) > :nth-child(1) > .form-error > span')
            .should('exist')

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get('.create-company-form__description-block > .form-error > span')
            .should('exist')
        });
    });
    it('Clear name institution test', () => {
        cy.fixture('cypressRequestInstitution').then(data => {
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

            cy.log('Выбор роли ОУ')
            cy.get('.select-role-form > :nth-child(2)').click()

            cy.log('Выбор создания нового ЛК ОУ')
            cy.get('.variants-company > :nth-child(2)').click()

            cy.log('Ввод названия организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_institution)

            cy.log('Удаление введеного текста из поля названия ОУ')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').clear()

            cy.log('Проверка, что появилась ошибка названия')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error > span')
            .should('exist')
        });
    });
    it('Clear address institution test', () => {
        cy.fixture('cypressRequestInstitution').then(data => {
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

            cy.log('Выбор роли ОУ')
            cy.get('.select-role-form > :nth-child(2)').click()

            cy.log('Выбор создания нового ЛК ОУ')
            cy.get('.variants-company > :nth-child(2)').click()

            cy.log('Ввод названия организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_institution)

            cy.log('Ввод адреса организации')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_institution)

            cy.log('Удаление введеного текста из поля адреса ОУ')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').clear()

            cy.log('Проверка, что появилась ошибка адреса')
            cy.get(':nth-child(2) > .form-error > span')
            .should('exist')
        });
    });
    it('Clear description institution test', () => {
        cy.fixture('cypressRequestInstitution').then(data => {
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

            cy.log('Выбор роли ОУ')
            cy.get('.select-role-form > :nth-child(2)').click()

            cy.log('Выбор создания нового ЛК ОУ')
            cy.get('.variants-company > :nth-child(2)').click()

            cy.log('Ввод названия организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_institution)

            cy.log('Ввод адреса организации')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_institution)

            cy.log('Ввод краткого описания организации')
            cy.get('.form-area').type(data.description_institution)

            cy.log('Удаление введеного текста из поля описания ОУ')
            cy.get('.form-area').clear()

            cy.log('Проверка, что появилась ошибка краткого описания')
            cy.get(':nth-child(2) > :nth-child(1) > .form-error > span')
            .should('exist')
        });
    });
});
