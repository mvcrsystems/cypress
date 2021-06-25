const date = '08/Jun/2021';
const selectMp = '01. Body Coil Sub-assembly and Laser weld of Coils';
const lotNumber = '21060357G';
const mp = '02. Laser Weld of Body coils';
const reject = '96|Soldadura Insuficiente';
const goodUnit = '1|Unidad Buena';
const subReject = '1|Unidad buena / Pass';
const comment = 'Testing';
const qty = 3;
const searchUserRework = 'kevin';
const searchDisposition = 'soldadura';
var today = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var todayDate = today.getDate() + '/' + (monthNames[today.getMonth()]) + '/' + today.getFullYear();
function sumDate(day) {
  var dateN = new Date();
  dateN.setDate(dateN.getDate() + (day));
  var newDate = dateN.getDate() + "/" + (monthNames[dateN.getMonth()]) + "/" + dateN.getFullYear();
  return newDate;
}
const pastDate = sumDate(-10);
const futureDate = sumDate(+10);
var i = 1;

it('0' + i + ' - Go to Yield Loss Software', function () {
  cy.visit('http://sjo-testapp1/yieldloss/index.php');
});
i++;

it('0' + i + ' - Login without permissions', function () {
  cy.get('#email').type('coatingtr', { delay: 200 });
  cy.get('#password').type('Cuacoro#44', { delay: 200 });
  cy.get('button').contains('Iniciar Sesión').click();
  cy.screenshot();
  cy.wait(2000);
});
i++;

it('0' + i + ' - Display error message (User not allowed)', function () {
  cy.get('#swal2-title').should('contain', 'User not allowed');
  cy.get('button').contains('OK').click();
  cy.clearCookies();
  cy.screenshot();
  cy.wait(1000);
  cy.visit('http://sjo-testapp1/yieldloss/index.php');
});
i++;

it('0' + i + ' - Login with permissions', function () {
  cy.get('#email').type('wotracker', { delay: 200 });
  cy.get('#password').type('Microvention#44', { delay: 200 });
  cy.get('button').contains('Iniciar Sesión').click();
  cy.get('#date').should('be.enabled');
  cy.get('#date').should('have.value', todayDate);
  cy.get('#usrlookup').should('be.enabled');
  cy.get('#user').should('be.enabled');
  cy.get('#lotNumber').should('be.enabled');
  cy.get('#br').contains('BR');
  cy.get('#shift').should('be.disabled');
  cy.get('#area').should('be.disabled');
  cy.get('#product').should('be.disabled');
  cy.get('#doc').should('be.disabled');
  cy.get('#modellookup').should('be.disabled');
  cy.get('#model').should('be.disabled');
  cy.get('#rejectLookup').should('be.enabled');
  cy.get('#reject').should('be.disabled');
  cy.get('#subReject').should('be.disabled');
  cy.get('#qty').should('be.disabled');
  cy.get('#override').should('be.disabled');
  cy.get('#rw').should('be.disabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.disabled');
  cy.screenshot();
  cy.wait(2000);
});
i++;

it('0' + i + ' - Search user by number', function () {
  cy.get('#usrlookup').type("459", { delay: 100 });
  cy.get('#user').should('contain', '459|Vargas Viquez Rodolfo');
  cy.screenshot();
  cy.wait(2000);
});
i++;

it('0' + i + ' - Search user by name', function () {
  cy.get('#usrlookup').clear();
  cy.get('#usrlookup').type("Rodolfo", { delay: 100 });
  cy.get('#user').should('contain', '459|Vargas Viquez Rodolfo');
  cy.screenshot();
  cy.wait(2000);
});
i++;

it('0' + i + ' - Select an employee', function () {
  cy.get('#user').select('459|Vargas Viquez Rodolfo');
  cy.screenshot();
  cy.wait(2000);
});
i++;

it('0' + i + ' - Type a lot number', function () {
  cy.get('#lotNumber').type(lotNumber, { delay: 200 });
  cy.screenshot();
  cy.wait(1000);
});
i++;

