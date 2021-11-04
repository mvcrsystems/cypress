var i = 1;
var userNameCorrect = 'rojas6281';
var passwordCorrect = 'Yoda2395@*1';

it('0' + i + ' - Go to Delivery Screen', function () {
  cy.visit('http://sjo-testapp1/platinum_control/login.php');
  cy.get('#user_name').type(userNameCorrect);
  cy.get('#user_password').type(passwordCorrect);
  cy.get('#btnLogin').click();
  cy.get('#swal2-title').contains('Bienvenido');
  cy.get('#swal2-content').contains('Rojas Maria Andrea');
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
  cy.get('a').contains('Entregas Controladas').click();
});
i++;

it('0' + i + ' - Select model number', function () {
  cy.get('#model_number').select('45-751019 (1)');
});
i++;

it('0' + i + ' - Select the package number ', function () {
  cy.get('#kit').select('Paquete # 210902OKRQ (2)');
});
i++;

it('0' + i + ' - Scan work orders', function () {
  cy.get('#wo_1').type('103529410145632', { delay: 200 });
  cy.get('#wo_1').type('{enter}');
  cy.get('#wo_2').type('103529410145633', { delay: 200 });
  cy.get('#wo_2').type('{enter}');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Click on Save button', function () {
  cy.get('#saveDel').click();
  cy.wait(1000);
});
i++;

it(i + ' - Type id number', function () {
  cy.get('#id_Delivery').type('6281', { delay: 200 });
  cy.get('#password_Delivery').should('be.disabled');
  cy.get('#id_Delivery').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Type password', function () {
  cy.get('#password_Delivery').type(passwordCorrect, { delay: 200 });
  cy.get('#btnAccept').should('be.disabled');
  cy.get('#password_Delivery').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Click on accept button', function () {
  cy.get('#btnAccept').click();
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Delivered Material'", function () {
  cy.get('#swal2-title').contains('Material Entregado');
  cy.get('#swal2-content').should('contain', "Delivered Material");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
