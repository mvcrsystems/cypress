var i = 1;
var userNameCorrect = 'rojas6281';
var passwordCorrect = 'Yoda2395@*1';

it('0' + i + ' - Go to Preparation Screen', function () {
  cy.visit('http://sjo-testapp1/platinum_control/login.php');
  cy.get('#user_name').type(userNameCorrect);
  cy.get('#user_password').type(passwordCorrect);
  cy.get('#btnLogin').click();
  cy.get('#swal2-title').contains('Bienvenido');
  cy.get('#swal2-content').contains('Rojas Maria Andrea');
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
  cy.get('a').contains('Preparación de paquetes').click();
});
i++;

it('0' + i + ' - Type model number', function () {

  cy.get('#modelNumber').type('45-751019', { delay: 200 });
  cy.get('#qty').should('be.disabled');
  cy.get('#modelNumber').type('{enter}');

});
i++;

it('0' + i + ' - Type quantity', function () {
  cy.get('#qty').type('2', { delay: 200 });
  cy.get('#qty').type('{enter}');
  cy.wait(1000);
});
i++;

it('0' + i + ' - See the location of raw material', function () {
  cy.get('#btnLocation').click();
  cy.wait(1000);
  cy.get('#btnClose').click();
});
i++;

it('0' + i + ' - Click on Save button', function () {
  cy.get('#btnSave').click();
  cy.wait(1000);
});
i++;

it('0' + i + ' - Type IP Address', function () {
  cy.get('#ipAddress').type('10.0.120.229', { delay: 200 });
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it('0' + i + " - Display message (Did you have any leftover material?)", function () {
  cy.get('#swal2-title').should('contain', "¿Sobró Material?");
  cy.get('.swal2-confirm').should('contain', 'Si');
  cy.get('.swal2-cancel').should('contain', 'No');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Click on Yes button', function () {
  cy.get('button').contains('Si').click();
  cy.wait(1000);
});
i++;

it('0' + i + ' - Type remaining quantity', function () {
  cy.get('#remaining_qty').type('53.6', { delay: 200 });
  cy.get('#btnSaveRem').click();
  cy.wait(1200);
});
i++;

it(i + ' - Click on Accept button', function () {
  cy.get('#btnAccept').click();
  cy.wait(1000);
});
i++;

it(i + " - Display success message (Remaining saved)", function () {
  cy.get('#swal2-title').should('contain', "Remanente guardado");
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;
