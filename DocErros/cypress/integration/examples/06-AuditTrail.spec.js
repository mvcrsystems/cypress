describe('Audit Trail Viewer', function () {
    function leadingZeroes(num, zeroes = 2) {
        return '0'.repeat(zeroes - Math.ceil(Math.log10(num + 1))) + num;
    }
    let i = 0;
    it(leadingZeroes(++i) + ' - Go to Documentation Errors App Management Section', function () {
        cy.visit('http://sjo-testapp1/docErrors/management.php', {})
		cy.wait(2000);
    });
    it(leadingZeroes(++i) + ' - Log in (Wrong)', function () {
        cy.get('#email').type("wrong", { delay: 100 });
        cy.get('#password').type("wrong", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        cy.get('#password').clear();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + ' - Log in (Good) User Not Allowed', function () {
        cy.get('#email').clear();
        cy.get('#email').type("coatingtr", { delay: 100 });
        cy.get('#password').type("Cuacoro#44", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + " - Display error message 'User Not Allowed'", function () {
        cy.get('#swal2-title').contains("You don't have permissions to modify data");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.clearCookies();
        cy.wait(1000);
    });
    it(leadingZeroes(++i)+ ' - Log in (Good) User Allowed', function () {
        cy.visit('http://sjo-testapp1/docErrors/management.php', {});
        cy.wait(1000);
        cy.get('#email').type("wotracker", { delay: 100 });
        cy.get('#password').type("Microvention#44", { delay: 100 });
        cy.wait(1000);
        cy.get('button').contains('Iniciar sesión').click();
    });
    it(leadingZeroes(++i)+ " - Show Document Error Trail", function () {
        cy.wait(1000);
        cy.get('button').contains(' Audit Trail').click();
        cy.wait(1000);
        cy.get('#DETrailTab').click();
        cy.wait(1000);
        cy.get('h4').contains('Document Error Trail');
        cy.wait(2000);
    });
    it(leadingZeroes(++i)+ " - Show Error Code Trail", function () {
        cy.wait(1000);
        cy.get('button').contains(' Audit Trail').click();
        cy.wait(1000);
        cy.get('#ECTrailTab').click();
        cy.wait(1000);
        cy.get('h4').contains('Error Code Trail');
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + " - Show User Trail", function () {
        cy.wait(1000);
        cy.get('button').contains(' Audit Trail').click();
        cy.wait(1000);
        cy.get('#userTrailTab').click();
        cy.wait(1000);
        cy.get('h4').contains('User Trail');
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + " - Show History Trail", function () {
        cy.wait(1000);
        cy.get('button').contains(' Audit Trail').click();
        cy.wait(1000);
        cy.get('#historyTrailTab').click();
        cy.wait(1000);
        cy.get('h4').contains('History Trail');
        cy.wait(2000);
    });
});