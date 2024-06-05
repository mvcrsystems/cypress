describe('Lot Log Interface', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/trackerPro/LotLog');
    cy.get('#building').select('CER2');
    cy.get("#btnBuilding").click();
  });

  var consecutive = 0;
  var num = 0;

  function sumConsecutive() {
    consecutive = "";
    num += 1;
    if (num < 10) {
      consecutive = '0' + num + ' - ';
    } else {
      consecutive = num + ' - ';
    }
  }

  function timeWait(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  sumConsecutive();
  it(`${consecutive} Enter a wrong batch number`, function () {
    cy.get('#batchNumber').type('00003991200');
    cy.get('#batchNumber').type('{enter}');
    timeWait(1000, 5000);
  });
  sumConsecutive();
  it(`${consecutive} The system display error message 'There is no associated recipe!'`, function () {
    cy.get('#batchNumber').type('00003991200');
    cy.get('#batchNumber').type('{enter}');
    timeWait(1000, 5000);
  });
  sumConsecutive();
  it(`${consecutive} Enter correct batch number`, function () {
    cy.get('#batchNumber').type('0000399120');
    cy.get('#batchNumber').type('{enter}');
    timeWait(1000, 5000);
  });
  sumConsecutive();
  it(`${consecutive} Enter negative amount`, function () {
    cy.get('#batchNumber').type('0000399120');
    cy.get('#batchNumber').type('{enter}');
    timeWait(1000, 5000);
    cy.get('#qty').type('-1');
    cy.get('#qty').type('{enter}');
    timeWait(1000, 5000);
  });
  sumConsecutive();
  it(`${consecutive} The system display error message ''`, function () {
    cy.get('#batchNumber').type('0000399120');
    cy.get('#batchNumber').type('{enter}');
    timeWait(1000, 5000);
    cy.get('#qty').type('-1');
    cy.get('#qty').type('{enter}');
    timeWait(1000, 5000);
  });
  sumConsecutive();
  it(`${consecutive} Enter correct amount`, function () {
    cy.get('#batchNumber').type('0000399120');
    cy.get('#batchNumber').type('{enter}');
    timeWait(1000, 5000);
    cy.get('#qty').type('10');
    cy.get('#qty').type('{enter}');
    timeWait(1000, 5000);
  });
  sumConsecutive();
  it(`${consecutive} Complete initial production line clearance`, function () {
    cy.get('#batchNumber').type('0000399120');
    cy.get('#batchNumber').type('{enter}');
    timeWait(1000, 5000);
    cy.get('#qty').type('10');
    cy.get('#qty').type('{enter}');
    timeWait(1000, 5000);
    cy.get('#initialClearance').click();
  });
  sumConsecutive();
  it(`${consecutive} Enter wrong user id`, function () {

  });
  sumConsecutive();
  it(`${consecutive} System display error message ''`, function () {

  });
  sumConsecutive();
  it(`${consecutive} Enter correct user id`, function () {

  });
  sumConsecutive();
  it(`${consecutive} Enter wrong pin`, function () {

  });
  sumConsecutive();
  it(`${consecutive} System display error message ''`, function () {

  });
  sumConsecutive();
  it(`${consecutive} Enter correct pin`, function () {

  });
  sumConsecutive();
  it(`${consecutive} Click on save button `, function () {

  });
  sumConsecutive();
  it(`${consecutive} System display message`, function () {

  });
  sumConsecutive();
  it(`${consecutive} The lot number entered appears on the batch number history table`, function () {

  });


});
