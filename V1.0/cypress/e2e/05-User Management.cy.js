describe('User Management', () => {
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
  describe('New User', () => {
    sumConsecutive();
    it(`${consecutive} Password interface is loaded`, function () {
      cy.visit('https://sjoval.microvention.com/trackerPro/Password');
      // cy.get('label').contains('Location: ').click();
      cy.get('#building').select('CER2');
      cy.get("#btnBuilding").click();
      cy.wait(timeWait(1000, 5000));
      window.localStorage.setItem('building', 'CER2');
      cy.visit('https://sjoval.microvention.com/trackerPro/Password');
    });
    sumConsecutive();
    it(`${consecutive} Enter user doesn't exist`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter correct user`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System display user name`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter pin`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Confirm pin`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Select role`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Click on save button`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} User saved`, function () {
      cy.wait(timeWait(1000, 5000));
    });
  });
  describe('Update User', () => {
    sumConsecutive();
    it(`${consecutive} Password interface is loaded`, function () {
      cy.visit('https://sjoval.microvention.com/trackerPro/Password');
      // cy.get('label').contains('Location: ').click();
      cy.get('#building').select('CER2');
      cy.get("#btnBuilding").click();
      cy.wait(timeWait(1000, 5000));
      window.localStorage.setItem('building', 'CER2');
      cy.visit('https://sjoval.microvention.com/trackerPro/Password');
    });
    sumConsecutive();
    it(`${consecutive} Enter user doesn't exist`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter correct user`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter new pin`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Select role`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Click update button`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} User updated `, function () {
      cy.wait(timeWait(1000, 5000));
    });
  });
  describe('Delete User', () => {
    sumConsecutive();
    it(`${consecutive} Password interface is loaded`, function () {
      cy.visit('https://sjoval.microvention.com/trackerPro/Password');
      // cy.get('label').contains('Location: ').click();
      cy.get('#building').select('CER2');
      cy.get("#btnBuilding").click();
      cy.wait(timeWait(1000, 5000));
      window.localStorage.setItem('building', 'CER2');
      cy.visit('https://sjoval.microvention.com/trackerPro/Password');
    });
    sumConsecutive();
    it(`${consecutive} Enter user doesn't exist`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter correct user`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System display user name`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Click on inactive button`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} User inactivated`, function () {
      cy.wait(timeWait(1000, 5000));
    });
  });
});
