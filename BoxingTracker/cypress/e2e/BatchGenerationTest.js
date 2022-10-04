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

it('0' + i + ' - Select Batch Generation Station', function () {
  cy.get('#station').select('Batch Generation');
  cy.wait(2000);
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

it(i + ' - Scan order in scrap section', function () {
  cy.get('#scrap').clear();
  cy.get('#scrap').type('1180500_10515516', { delay: 200 });
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
  cy.get('#station').should('contain', "Batch Generation");
  cy.wait(1000);
});
i++;

it(i + ' - Scan wrong batch number', function () {
  cy.get('#scrapCheck').uncheck({ force: true });
  cy.get('#station').should('contain', "Batch Generation");
  cy.wait(1000);
  cy.get('#batchNumber').type('00001573121', { delay: 200 });
  cy.get('#batchNumber').should('be.enabled');
  cy.get('#batchNumber').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Wrong batch!'", function () {
  cy.get('#swal2-title').contains('Wrong batch!');
  cy.get('#swal2-html-container').should('contain', "Lote incorrecto!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan correct batch number', function () {
  cy.get('#batchNumber').clear();
  cy.get('#batchNumber').type('0000267334', { delay: 200 });
  cy.get('#batchNumber').should('be.enabled');
  cy.get('#batchNumber').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Scan wrong production order', function () {
  cy.get('#productionOrder').type('1093502_102680821', { delay: 200 });
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
  cy.wait(2000);
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

it(i + " - Display succesfully message 'Data saved!'", function () {
  cy.get('#swal2-title').contains('Data saved!');
  cy.get('#swal2-html-container').should('contain', "Datos guardados!");
  cy.wait(2000);
});
i++;

it(i + " - Display message 'Print cover! / Imprimir cover!'", function () {
  cy.get('#print').should('contain', "Print cover! / Imprimir cover!");
  cy.wait(3000);
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
  cy.wait(1000);
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
  cy.get('#rework').type('1180513_10515529', { delay: 200 });
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