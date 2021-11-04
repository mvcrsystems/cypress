var i = 1;
var userNameCorrect = 'rojas6281';
var passwordCorrect = 'Yoda2395@*1';

it('0' + i + ' - Go to Receive Screen', function () {
  cy.visit('http://sjo-testapp1/platinum_control/login.php');
  cy.get('#user_name').type(userNameCorrect);
  cy.get('#user_password').type(passwordCorrect);
  cy.get('#btnLogin').click();
  cy.get('#swal2-title').contains('Bienvenido');
  cy.get('#swal2-content').contains('Rojas Maria Andrea');
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
  cy.get('a').contains('Recibo de Materiales').click();
});
i++;

it('0' + i + ' - Select user name', function () {
  cy.get('#user').select('Rojas Maria Andrea - 6281');
});
i++;

it('0' + i + ' - Type good units', function () {
  cy.get('#qty_units_good210902OKRQ').type(2, { delay: 200 });
  cy.get('#qty_units_good210902OKRQ').type('{enter}');
});
i++;

it('0' + i + ' - Type pending units', function () {
  cy.get('#pending_units210902OKRQ').type(0, { delay: 200 });
  cy.get('#pending_units210902OKRQ').type('{enter}');
});
i++;

it('0' + i + ' - Type rejected units', function () {
  cy.get('#rejected_units210902OKRQ').type(0, { delay: 200 });
  cy.get('#rejected_units210902OKRQ').type('{enter}');
});
i++;

it('0' + i + ' - Type scrap', function () {
  cy.get('#rejected_knot_gm210902OKRQ').type('0.15', { delay: 200 });
  cy.get('#rejected_knot_gm210902OKRQ').type('{enter}');
});
i++;

it('0' + i + ' - Click on Save button', function () {
  cy.get('#saveRec210902OKRQ').click();
  cy.wait(1000);
});
i++;

it(i + ' - Type id number', function () {
  cy.get('#id_Receive').type('6281', { delay: 200 });
  cy.get('#password_Receive').should('be.disabled');
  cy.get('#id_Receive').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Type password', function () {
  cy.get('#password_Receive').type(passwordCorrect, { delay: 200 });
  cy.get('#btnAccept').should('be.disabled');
  cy.get('#password_Receive').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Click on accept button', function () {
  cy.get('#btnAccept').click();
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Data saved successfully!'", function () {
  cy.get('#swal2-title').contains('Dato guardado correctamente');
  cy.get('#swal2-content').should('contain', "Data saved successfully!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
