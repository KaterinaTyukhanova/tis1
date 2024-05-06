describe('Registration Test', () => {
    it('Positive Register test', () => {
        cy.fixture('cypressRegistration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            
            cy.log('Ввод почты')
            cy.get(':nth-child(1) > :nth-child(2) > .form-control--medium > .form-input--email').type(data.email)
            
            cy.log('Ввод пароля')
            cy.get(':nth-child(1) > :nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Ввод подтверждения пароля')
            cy.get(':nth-child(1) > :nth-child(4) > .form-control--medium > .form-input--password').type(data.again_password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname)
            
            cy.log('Ввод имени')
            cy.get('[style=""] > :nth-child(2) > .form-control--medium > .form-input--text').type(data.name)
            
            cy.log('Ввод отчества')
            cy.get('[style=""] > :nth-child(3) > .form-control--medium > .form-input--text').type(data.patronym)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()

            cy.log('Проверка, что пользователь успешно зарегистрировался (перешел в ЛК)')
            cy.url().should('equal', 'https://dev.profteam.su/account/main')
        });
    });
});