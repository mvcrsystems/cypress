var i = 1;
var userNameWrong = 'rojas62812';
var userNameCorrect = 'rojas6281';
var passwordWrong = '5434tHR4';
var passwordCorrect = 'Yoda2395@*1';

it('0' + i + ' - Go to Platinum Control Software', function () {
  cy.visit('http://sjo-testapp1/platinum_control/login.php');
});
i++;

it('0' + i + ' - Type a wrong user name', function () {
  cy.get('#user_name').type(userNameWrong, { delay: 200 });
  cy.wait(1000);
});
i++;

it('0' + i + ' - Type a correct password', function () {
  cy.get('#user_password').type(passwordCorrect, { delay: 200 });
  cy.wait(1000);
});
i++;

it('0' + i + ' - Click on Login button', function () {
  cy.get('#btnLogin').click();
  cy.wait(1000);
});
i++;

it('0' + i + " - Display error message 'Username or password incorrect'", function () {
  cy.get('#userNameError').should('have.class', 'form-group has-error has-feedback');
  cy.get('#userPasswordError').should('have.class', 'form-group has-error has-feedback');
  cy.get('#blockMsgError').should('have.class', 'form-group has-error has-feedback');
  cy.get('#msgErrorLogin').should('have.class', 'help-block');
  cy.get('#msgErrorLogin').contains('Nombre de usuario o contraseña incorrectos. Escriba el nombre de usuario y la contraseña correctos y vuelva a intentarlo.');
  cy.wait(2000);
});
i++;

it('0' + i + ' - Clear user and password inputs', function () {
  cy.get('#user_name').clear();
  cy.get('#user_password').clear();
  cy.wait(1000);
});
i++;

it('0' + i + ' - Type a correct user name', function () {
  cy.get('#user_name').type(userNameCorrect, { delay: 200 });
  cy.wait(1000);
});
i++;

it('0' + i + ' - Type a wrong password', function () {
  cy.get('#user_password').type(passwordWrong, { delay: 200 });
  cy.wait(1000);
});
i++;

it('0' + i + ' - Click on Login button', function () {
  cy.get('#btnLogin').click();
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Username or password incorrect'", function () {
  cy.get('#userNameError').should('have.class', 'form-group has-error has-feedback');
  cy.get('#userPasswordError').should('have.class', 'form-group has-error has-feedback');
  cy.get('#blockMsgError').should('have.class', 'form-group has-error has-feedback');
  cy.get('#msgErrorLogin').should('have.class', 'help-block');
  cy.get('#msgErrorLogin').contains('Nombre de usuario o contraseña incorrectos. Escriba el nombre de usuario y la contraseña correctos y vuelva a intentarlo.');
  cy.wait(2000);
});
i++;

it(i + ' - Clear user and password inputs', function () {
  cy.get('#user_name').clear();
  cy.get('#user_password').clear();
  cy.wait(1000);
});
i++;

it(i + ' - Type a correct user name', function () {
  cy.get('#user_name').type(userNameCorrect, { delay: 200 });
  cy.wait(1000);
});
i++;

it(i + ' - Type a correct password', function () {
  cy.get('#user_password').type(passwordCorrect, { delay: 200 });
  cy.wait(1000);
});
i++;

it(i + ' - Click on Login button', function () {
  cy.get('#btnLogin').click();
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Welcome'", function () {
  cy.get('#swal2-title').contains('Bienvenido');
  cy.get('#swal2-content').contains('Rojas Maria Andrea');
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});