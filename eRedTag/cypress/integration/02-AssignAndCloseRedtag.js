describe('Assign a Technician and Close a Red Tag', function () {
    var i = 1;
    it('0' + i + ' - Go to eRed Tag App', function () {
        cy.visit('http://sjo-testapp1/eredtag/index.php', {});
        cy.get('#loginModal').should('have.attr', 'aria-modal');
    });
    i++;
    it('0' + i + ' - Log in (Wrong)', function () {
        cy.wait(1000);
        cy.get('#email').type("wrong", { delay: 100 });
        cy.wait(1000);
        cy.get('#password').type("wrong", { delay: 100 });
        cy.wait(1000);
        cy.get('button').contains(' Iniciar sesión').click();
        cy.wait(1000);
        cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        cy.get('#password').clear();
    });
    i++;
    it('0' + i + ' - Log in (Good)', function () {
        cy.get('#email').clear();
        cy.wait(1000);
        cy.get('#email').type("wotracker", { delay: 100 });
        cy.wait(1000);
        cy.get('#password').type("Microvention#44", { delay: 100 });
        cy.wait(1000);
        cy.get('button').contains(' Iniciar sesión').click();
        cy.wait(1000);
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
        cy.wait(3000);
        cy.get('#loginModal').should('have.attr', 'aria-hidden');
    });
    i++;
    it('0' + i + ' - Assign a Technician', function () {
        cy.get('td').contains('ED2038-133').click();
        cy.wait(1000);
        cy.get('#redTagModal').should('have.attr', 'aria-modal');
        cy.wait(1000);
        cy.get('#tecnico').select('Espinoza Fabian');
        cy.get('#assign').click();
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Show a Success Assign Technician Message', function () {
        cy.get('#alertMessage').should('have.class', 'alert alert-success');
        cy.get('#alertText').contains('Technician assigned');
        cy.wait(5000);
    });
    i++;
    it('0' + i + ' - Add a Comment', function () {
        cy.get('#comment').type("Test Comment", { delay: 100 });
        cy.get('#detalle').select('TEST');
        cy.get('#comBut').click();
        cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Show a Success Comment Message', function () {
        cy.get('#alertMessage').should('have.class', 'alert alert-success');
        cy.get('#alertText').contains('Comment added');
        cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Close Red Tag', function () {
        cy.get('#comment').type("Red Tag Closed", { delay: 100 });
        cy.get('#detalle').select('TEST');
        cy.get('#closeBut').click();
        cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Show a Success Comment Message', function () {
        cy.get('#alertMessage').should('have.class', 'alert alert-success');
        cy.get('#alertText').contains('Red Tag Closed');
        cy.wait(2000);
    });
});