it('0' + i + ' - Click validate button', function () {
  cy.get('button').contains('Validate').click();
  cy.get('#br').contains('BR020157-02');
  cy.get('#shift').should('be.enabled');
  cy.get('#area').should('be.enabled');
  cy.get('#product').should('be.enabled');
  cy.get('#area').should('have.value', 1);
  cy.get('#product').should('have.value', 133);
  cy.get('#doc').should('be.enabled');
  cy.get('#model').should('be.enabled');
  cy.get('#modellookup').should('be.enabled');
  cy.get('#rejectLookup').should('be.enabled');
  cy.get('#reject').should('be.disabled');
  cy.get('#subReject').should('be.disabled');
  cy.get('#qty').should('be.disabled');
  cy.get('#override').should('be.disabled');
  cy.get('#rw').should('be.disabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.disabled');
  cy.screenshot();
  cy.wait(2000);
});
i++;

it(i + ' - Select shift', function () {
  cy.get('#shift').select('A');
  cy.get('#yield').contains('Pass').invoke('text').then((text) => {
    var splitPass = parseFloat((text.split(':')[1]).trim());
    expect(splitPass).to.eq(0);
  });
  cy.get('#yield').contains('Rejects').invoke('text').then((text) => {
    var splitRejects = parseFloat((text.split(':')[1]).trim());
    expect(splitRejects).to.eq(0);
  });
  cy.get('#yield').contains('Yield').invoke('text').then((text) => {
    var splitYield = (text.split(':')[1]).trim();
    expect(splitYield).to.eq('100%');
  });
  cy.screenshot();
  cy.wait(1000);
});
i++;

it(i + ' - Select a MP/QS', function () {
  cy.get('#doc').select(mp);
  cy.get('#reject').should('be.enabled');
  cy.get('#subReject').should('be.disabled');
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.disabled');
  cy.get('#rw').should('be.disabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.disabled');
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Search unit disposition', function () {
  cy.get('#rejectLookup').type(searchDisposition, { delay: 200 });
  cy.get('#reject').should('be.enabled');
  cy.get('#subReject').should('be.disabled');
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.enabled');
  cy.get('#rw').should('be.enabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.enabled');
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Select unit disposition', function () {
  cy.get('#reject').select(reject);
  cy.get('#subReject').should('be.disabled');
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.enabled');
  cy.get('#rw').should('be.enabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.enabled');
  cy.get('#submit').contains('Save Reject Unit');
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Type a wrong quantity', function () {
  cy.get('#qty').type('0', { delay: 100 });
  cy.screenshot();
  cy.wait(1000);
  cy.get('#qty').type('{enter}');
});
i++;

it(i + " - Display error message (Quantity not allowed)", function () {
  cy.get('#swal2-title').contains('Quantity not allowed');
  cy.wait(1000);
  cy.screenshot();
  cy.get('button').contains('OK').click();
  cy.wait(1000);
  cy.get('#qty').should('contain', '');
});
i++;

it(i + ' - Type a correct quantity', function () {
  cy.get('#qty').type(qty, { delay: 200 });
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Check override scrap checkbox', function () {
  cy.get('#override').check();
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Check rework checkbox', function () {
  cy.get('#rw').check();
  cy.get('#rework').should('have.class', 'collapse in');
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Search reworked user', function () {
  cy.get('#rwlookup').type('1003', { delay: 200 });
  cy.get('#rwUser').should('contain', '1003');
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Search reworked user by name', function () {
  cy.get('#rwlookup').clear();
  cy.get('#rwlookup').type(searchUserRework, { delay: 200 });
  cy.get('#rwUser').should('contain', 'Rodriguez');
  cy.wait(2000);
  cy.screenshot();
});
i++;

it(i + ' - Select reworked user', function () {
  cy.get('#rwUser').select('1005|Rodriguez Murillo Kevin Francisco');
  cy.screenshot();
  cy.wait(3000);
});
i++;

it(i + ' - Type comments', function () {
  cy.get('#comments').type(comment, { delay: 200 });
  cy.screenshot();
  cy.wait(1000);
});
i++;

it(i + ' - Try to save with wrong past date', function () {
  cy.get('#date').clear();
  cy.get('#date').type(pastDate, { delay: 200 });
  cy.wait(1000);
  cy.get('#submit').click();
  cy.get('#swal2-title').contains('Wrong Date!');
  cy.screenshot();
  cy.wait(1000);
  cy.get('button').contains('OK').click();
});
i++;

