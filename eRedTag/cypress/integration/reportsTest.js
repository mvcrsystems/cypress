describe('Reports', function () {
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
    cy.get('#loginModal').should('have.attr', 'aria-hidden');
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Go to Reports Section', function () {
    cy.get('a').contains('Reports').click();
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Select date inputs', function () {
    cy.get('#sDate').type('2021-01-06', { delay: 200 });
    cy.get('#eDate').type('2021-06-10', { delay: 200 });
    cy.get('#sDate').should('have.value', '2021-01-06');
    cy.get('#eDate').should('have.value', '2021-06-10');
    cy.wait(1000);
  });
  i++;
  it('0' + i + ' - Select area', function () {
    cy.get('#area').select('Boxing');
    cy.get('#area').should('have.value', 'Boxing');
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
    cy.get('#sDate').should('have.value', '2021-01-06');
    cy.get('#eDate').should('have.value', '2021-06-10');
    cy.get('#shift').should('have.value', 'A');
    cy.get('#area').should('have.value', 'Boxing');
    cy.get('#btnSearch').click();
  });
  i++;
  it('0' + i + ' - Show Reports per Area', function () {
    cy.wait(2000);
    cy.get('#areaPie').should('contain', 'Reports per Area (Shift: A)');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_area_report.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Reports per Equipment', function () {
    cy.wait(1000);
    cy.get('#equipmentChart').should('contain', 'Reports per Equipment (Shift: A | Area: Boxing)');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_equipment_report.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Table Reports per Area', function () {
    cy.wait(1000);
    cy.get('#btnFirstData').click();
    cy.get('#areaPieData').should('contain', 'Reports per Area (Shift: A)');
    cy.get('#areaPieDataTable').should('be.visible');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_area_report.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Table Reports per Equipment', function () {
    cy.wait(1000);
    cy.get('#equipmentChartData').should('contain', 'Reports per Equipment (Shift: A | Area: Boxing)');
    cy.get('#equipmentChartDataTable').should('be.visible');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_equipment_report.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Reports by failure mode', function () {
    cy.wait(1000);
    cy.get('#paretoFailure').get('div').should('contain', 'Reports by failure mode (Shift: A | Area: Boxing)');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_pareto_failure.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Table Reports by failure mode', function () {
    cy.wait(1000);
    cy.get('#btnSecondData').click();
    cy.get('#paretoFailureData').should('contain', 'Reports by failure mode (Shift: A | Area: Boxing)');
    cy.get('#paretoFailureDataTable').should('be.visible');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_pareto_failure.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Equipment by down time', function () {
    cy.wait(1000);
    cy.get('#paretoDown').get('div').should('contain', 'Equipment by down time (Shift: A | Area: Boxing)');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_pareto_down.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Table Equipment by down time', function () {
    cy.wait(1000);
    cy.get('#paretoDownData').should('contain', 'Equipment by down time (Shift: A | Area: Boxing)');
    cy.get('#paretoDownDataTable').should('be.visible');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/get_pareto_down.php`
    }).its('body').should('not.be.empty');
  });
  i++;
  it(i + ' - Show Overall table', function () {
    cy.wait(1000);
    cy.get('#overall').should('contain', 'Results from 2021-01-06 to 2021-06-10 - Boxing - Shift: A');
    cy.get('#overallTable').should('be.visible');
    cy.request({
      method: 'POST',
      url: `eredtag/php/queries/search_overall.php`
    }).its('body').should('not.be.empty');
  });
  it("Choose the row to Reports per Equipment table to see more charts", function () {
    cy.get('tr').contains('ED2011-051 (Zebra 170Xi4 Label System - Boxing)').click();
    cy.wait(1000);
  });
});
