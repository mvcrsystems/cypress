describe('User Management', function () {
    var i = 1;
    it('0' + i + ' - Go to eRed Tag App', function () {
        cy.visit('http://sjo-testapp1/eredtag/index.php', {});
        cy.get('#loginModal').should('have.attr', 'aria-modal');
    });
    i++;
    it('0' + i + ' - Log in (Wrong)', function () {
        cy.wait(2000);
        cy.get('#email').type("wrong", { delay: 100 });
        cy.wait(2000);
        cy.get('#password').type("wrong", { delay: 100 });
        cy.wait(2000);
        cy.get('button').contains(' Iniciar sesión').click();
        cy.wait(2000);
        cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        cy.get('#password').clear();
    });
    i++;
    it('0' + i + ' - Log in (Good)', function () {
        cy.visit('http://sjo-testapp1/eredtag/index.php', {});
        cy.wait(2000);
        cy.get('#loginModal').should('have.attr', 'aria-modal');
        cy.wait(2000);
        cy.get('#email').type("coatingtr", { delay: 100 });
        cy.wait(2000);
        cy.get('#password').type("Cuacoro#44", { delay: 100 });
        cy.wait(2000);
        cy.get('button').contains(' Iniciar sesión').click();
        cy.wait(2000);
        cy.get('#area').should('not.be.disabled');
        cy.get('#areaFuncional').should('be.disabled');
        cy.get('#equipo').should('be.disabled');
        cy.get('#descEquipo').should('be.disabled');
        cy.get('#fallaGeneral').should('be.disabled');
        cy.get('#supervisor').should('be.disabled');
        cy.get('#lider').should('not.be.disabled');
        cy.get('#calibracion').should('be.disabled');
        cy.get('#mantenimiento').should('be.disabled');
        cy.get('#lot').should('not.be.disabled');
        cy.get('#pdnumber').should('be.disabled');
        cy.wait(2000);
        cy.get('#loginModal').should('have.attr', 'aria-hidden');
    });
    i++;
    it('0' + i + ' - Go to Management Section With Allowed User', function () {
        cy.get('a').contains('Management').click();
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Go to Users Section', function () {
        cy.get('a').contains('Users').click();
        cy.wait(1000);
        cy.get('#email').should('not.be.disabled');
        cy.get('#role').should('be.disabled');
        cy.get('#btnSave').should('be.disabled');
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Insert a New User', function () {
        cy.get('#email').type("fabian.espinoza@microvention.com", { delay: 100 });
        cy.wait(1000);
        cy.get('#email').type('{enter}');
        cy.wait(2000);
    });
    it('0' + i + " - Click on Save Button'", function () {
        cy.get('#btnSave').should('not.be.disabled');
        cy.get('#btnSave').click();
        cy.wait(2000);
    });
    i++;
    it('0' + i + " - Display success message 'Data saved successfully!'", function () {
        cy.get('#swal2-title').contains('Data saved successfully!');
        cy.wait(2000);
        cy.get('button').contains('OK').click();
    });
    i++;
    it('0' + i + ' - Deleting a User', function () {
        cy.get('td').contains('fabian.espinoza@microvention.com').click();
        cy.wait(1000);
        cy.get('#btnRemove').click();
        cy.get('#swal2-title').contains('Are you sure?');
        cy.get('#swal2-content').contains("You won't be able to revert this!");
        cy.wait(2000);
        cy.get('button').contains('Yes').click();
    });
    i++;
    it('0' + i + " - Display success message 'Data deleted successfully'", function () {
        cy.wait(1000);
        cy.get('#swal2-title').contains('Data deleted successfully!');
        cy.wait(2000);
        cy.get('button').contains('OK').click();
    });
});