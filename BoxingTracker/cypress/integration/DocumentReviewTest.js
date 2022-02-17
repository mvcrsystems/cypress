var i = 1;
var username = 'us\\wotracker';
var password = 'Microvention#44';
it('0' + i + ' - Login in the server', function () {
  cy.visit('http://sjo-testapp1/sap_boxing/index.php', {
    auth: {
      username: username,
      password: password
    }
  })
  cy.wait(2000);
});
i++;

it('0' + i + ' - User login without access', function () {
  cy.get('#email').type('coatingtr');
  cy.get('#password').type('Cuacoro#44');
  cy.get('#btnLogin').click();
  cy.wait(6000);
  cy.get('button').contains('OK').click();
});
i++;

it('0' + i + ' - User login with access', function () {
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
  cy.wait(4000);
});
i++;

it('0' + i + ' - Select Document Review Production Station', function () {
  cy.get('#station').select('Document Review Production');
});
i++;

it('0' + i + " - Enable scrap checkbox", function () {
  cy.get('#scrapCheck').check();
  cy.get('#sterileBatch').should('be.disabled');
  cy.get('#productionOrder').should('be.disabled');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Scan wrong sterile batch in scrap', function () {
  cy.get('#batchScrap').type('2202175S2', { delay: 200 });
  cy.get('#batchScrap').should('be.enabled');
  cy.get('#batchScrap').type('{enter}');
  cy.wait(1000);
});
i++;

it('0' + i + " - Display error message 'Sterile lot not found!'", function () {
  cy.get('#swal2-title').contains('Sterile lot not found!');
  cy.get('#swal2-html-container').should('contain', "Lote estéril no encontrado!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it('0' + i + ' - Scan correct sterile batch in scrap', function () {
  cy.get('#batchScrap').clear();
  cy.get('#batchScrap').type('2202175S1', { delay: 200 });
  cy.get('#batchScrap').should('be.enabled');
  cy.get('#batchScrap').type('{enter}');
  cy.wait(1000);
});
i++;

it('0' + i + ' - Scan in scrap an order already entered', function () {
  cy.get('#scrap').type('1089902_10256490', { delay: 200 });
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

it(i + " - Display error message 'Order number already entered!'", function () {
  cy.get('#swal2-title').contains('Order number already entered!');
  cy.get('#swal2-html-container').should('contain', "Número de orden ya fue ingresada");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan in scrap an order already scanned as good', function () {
  cy.get('#scrap').clear();
  cy.get('#scrap').type('1093502_102680821', { delay: 200 });
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
  cy.get('#scrap').type('1096729_10277093', { delay: 200 });
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
  cy.get('#station').should('contain', "Document Review Production");
  cy.wait(1000);
});
i++;

it(i + ' - Leave the sterile batch field blank', function () {
  cy.get('#scrapCheck').uncheck({ force: true });
  cy.get('#station').should('contain', "Document Review Production");
  cy.get('#sterileBatch').should('be.enabled');
  cy.get('#productionOrder').should('be.enabled');
  cy.wait(1000);
  cy.get('#productionOrder').type('1093502_1026808212', { delay: 200 });
  cy.get('#productionOrder').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Sterile batch required'", function () {
  cy.get('#swal2-title').contains('Sterile batch required');
  cy.get('#swal2-html-container').should('contain', "Lote estéril requerido!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan wrong sterile batch', function () {
  cy.get('#sterileBatch').type('2202175S2', { delay: 200 });
  cy.get('#sterileBatch').should('be.enabled');
  cy.get('#sterileBatch').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Sterile lot not found!'", function () {
  cy.get('#swal2-title').contains('Sterile lot not found!');
  cy.get('#swal2-html-container').should('contain', "Lote estéril no encontrado!");
  cy.wait(1000);
  cy.get('button').contains('OK').click();
  cy.wait(1000);
});
i++;

it(i + ' - Scan correct sterile batch', function () {
  cy.get('#sterileBatch').clear();
  cy.get('#sterileBatch').type('2202175S1', { delay: 200 });
  cy.get('#sterileBatch').should('be.enabled');
  cy.get('#sterileBatch').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + ' - Scan wrong production order', function () {
  cy.get('#scrapCheck').uncheck({ force: true });
  cy.get('#station').should('contain', "Document Review Production");
  cy.get('#sterileBatch').should('be.enabled');
  cy.get('#productionOrder').should('be.enabled');
  cy.wait(1000);
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
  cy.get('#productionOrder').type('1096104_10276470', { delay: 200 });
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

it(i + ' - Scan production order not scanned in previous station', function () {
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

it(i + ' - Scan duplicate production order', function () {
  cy.get('#productionOrder').clear();
  cy.get('#productionOrder').type('1096104_10276470', { delay: 200 });
  cy.get('#productionOrder').should('be.enabled');
  cy.get('#productionOrder').type('{enter}');
  cy.wait(1000);
});
i++;

it(i + " - Display error message 'Duplicated order!'", function () {
  cy.get('#swal2-title').contains("Duplicated order!");
  cy.get('#swal2-html-container').should('contain', "Orden duplicada!");
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
  cy.wait(1000);
});
i++;

it(i + ' - Scan in rework an order already entered', function () {
  cy.get('#rework').type('1089902_10256490', { delay: 200 });
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

it(i + ' - Scan in rework an order already scanned as good', function () {
  cy.get('#rework').clear();
  cy.get('#rework').type('1093502_102680821', { delay: 200 });
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
  cy.get('#rework').type('1096058_10274801', { delay: 200 });
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