describe('Responsible By Area', function () {
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
    it('0' + i + ' - Go to Management Section', function () {
        cy.get('a').contains('Management').click();
        cy.wait(2000);
        cy.get('#area').should('not.be.disabled');
        cy.get('#role').should('be.disabled');
        cy.get('#shift').should('be.disabled');
        cy.get('#phase').should('be.disabled');
        cy.get('#funcArea').should('be.disabled');
        cy.get('#resp').should('be.disabled');
        cy.get('#name').should('have.attr', 'readonly');
        cy.get('#btnSave').should('be.disabled');
    });
    i++;
    it('0' + i + ' - Select an Area', function () {
        cy.get('#area').select('Boxing');
        cy.wait(2000);
        cy.get('#role').should('not.be.disabled');
        cy.get('#shift').should('be.disabled');
        cy.get('#phase').should('be.disabled');
        cy.get('#funcArea').should('be.disabled');
        cy.get('#resp').should('be.disabled');
        cy.get('#name').should('have.attr', 'readonly');
        cy.get('#btnSave').should('be.disabled');
    });
    i++;
    it('0' + i + ' - Select a Role', function () {
        cy.get('#role').select('TECHNICIAN');
        cy.wait(2000);
        cy.get('#shift').should('not.be.disabled');
        cy.get('#phase').should('be.disabled');
        cy.get('#funcArea').should('be.disabled');
        cy.get('#resp').should('be.disabled');
        cy.get('#name').should('have.attr', 'readonly');
        cy.get('#btnSave').should('be.disabled');
    });
    i++;
    it('0' + i + ' - Select a Shift', function () {
        cy.get('#shift').select('B');
        cy.wait(2000);
        cy.get('#phase').should('not.be.disabled');
        cy.get('#funcArea').should('be.disabled');
        cy.get('#resp').should('be.disabled');
        cy.get('#name').should('have.attr', 'readonly');
        cy.get('#btnSave').should('be.disabled');
    });
    i++;
    it('0' + i + ' - Select an Area Site', function () {
        cy.get('#phase').select('CER 1');
        cy.wait(2000);
        cy.get('#funcArea').should('not.be.disabled');
        cy.get('#resp').should('be.disabled');
        cy.get('#name').should('have.attr', 'readonly');
        cy.get('#btnSave').should('be.disabled');
    });
    i++;
    it('0' + i + ' - Select a Functional Area', function () {
        cy.get('#funcArea').select('TESTING');
        cy.wait(2000);
        cy.get('#resp').should('not.be.disabled');
        cy.get('#name').should('have.attr', 'readonly');
        cy.get('#btnSave').should('be.disabled');
    });
    i++;
    it(i + ' - User Look-Up by name', function () {
        cy.get('#resp').type("Rodolfo", { delay: 100 });
        cy.wait(1000);
        cy.get('#btnSearch').click();
        cy.wait(1000);
        cy.get('#searchResp').select('Vargas Viquez Rodolfo');
        cy.get('#name').should('have.value', 'Vargas Viquez Rodolfo');
        cy.wait(1000);
    });
    i++;
    it(i + " - Click on Save Button'", function () {
        cy.get('#btnSave').should('not.be.disabled');
        cy.get('#btnSave').click();
        cy.wait(2000);
    });
    i++;
    it(i + " - Display success message 'Data saved successfully!'", function () {
        cy.get('#swal2-title').contains('Data saved successfully!');
        cy.wait(2000);
        cy.get('button').contains('OK').click();
    });
    i++;
    it(i + ' - Deleting a row data', function () {
        cy.get('td').contains('Vargas Viquez Rodolfo').click();
        cy.wait(1000);
        cy.get('#btnRemove').click();
        cy.get('#swal2-title').contains('Are you sure?');
        cy.get('#swal2-content').contains("You won't be able to revert this!");
        cy.wait(2000);
        cy.get('button').contains('Yes').click();
    });
    i++;
    it(i + " - Display success message 'Data deleted successfully'", function () {
        cy.wait(1000);
        cy.get('#swal2-title').contains('Data deleted successfully!');
        cy.wait(2000);
        cy.get('button').contains('OK').click();
    });
});