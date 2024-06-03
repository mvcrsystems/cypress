describe('Lot Log Interface', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/trackerPro/LotLog');
    cy.get('#building').select('CER2');
    cy.get("#btnBuilding").click();
    cy.wait(timeWait(1000, 5000));
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
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });
  sumConsecutive();
  it(`${consecutive}`, function () {

  });

});