it(i + ' - Try to save with wrong future date', function () {
  cy.get('#date').clear();
  cy.get('#date').type(futureDate, { delay: 200 });
  cy.wait(1000);
  cy.get('#submit').click();
  cy.get('#swal2-title').contains('Wrong Date!');
  cy.screenshot();
  cy.wait(1000);
  cy.get('button').contains('OK').click();
});
i++;

it(i + ' - Save Reject Unit with correct date', function () {
  cy.get('#date').clear();
  cy.get('#date').type(todayDate, { delay: 200 });
  cy.get('#submit').click();
  cy.screenshot();
  cy.wait(1000);
});
i++;

it(i + ' - Display succesfully message (Data saved successfully!)', function () {
  cy.get('#swal2-title').should('contain', 'Data saved successfully!');
  cy.get('button').contains('OK').click();
  cy.get('#date').should('be.enabled');
  cy.get('#date').should('have.value', todayDate);
  cy.get('#usrlookup').should('be.enabled');
  cy.get('#user').should('be.enabled');
  cy.get('#lotNumber').should('have.value', lotNumber);
  cy.get('#br').contains('BR020157-02');
  cy.get('#shift').should('contain', 'A');
  cy.get('#area').should('be.enabled');
  cy.get('#product').should('be.enabled');
  cy.get('#doc').should('be.enabled');
  cy.get('#area').should('contain', 'Advanced Pushers');
  cy.get('#product').should('contain', 'V-Trak Advanced Long');
  cy.get('#doc').should('contain', '02. Laser Weld of Body coils');
  cy.get('#modellookup').should('be.enabled');
  cy.get('#model').should('be.enabled');
  cy.get('#rejectLookup').should('be.enabled');
  cy.get('#reject').should('be.enabled');
  cy.get('#subReject').should('be.disabled');
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.disabled');
  cy.get('#rw').should('be.disabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.disabled');
  cy.get('#submit').contains('Select Unit Disposition');
  cy.get('#yield').contains('Pass').invoke('text').then((text) => {
    var splitPass = parseFloat((text.split(':')[1]).trim());
    expect(splitPass).to.eq(0);
  });
  cy.get('#yield').contains('Rejects').invoke('text').then((text) => {
    var splitText = parseFloat((text.split(':')[1]).trim());
    expect(splitText).to.eq(0);
  });
  cy.get('#yield').contains('Yield').invoke('text').then((text) => {
    var splitYield = (text.split(':')[1]).trim();
    expect(splitYield).to.eq('100%');
  });
  cy.screenshot();
  cy.wait(2000);
});
i++;

it(i + ' - Leave blanks', function () {
  cy.get('#rejectLookup').clear();
  cy.get('#reject').select('65|Mal Ensamblado');
  cy.get('#qty').type(qty, { delay: 200 });
  cy.screenshot();
  cy.wait(1000);
});
i++;

it(i + ' - Click Save Reject Unit button', function () {
  cy.get('#submit').click();
  cy.screenshot();
  cy.wait(1000);
});
i++;

it(i + ' - Display error message (Blanks not allowed!))', function () {
  cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
  cy.get('button').contains('OK').click();
  cy.get('#date').should('be.enabled');
  cy.get('#date').should('have.value', todayDate);
  cy.get('#usrlookup').should('be.enabled');
  cy.get('#user').should('be.enabled');
  cy.get('#lotNumber').should('have.value', lotNumber);
  cy.get('#br').contains('BR020157-02');
  cy.get('#shift').should('contain', 'A');
  cy.get('#area').should('be.enabled');
  cy.get('#product').should('be.enabled');
  cy.get('#doc').should('be.enabled');
  cy.get('#area').should('contain', 'Advanced Pushers');
  cy.get('#product').should('contain', 'V-Trak Advanced Long');
  cy.get('#doc').should('contain', '02. Laser Weld of Body coils');
  cy.get('#modellookup').should('be.enabled');
  cy.get('#model').should('be.enabled');
  cy.get('#rejectLookup').should('be.enabled');
  cy.get('#reject').should('be.enabled');
  cy.get('#subReject').should('be.disabled');
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.enabled');
  cy.get('#rw').should('be.enabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.enabled');
  cy.get('#submit').contains('Save Reject Unit');
  cy.screenshot();
  cy.wait(2000);
});
i++;

