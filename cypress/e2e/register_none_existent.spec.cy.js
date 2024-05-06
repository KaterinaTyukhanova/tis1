describe('Registration Test', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод неправильного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_login)
            
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error')
            .should('exist')
        });
    });
    it('Already-existent login test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод уже существующего логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.already_existent_login)
            
            cy.log('Ввод почты')
            cy.get('.form-input--email').type(data.email)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Ввод подтверждения пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.again_password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error')
                .should('exist')
        });
    });
    it('None-existent email test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод неправильной почты')
            cy.get('.form-input--email').type(data.none_existent_email)
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(2) > .form-error')
            .should('exist')
        });
    });
    it('Already-existent email test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод уже существующей почты')
            cy.get('.form-input--email').type(data.already_existent_email)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Ввод подтверждения пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.again_password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(2) > .form-error')
            .should('exist')
        });
    });
    it('None-existent password test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод почты')
            cy.get('.form-input--email').type(data.email)
            
            cy.log('Ввод неправильного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.none_existent_password)
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(3) > .form-error')
            .should('exist')
        });
    });
    it('None-existent again-password test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод почты')
            cy.get('.form-input--email').type(data.email)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)
            
            cy.log('Ввод неправильного (не соответствует паролю) повторного пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.none_existent_again_password)
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(4) > .form-error')
            .should('exist')
        });
    });
    it('None-existent surname test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод почты')
            cy.get('.form-input--email').type(data.email)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Ввод подтверждения пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.again_password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод неправильной фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_surname)

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > .form-error')
                .should('exist')
        });
    });
    it('None-existent name test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод почты')
            cy.get('.form-input--email').type(data.email)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Ввод подтверждения пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.again_password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname)

            cy.log('Ввод неправильного имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.none_existent_name)

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(2) > .form-error')
                .should('exist')
        });
    });
    it('None-existent patronymic test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод почты')
            cy.get('.form-input--email').type(data.email)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Ввод подтверждения пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.again_password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname)

            cy.log('Ввод имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name)

            cy.log('Ввод неправильного отчества')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.none_existent_patronym)

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(3) > .form-error')
                .should('exist')
        });
    });
});