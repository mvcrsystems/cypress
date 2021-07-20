describe('Delete a Red Tag', function () {
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
        cy.visit('http://sjo-testapp1/eredtag/index.php', {});
        cy.get('#loginModal').should('have.attr', 'aria-modal');
        cy.wait(1000);
        cy.get('#email').type("coatingtr", { delay: 100 });
        cy.wait(1000);
        cy.get('#password').type("Cuacoro#44", { delay: 100 });
        cy.wait(1000);
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
        cy.wait(1000);
        cy.get('#loginModal').should('have.attr', 'aria-hidden');
    });
    i++;
    it('0' + i + ' - Go to Management Section With Allowed User', function () {
        cy.get('a').contains('Management').click();
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Go to Remove Red Tag Section', function () {
        cy.get('a').contains('Remove Red Tag').click();
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Deleting a row data', function () {
        cy.get('td').contains('ED2038-130').click();
        cy.get('.swal-title').contains('Do you want to delete it?');
        cy.get('.swal-text').contains("¿Desea eliminar este registro?");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
    });
    i++;
    it('0' + i + " - Display success message 'Data deleted succesfully'", function () {
        cy.wait(1000);
        cy.get('.swal-title').contains('Data saved successfully');
        cy.get('.swal-text').contains("Dato guardado correctamente");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
    });
});