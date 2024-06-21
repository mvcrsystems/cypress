describe('Report', () => {
  // UPDATE INSERT / GETBATCH / CHECKBATCH
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
  describe('Report Interface', () => {
    sumConsecutive();
    it(`${consecutive} Report interface is loaded`, function () {
      cy.visit('https://sjoval.microvention.com/trackerPro/mainReport');
      // cy.get('label').contains('Location: ').click();
      cy.get('#building').select('CER2');
      cy.get("#btnBuilding").click();
      cy.wait(timeWait(1000, 5000));
      window.localStorage.setItem('building', 'CER2');
      cy.visit('https://sjoval.microvention.com/trackerPro/mainReport');
    });
    sumConsecutive();
    it(`${consecutive} Scan wrong bath number`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Scan correct batch number`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System display all the information`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Approve report with not qc user`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System display error message`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Approve report with user that worked in any process`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System display error message`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Approve report with correct user`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Report approved`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System generated the pdf report`, function () {
      cy.wait(timeWait(1000, 5000));
    });
  });
});
