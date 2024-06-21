describe('Label Interface', () => {
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
  describe('Labels', () => {
    describe('Reprint Label', () => {
      sumConsecutive();
      it(`${consecutive} Labels interface is loaded`, function () {
        cy.visit('https://sjoval.microvention.com/trackerPro/Labels');
        // cy.get('label').contains('Location: ').click();
        cy.get('#building').select('CER2');
        cy.get("#btnBuilding").click();
        cy.wait(timeWait(1000, 5000));
        window.localStorage.setItem('building', 'CER2');
        cy.visit('https://sjoval.microvention.com/trackerPro/Labels');
      });
      sumConsecutive();
      it(`${consecutive} Select reprint labels option`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong batch number`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct batch number`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} System display the qty`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Select the printer`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong user`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Systems display error message ''`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive}Enter correct user`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong pin`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Systems display error message`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct pin`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Click print button`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Label printed`, function () {
        cy.wait(timeWait(1000, 5000));
      });
    });
    describe('In Process label', () => {
      sumConsecutive();
      it(`${consecutive} Scan wrong batch number`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Select process`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Select station`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} System display qty`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Select the printer`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong user`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Systems display error message ''`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive}Enter correct user`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong pin`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Systems display error message`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct pin`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Click print button`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Label printed`, function () {
        cy.wait(timeWait(1000, 5000));
      });
    });
  });
});
