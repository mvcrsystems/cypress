describe('OEE', function () {
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
    cy.get('#email').type("coatingtr", { delay: 200 });
    cy.get('#password').type("Cuacoro#44", { delay: 200 });
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
  it('0' + i + ' - Go to OEE Section', function () {
    cy.get('a').contains('OEE').click();
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Select date inputs', function () {
    cy.get('#sDate').type('2021-05-06', { delay: 200 });
    cy.get('#eDate').type('2021-06-15', { delay: 200 });
    cy.get('#sDate').should('have.value', '2021-05-06');
    cy.get('#eDate').should('have.value', '2021-06-15');
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Type equipment', function () {
    cy.get('#ed').type('ED2274-002', { delay: 200 });
    cy.get('#ed').should('have.value', 'ED2274-002');
    cy.wait(1000);
  });
  i++;
  it('0' + i + " - Select shift", function () {
    cy.get('#shift').select('A');
    cy.get('#shift').should('have.value', 'A');
    cy.wait(1000);
  });
  i++;
  it('0' + i + " - Click search button to search data", function () {
    cy.get('#sDate').should('have.value', '2021-05-06');
    cy.get('#eDate').should('have.value', '2021-06-15');
    cy.get('#shift').should('have.value', 'A');
    cy.get('#ed').should('have.value', 'ED2274-002');
    cy.get('#btnSearch').click();
  });
  i++;
  it('0' + i + ' - Show Overall Equipment Effectiveness for ED2274-002', function () {
    cy.wait(2000);
    cy.get('#oee').should('contain', 'Overall Equipment Effectiveness for ED2274-002');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_oee.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Table OEE', function () {
    cy.wait(1000);
    cy.get('#oeeData').should('contain', 'OEE for ED2274-002');
    cy.get('#oeeDataTable').should('be.visible');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_oee.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Table Results', function () {
    cy.wait(1000);
    cy.get('#overallTable').should('be.visible');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/search_ed.php`
    }).its('body').should('not.be.empty');
  });
})