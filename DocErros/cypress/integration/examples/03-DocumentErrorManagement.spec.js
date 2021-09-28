describe('Document Error Management', function () {
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
    it(leadingZeroes(++i) + ' - Log in (Good) User Allowed', function () {
        cy.visit('http://sjo-testapp1/docErrors/management.php', {});
        cy.wait(1000);
        cy.get('#email').type("wotracker", { delay: 100 });
        cy.get('#password').type("Microvention#44", { delay: 100 });
        cy.wait(1000);
        cy.get('button').contains('Iniciar sesión').click();
    });
    it(leadingZeroes(++i) + " - Show Document Error Management '", function () {
        cy.wait(1000);
        cy.get('button').contains(' Document Error').click();
        cy.wait(1000);
        cy.get('#deDesc').should('not.be.disabled');
        cy.get('#deDesc').should('have.value', '');
        cy.get('#deStatus').should('be.disabled');
        cy.get('#deStatus').should('contain', '');
        cy.get('#btnSaveDE').should('be.disabled');
        cy.get('#btnSaveDE').should('have.class', 'btn btn-outline-success');
        cy.get('#btnUpdtaDE').should('be.disabled');
        cy.get('#btnUpdtaDE').should('have.class', 'd-none');
        cy.get('#btnCancelDE').should('be.disabled');
        cy.get('#btnCancelDE').should('have.class', 'd-none');
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + ' - Choose an Existing Document Error', function () {
        cy.wait(2000);
        cy.get('TD').contains('Test out of specification').click();
        cy.get('#deDesc').should('not.be.disabled');
        cy.get('#deDesc').should('have.value', 'Test out of specification');
        cy.get('#deStatus').should('not.be.disabled');
        cy.get('#deStatus').should('contain', 'Active');
        cy.get('#btnSaveDE').should('be.disabled');
        cy.get('#btnSaveDE').should('have.class', 'd-none');
        cy.get('#btnUpdtaDE').should('not.be.disabled');
        cy.get('#btnUpdtaDE').should('have.class', 'btn btn-warning');
        cy.get('#btnCancelDE').should('not.be.disabled');
        cy.get('#btnCancelDE').should('have.class', 'btn btn-dark');
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + ' - Clear the Fields with Cancel Button', function () {
        cy.wait(2000);
        cy.get('#btnCancelDE').click();
        cy.get('#deDesc').should('not.be.disabled');
        cy.get('#deDesc').should('have.value', '');
        cy.get('#deStatus').should('be.disabled');
        cy.get('#deStatus').should('contain', '');
        cy.get('#btnSaveDE').should('be.disabled');
        cy.get('#btnSaveDE').should('have.class', 'btn btn-outline-success');
        cy.get('#btnUpdtaDE').should('be.disabled');
        cy.get('#btnUpdtaDE').should('have.class', 'd-none');
        cy.get('#btnCancelDE').should('be.disabled');
        cy.get('#btnCancelDE').should('have.class', 'd-none');
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + ' - Try to Insert an Existing Document Error', function () {
        cy.wait(2000);
        cy.get('#deDesc').type("Incorrect Date", { delay: 100 });
        cy.get('#deDesc').type('{enter}');
        cy.get('#deStatus').should('not.be.disabled');
        cy.get('#deStatus').select('Active');
        cy.get('#deStatus').should('contain', 'Active');
        cy.get('#btnSaveDE').should('not.be.disabled');
        cy.get('#btnSaveDE').should('have.class', 'btn btn-success');
        cy.get('#btnUpdtaDE').should('be.disabled');
        cy.get('#btnUpdtaDE').should('have.class', 'd-none');
        cy.get('#btnCancelDE').should('be.disabled');
        cy.get('#btnCancelDE').should('have.class', 'd-none');
        cy.wait(2000);
        cy.get('#btnSaveDE').click();
    });
    it(leadingZeroes(++i) + " - Display error message 'Error' 'This action cannot be performed'", function () {
        cy.get('#swal2-title').contains('Error');
        cy.get('#swal2-html-container').contains('This action cannot be performed');
        cy.wait(2000);
        cy.get('button').contains('OK').click();
    });
    it(leadingZeroes(++i) + ' - Insert a new Document Error', function () {
        cy.wait(2000);
        cy.get('#deDesc').clear();
        cy.get('#deDesc').type("Cypress Test", { delay: 100 });
        cy.get('#deDesc').type('{enter}');
        cy.get('#deStatus').should('not.be.disabled');
        cy.get('#deStatus').select('Active');
        cy.get('#deStatus').should('contain', 'Active');
        cy.get('#btnSaveDE').should('not.be.disabled');
        cy.get('#btnSaveDE').should('have.class', 'btn btn-success');
        cy.get('#btnUpdtaDE').should('be.disabled');
        cy.get('#btnUpdtaDE').should('have.class', 'd-none');
        cy.get('#btnCancelDE').should('be.disabled');
        cy.get('#btnCancelDE').should('have.class', 'd-none');
        cy.wait(2000);
        cy.get('#btnSaveDE').click();
    });
    it(leadingZeroes(++i) + " - Display success message 'Error criteria added successfully'", function () {
        cy.get('#swal2-title').contains('Error criteria added successfully');
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + ' - Choose an Existing Document Error to be Changed', function () {
        cy.wait(2000);
        cy.get('button').contains(' Document Error').click();
        cy.wait(1000);
        cy.get('input[type="search"]').type("Cypress Test", { delay: 100 });
        cy.get('TD').contains('Cypress Test').click();
        cy.get('#deDesc').should('not.be.disabled');
        cy.get('#deDesc').should('have.value', 'Cypress Test');
        cy.get('#deStatus').should('not.be.disabled');
        cy.get('#deStatus').should('contain', 'Active');
        cy.get('#btnSaveDE').should('be.disabled');
        cy.get('#btnSaveDE').should('have.class', 'd-none');
        cy.get('#btnUpdtaDE').should('not.be.disabled');
        cy.get('#btnUpdtaDE').should('have.class', 'btn btn-warning');
        cy.get('#btnCancelDE').should('not.be.disabled');
        cy.get('#btnCancelDE').should('have.class', 'btn btn-dark');
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + ' - Change the Name and Status a Document Error', function () {
        cy.wait(2000);
        cy.get('#deDesc').type(" Changed", { delay: 100 });
        cy.get('#deDesc').type('{enter}');
        cy.get('#deStatus').should('not.be.disabled');
        cy.get('#deStatus').select('Inactive');
        cy.get('#deStatus').should('contain', 'Inactive');
        cy.get('#btnSaveDE').should('be.disabled');
        cy.get('#btnSaveDE').should('have.class', 'd-none');
        cy.get('#btnUpdtaDE').should('not.be.disabled');
        cy.get('#btnUpdtaDE').should('have.class', 'btn btn-warning');
        cy.get('#btnCancelDE').should('not.be.disabled');
        cy.get('#btnCancelDE').should('have.class', 'btn btn-dark');
        cy.wait(2000);
        cy.get('#btnUpdtaDE').click();
    });
    it(leadingZeroes(++i) + " - Display success message 'Error criteria updated successfully'", function () {
        cy.get('#swal2-title').contains('Error criteria updated successfully');
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + ' - Verify the Document Error Was Changed', function () {
        cy.wait(2000);
        cy.get('button').contains(' Document Error').click();
        cy.wait(1000);
        cy.get('input[type="search"]').type("Cypress Test Changed", { delay: 100 });
        cy.get('TD').contains('Cypress Test Changed').click();
        cy.get('#deDesc').should('not.be.disabled');
        cy.get('#deDesc').should('have.value', 'Cypress Test Changed');
        cy.get('#deStatus').should('not.be.disabled');
        cy.get('#deStatus').should('contain', 'Inactive');
    });
});