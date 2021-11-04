var i = 1;
var userNameCorrect = 'rojas6281';
var passwordCorrect = 'Yoda2395@*1';
var lotNumber = '01234590';

it('0' + i + ' - Go to Raw Material Screen', function () {
  cy.visit('http://sjo-testapp1/platinum_control/login.php');
  cy.get('#user_name').type(userNameCorrect);
  cy.get('#user_password').type(passwordCorrect);
  cy.get('#btnLogin').click();
  cy.get('#swal2-title').contains('Bienvenido');
  cy.get('#swal2-content').contains('Rojas Maria Andrea');
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
  cy.get('a').contains('Ingreso Materia prima').click();
});
i++;

it('0' + i + ' - Type lot number', function () {
  cy.get('#lot_number').type(lotNumber, { delay: 200 });
  cy.get('#due_date').should('be.disabled');
  cy.get('#pd_number').should('be.disabled');
  cy.get('#qty').should('be.disabled');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Press enter', function () {
  cy.get('#lot_number').type('{enter}');
  cy.get('#due_date').should('be.enabled');
  cy.get('#pd_number').should('be.disabled');
  cy.get('#qty').should('be.disabled');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Select wrong expiration date', function () {
  cy.get('#due_date').type('{enter}');
  cy.wait(1000);
  cy.get('#lot_number').should('be.enabled');
  cy.get('#pd_number').should('be.disabled');
  cy.get('#qty').should('be.disabled');
});
i++;

it('0' + i + " - Display error message 'Invalid expiration date'", function () {
  cy.get('#date_dueCheck').should('have.class', 'form-group has-error has-feedback');
  cy.get('#msgError').should('have.class', 'help-block');
  cy.get('#msgError').contains('Seleccione una fecha de expiración válida');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Select valid expiration date', function () {
  cy.get('#due_date').clear();
  cy.get('#due_date').type('2022-03-12', { delay: 200 });
  cy.get('#due_date').type('{enter}');
  cy.get('#lot_number').should('be.enabled');
  cy.get('#pd_number').should('be.enabled');
  cy.get('#qty').should('be.disabled');
  cy.wait(1000);
});
i++;

it('0' + i + " - Display success message 'Valid expiration date'", function () {
  cy.get('#date_dueCheck').should('have.class', 'form-group has-success has-feedback');
  cy.get('#msgError').should('have.class', 'help-block');
  cy.get('#msgError').contains('Fecha de expiración válida');
  cy.get('#lot_number').should('be.enabled');
  cy.get('#due_date').should('be.enabled');
  cy.get('#pd_number').should('be.enabled');
  cy.get('#qty').should('be.disabled');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Type non-existent PD Number', function () {
  cy.get('#pd_number').type('PD045584', { delay: 200 });
  cy.get('#pd_number').type('{enter}');
  cy.get('#lot_number').should('be.enabled');
  cy.get('#due_date').should('be.enabled');
  cy.get('#pd_number').should('be.enabled');
  cy.get('#qty').should('be.disabled');
  cy.wait(1000);
});
i++;

it('0' + i + " - Display error message 'Non-existent PD number'", function () {
  cy.get('#pdCheck').should('have.class', 'form-group has-error has-feedback');
  cy.get('#msgErrorPD').should('have.class', 'help-block');
  cy.get('#msgErrorPD').contains('Número de PD inexistente');
  cy.get('#lot_number').should('be.enabled');
  cy.get('#due_date').should('be.enabled');
  cy.get('#pd_number').should('be.enabled');
  cy.get('#qty').should('be.disabled');
  cy.wait(1000);
});
i++;

it(i + ' - Type existent PD Number', function () {
  cy.get('#pd_number').clear();
  cy.get('#pd_number').type('PD00510-14', { delay: 200 });
  cy.get('#pd_number').type('{enter}');
  cy.get('#lot_number').should('be.enabled');
  cy.get('#due_date').should('be.enabled');
  cy.get('#date_dueCheck').should('have.class', 'form-group has-success has-feedback');
  cy.get('#pd_number').should('be.enabled');
  cy.get('#pdCheck').should('have.class', 'form-group has-success has-feedback');
  cy.get('#qty').should('be.enabled');
  cy.wait(1000);
});
i++;

it(i + ' - Type quantity', function () {
  cy.get('#qty').type('5', { delay: 200 });
  cy.get('#qty').type('{enter}');
  cy.get('#lot_number').should('be.enabled');
  cy.get('#due_date').should('be.enabled');
  cy.get('#date_dueCheck').should('have.class', 'form-group has-success has-feedback');
  cy.get('#pd_number').should('be.enabled');
  cy.get('#pdCheck').should('have.class', 'form-group has-success has-feedback');
  cy.get('#qty').should('be.enabled');
  cy.wait(1000);
});
i++;

it(i + ' - Display info to save raw material', function () {
  cy.get('#rack').should('have.value', 2);
  cy.get('#tray').should('have.value', 12);
  cy.get('#ubication').should('have.value', 'B');
  cy.wait(1000);
});
i++;

it(i + ' - Click on Save button', function () {
  cy.get('#btnSave').click();
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Raw Material Entered'", function () {
  cy.get('#swal2-title').contains('Materia Prima Ingresada');
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Click on delete button', function () {
  cy.get('#btnDelete130').click();
  cy.wait(1000);
});
i++;

it(i + " - Display warning message (Are you sure you want to remove this material?)", function () {
  cy.get('#swal2-title').should('contain', "¿Está seguro de eliminar este material?");
  cy.get('#swal2-content').should('contain', "Are you sure you want to remove this material?");
  cy.get('.swal2-confirm').should('contain', 'Si');
  cy.get('.swal2-cancel').should('contain', 'No');
  cy.wait(1000);
});
i++;

it(i + " - Click on Yes button", function () {
  cy.get('.swal2-confirm').click();
  cy.wait(2000);
});
i++;

it(i + ' - Type id number', function () {
  cy.get('#id').type('6281', { delay: 200 });
  cy.get('#password').should('be.disabled');
  cy.get('#id').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Type password', function () {
  cy.get('#password').type(passwordCorrect, { delay: 200 });
  cy.get('#btnAccept').should('be.disabled');
  cy.get('#password').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Click on accept button', function () {
  cy.get('#btnAccept').click();
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Material removed successfully'", function () {
  cy.get('#swal2-title').contains('Material eliminado correctamente');
  cy.get('#swal2-content').should('contain', "Material removed successfully");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});