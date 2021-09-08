describe('Insert Documentation Error', function () {

    var i = 1;
    it('0' + i + ' - Go to Documentation Errors App', function () {
        cy.visit('http://sjo-testapp1/docErrors/management.php', {})
		cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Log in (Wrong)', function () {
        cy.get('#email').type("wrong", { delay: 100 });
        cy.get('#password').type("wrong", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        cy.get('#password').clear();
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Log in (Good) User Not Allowed', function () {
        cy.get('#email').clear();
        cy.get('#email').type("coatingtr", { delay: 100 });
        cy.get('#password').type("Cuacoro#44", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.get('#swal2-title').contains("You don't have permissions to modify data");
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it('0' + i + " - Display error message 'User Not Allowed'", function () {
        cy.get('#swal2-title').contains("You don't have permissions to modify data");
        cy.wait(2000);
        cy.screenshot();
        cy.get('button').contains('OK').click();
        cy.clearCookies();
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Log in (Good) User Allowed', function () {
        cy.visit('http://sjo-testapp1/docErrors/management.php', {});
        cy.wait(1000);
        cy.get('#email').type("wotracker", { delay: 100 });
        cy.get('#password').type("Microvention#44", { delay: 100 });
        cy.wait(1000);
        cy.get('button').contains('Iniciar sesión').click();
    });
    i++;
    it(i + " - Show Document Error Management '", function () {
        cy.wait(1000);
        cy.get('button').contains(' Document Error').click();
        cy.wait(1000);
    });
});