it(i + ' - Select unit disposition (Unidad Buena)', function () {
  cy.get('#reject').select('1|Unidad Buena');
  cy.get('#subReject').should('be.enabled');
  cy.get('#subReject').should('contain', 'Select a sub Reject');
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.disabled');
  cy.get('#rw').should('be.disabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.enabled');
  cy.get('#submit').contains('Save Pass Unit');
  cy.screenshot();
  cy.wait(2000);
});
i++;

it(i + ' - Select sub reject', function () {
  cy.get('#subReject').select(subReject);
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.disabled');
  cy.get('#rw').should('be.disabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#comments').should('have.value', 'Unidad buena / Pass');
  cy.get('#submit').should('be.enabled');
  cy.get('#submit').contains('Save Pass Unit');
  cy.get('#usrlookup').type('6281', { delay: 100 });
  cy.screenshot();
  cy.wait(2000);
});
i++;

it(i + ' - Click Save Pass Unit button', function () {
  cy.get('#submit').click();
  cy.screenshot();
  cy.wait(1000);
});
i++;

it(i + ' - Display succesfully message (Data saved successfully!)', function () {
  cy.get('#swal2-title').should('contain', 'Data saved successfully!');
  cy.get('button').contains('OK').click();
  cy.get('#date').should('be.enabled');
  cy.get('#date').should('have.value', todayDate);
  cy.get('#usrlookup').should('be.enabled');
  cy.get('#user').should('be.enabled');
  cy.get('#lotNumber').should('have.value', lotNumber);
  cy.get('#br').contains('BR020157-02');
  cy.get('#shift').should('contain', 'A');
  cy.get('#area').should('be.enabled');
  cy.get('#product').should('be.enabled');
  cy.get('#doc').should('be.enabled');
  cy.get('#area').should('contain', 'Advanced Pushers');
  cy.get('#product').should('contain', 'V-Trak Advanced Long');
  cy.get('#doc').should('contain', '02. Laser Weld of Body coils');
  cy.get('#modellookup').should('be.enabled');
  cy.get('#model').should('be.enabled');
  cy.get('#rejectLookup').should('be.enabled');
  cy.get('#reject').should('be.enabled');
  cy.get('#subReject').should('be.enabled');
  cy.get('#qty').should('be.enabled');
  cy.get('#override').should('be.disabled');
  cy.get('#rw').should('be.disabled');
  cy.get('#comments').should('be.enabled');
  cy.get('#submit').should('be.disabled');
  cy.get('#submit').contains('Select Unit Disposition');
  cy.get('#yield').contains('Pass').invoke('text').then((text) => {
    var splitPass = parseFloat((text.split(':')[1]).trim());
    expect(splitPass).to.eq(0);
  });
  cy.get('#yield').contains('Rejects').invoke('text').then((text) => {
    var splitText = parseFloat((text.split(':')[1]).trim());
    cy.wrap(splitText).should('be.gt', 0);
  });
  cy.get('#yield').contains('Yield').invoke('text').then((text) => {
    var splitYield = (text.split(':')[1]).trim();
    expect(splitYield).to.eq('0%');
  });
  cy.screenshot();
  cy.wait(2000);
});
i++;

it(i + ' - Delete data from the history record', function () {
  cy.get('#1').click();
  cy.get('#swal2-title').contains('Are you sure?');
  cy.get('#swal2-content').contains("You won't be able to revert this!");
  cy.wait(2000);
  cy.screenshot();
  cy.get('button').contains('Yes, delete it!').click();
});
i++;

it(i + " - Display succesfully message 'Data deleted succesfully'", function () {
  cy.get('#swal2-title').contains('Data deleted succesfully');
  cy.wait(2000);
  cy.screenshot();
  cy.get('button').contains('OK').click();
  cy.wait(100);
  cy.get('#yield').contains('Pass').invoke('text').then((text) => {
    var splitPass = parseFloat((text.split(':')[1]).trim());
    cy.wrap(splitPass).should('be.gt', 0);
  });
  cy.get('#yield').contains('Rejects').invoke('text').then((text) => {
    var splitText = parseFloat((text.split(':')[1]).trim());
    expect(splitText).to.eq(0);
  });
  cy.get('#yield').contains('Yield').invoke('text').then((text) => {
    var splitYield = (text.split(':')[1]).trim();
    expect(splitYield).to.eq('100%');
  });
  cy.wait(2000);
  cy.screenshot();
});