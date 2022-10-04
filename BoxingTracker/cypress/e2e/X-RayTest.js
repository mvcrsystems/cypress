var i = 1;
var username = 'us\\wotracker';
var password = 'Microvention#44';
it('0' + i + ' - User without access to the system logs in', function () {
  cy.visit('http://sjo-testapp1/sap_boxing/index.php', {
    auth: {
      username: username,
      password: password
    }
  });
  cy.wait(1000);
  cy.get('#email').type('coatingtr', { delay: 500 });
  cy.get('#password').type('Cuacoro#44', { delay: 200 });
  cy.get('#btnLogin').click();
  cy.wait(7000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it('0' + i + ' - User with access to the system logs in', function () {
  cy.get('#clerk').click();
  cy.get('a').contains(' Logout').click();
  cy.wait(5000);
  cy.visit('http://sjo-testapp1/sap_boxing/index.php', {
    auth: {
      username: username,
      password: password
    }
  });
  cy.wait(1000);
  cy.get('#email').type('wotracker', { delay: 500 });
  cy.get('#password').type(password, { delay: 200 });
  cy.get('#btnLogin').click();
  cy.wait(6000);
});
i++;

it('0' + i + ' - Select X-Ray Station', function () {
  cy.get('#station').select('X-Ray');
});
i++;

it('0' + i + " - Enable scrap checkbox", function () {
  cy.get('#scrapCheck').check();
  cy.wait(1000);
});
i++;

it('0' + i + ' - Scan an order already entered in the scrap section', function () {
  cy.get('#scrap').type('1180505_10515521', { delay: 200 });
  cy.get('#scrap').should('be.enabled');
  cy.get('#scrap').type('{enter}');
  cy.wait(1000);
});
i++;

it('0' + i + " - Display warning message 'Send order to scrap?'", function () {
  cy.get('#swal2-title').contains('Send order to scrap?');
  cy.get('#swal2-html-container').should('contain', "Enviar orden a scrap?");
  cy.get('button').should('contain', "Yes");
  cy.get('button').should('contain', "Cancel");
  cy.wait(1000);
  cy.get('button').contains('Yes').click();
  cy.wait(1000);
});
i++;

it('0' + i + " - Display error message 'Order number already entered!'", function () {
  cy.get('#swal2-title').contains('Order number already entered!');
  cy.get('#swal2-html-container').should('contain', "Número de orden ya fue ingresada");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it('0' + i + ' - Scan an order already scanned as good in the scrap section', function () {
  cy.get('#scrap').clear();
  cy.get('#scrap').type('1129589_10366832', { delay: 200 });
  cy.get('#scrap').should('be.enabled');
  cy.get('#scrap').type('{enter}');
  cy.wait(1000);
});
i++;

it('0' + i + " - Display warning message 'Send order to scrap?'", function () {
  cy.get('#swal2-title').contains('Send order to scrap?');
  cy.get('#swal2-html-container').should('contain', "Enviar orden a scrap?");
  cy.get('button').should('contain', "Yes");
  cy.get('button').should('contain', "Cancel");
  cy.wait(1000);
  cy.get('button').contains('Yes').click();
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Order number already scanned as good!'", function () {
  cy.get('#swal2-title').contains('Order number already scanned as good!');
  cy.get('#swal2-html-container').should('contain', "Número de orden ya escaneada como buena");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan order in scrap', function () {
  cy.get('#scrap').clear();
  cy.get('#scrap').type('1180514_10515530', { delay: 200 });
  cy.get('#scrap').should('be.enabled');
  cy.get('#scrap').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display warning message 'Send order to scrap?'", function () {
  cy.get('#swal2-title').contains('Send order to scrap?');
  cy.get('#swal2-html-container').should('contain', "Enviar orden a scrap?");
  cy.get('button').should('contain', "Yes");
  cy.get('button').should('contain', "Cancel");
  cy.wait(1000);
  cy.get('button').contains('Yes').click();
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Record saved!'", function () {
  cy.get('#swal2-title').contains('Record saved!');
  cy.get('#swal2-html-container').should('contain', "Registro guardado!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.get('#station').should('contain', "X-Ray");
  cy.wait(1000);
});
i++;

it(i + ' - Scan wrong production order', function () {
  cy.get('#scrapCheck').uncheck({ force: true });
  cy.get('#station').should('contain', "X-Ray");
  cy.wait(1000);
  cy.get('#productionOrder').clear();
  cy.get('#productionOrder').type('1093502_1026808212', { delay: 200 });
  cy.get('#productionOrder').should('be.enabled');
  cy.get('#productionOrder').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Wrong production order!'", function () {
  cy.get('#swal2-title').contains('Wrong production order!');
  cy.get('#swal2-html-container').should('contain', "Orden de producción incorrecta!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan correct production order', function () {
  cy.get('#productionOrder').clear();
  cy.get('#productionOrder').type('1180499_10515535', { delay: 200 });
  cy.get('#productionOrder').should('be.enabled');
  cy.get('#productionOrder').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Scan different hoop production order', function () {
  cy.get('#hoop').type('1093502_102680821', { delay: 200 });
  cy.get('#hoop').should('be.enabled');
  cy.get('#hoop').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Order # doesn't match!'", function () {
  cy.get('#swal2-title').contains("Order # doesn't match!");
  cy.get('#swal2-html-container').should('contain', "# Orden no concuerda!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan same hoop production order', function () {
  cy.get('#hoop').clear();
  cy.get('#hoop').type('1180499_10515535', { delay: 200 });
  cy.get('#hoop').should('be.enabled');
  cy.get('#hoop').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Data saved!'", function () {
  cy.get('#swal2-title').contains('Data saved!');
  cy.get('#swal2-html-container').should('contain', "Datos guardados!");
  cy.wait(2000);
});
i++;

it(i + ' - Scan production order', function () {
  cy.get('#productionOrder').clear();
  cy.get('#productionOrder').type('1097244_10278057', { delay: 200 });
  cy.get('#productionOrder').should('be.enabled');
  cy.get('#productionOrder').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Production order was not scanned in the previous station'", function () {
  cy.get('#swal2-title').contains("Production order was not scanned in the previous station");
  cy.get('#swal2-html-container').should('contain', "Orden de producción no fue escaneada en la estación anterior");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + " - Enable rework checkbox", function () {
  cy.get('#reworkCheck').check({ force: true });
  cy.wait(1000);
});
i++;

it(i + ' - Type the rework user', function () {
  cy.get('#rwlookup').type('6281', { delay: 200 });
  cy.get('#rwUser').should('be.enabled');
  cy.get('#rwUser').should('contain', '6281|Rojas Maria Andrea');
  cy.wait(2000);
});
i++;

it(i + ' - Scan an order already entered in the rework section', function () {
  cy.get('#rework').type('1091470_10262687', { delay: 200 });
  cy.get('#rework').should('be.enabled');
  cy.get('#rework').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display warning message 'Send order to rework?'", function () {
  cy.get('#swal2-title').contains('Send order to rework?');
  cy.get('#swal2-html-container').should('contain', "Enviar orden a rework?");
  cy.get('button').should('contain', "Yes");
  cy.get('button').should('contain', "Cancel");
  cy.wait(1000);
  cy.get('button').contains('Yes').click();
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Order number already entered!'", function () {
  cy.get('#swal2-title').contains('Order number already entered!');
  cy.get('#swal2-html-container').should('contain', "Número de orden ya fue ingresada");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan an order already scanned as good in the rework section', function () {
  cy.get('#rework').clear();
  cy.get('#rework').type('1129589_10366832', { delay: 200 });
  cy.get('#rework').should('be.enabled');
  cy.get('#rework').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display warning message 'Send order to rework?'", function () {
  cy.get('#swal2-title').contains('Send order to rework?');
  cy.get('#swal2-html-container').should('contain', "Enviar orden a rework?");
  cy.get('button').should('contain', "Yes");
  cy.get('button').should('contain', "Cancel");
  cy.wait(1000);
  cy.get('button').contains('Yes').click();
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Order number already scanned as good!'", function () {
  cy.get('#swal2-title').contains('Order number already scanned as good!');
  cy.get('#swal2-html-container').should('contain', "Número de orden ya escaneada como buena");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan order in rework', function () {
  cy.get('#rework').clear();
  cy.get('#rework').type('1180495_10515514', { delay: 200 });
  cy.get('#rework').should('be.enabled');
  cy.get('#rework').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display warning message 'Send order to rework?'", function () {
  cy.get('#swal2-title').contains('Send order to rework?');
  cy.get('#swal2-html-container').should('contain', "Enviar orden a rework?");
  cy.get('button').should('contain', "Yes");
  cy.get('button').should('contain', "Cancel");
  cy.wait(1000);
  cy.get('button').contains('Yes').click();
  cy.wait(1000);
});
i++;

it(i + " - Display succesfully message 'Record saved!'", function () {
  cy.get('#swal2-title').contains('Record saved!');
  cy.get('#swal2-html-container').should('contain', "Registro guardado!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;