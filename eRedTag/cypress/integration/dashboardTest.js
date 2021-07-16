describe('Dashboards', function () {
  var i = 1;
  it('0' + i + ' - Go to eRed Tag App', function () {
    cy.visit('http://sjo-testapp1/eredtag/index.php', {});
    cy.get('#loginModal').should('have.attr', 'aria-modal');
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Log in (Wrong)', function () {
    cy.get('#email').type("wrong", { delay: 200 });
    cy.get('#password').type("wrong", { delay: 200 });
    cy.get('button').contains(' Iniciar sesión').click();
    cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
    cy.get('#password').clear();
    cy.wait(2000);
  });
  i++;
  it('0' + i + ' - Log in (Good)', function () {
    cy.get('#email').clear();
    cy.get('#email').type("wotracker", { delay: 200 });
    cy.get('#password').type("Microvention#44", { delay: 200 });
    cy.get('button').contains(' Iniciar sesión').click();
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
  it('0' + i + ' - Go to Dashboard Section', function () {
    cy.get('a').contains('Dashboard').click();
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Show Dashboards', function () {
    cy.get('#summaryCarousel').should('have.class', 'carousel slide pointer-event');
    cy.request({
      method: 'POST',
      url: `eredtag/php/dashboard/summary.php`
    }).its('body').should('not.be.empty');
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Show Open Red Tags', function () {
    cy.get('#status').get('div').should('have.class', 'card text-white bg-danger mb-3');
    cy.request({
      method: 'POST',
      url: `eredtag/php/dashboard/status.php`
    }).its('body').should('not.be.empty');
    cy.wait(1000);
  });

});
