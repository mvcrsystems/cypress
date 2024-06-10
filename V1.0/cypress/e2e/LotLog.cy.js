describe('Lot Log Interface', () => {
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
  describe('Lot log new batch number', () => {
    sumConsecutive();
    it(`${consecutive} Lot log interface is loaded`, function () {
      cy.visit('http://localhost:3000/trackerPro/LotLog');
      // cy.get('label').contains('Location: ').click();
      cy.get('#building').select('CER2');
      cy.get("#btnBuilding").click();
      cy.wait(timeWait(1000, 5000));
      cy.reload();
      window.localStorage.setItem('building', 'CER2');
    });
    sumConsecutive();
    it(`${consecutive} Enter a wrong batch number`, function () {
      cy.get('#batchNumber').type('00003991200');
      cy.get('#batchNumber').type('{enter}');

    });
    sumConsecutive();
    it(`${consecutive} The system display error message 'There is no associated recipe!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.get('button').contains('OK').click();
    });
    sumConsecutive();
    it(`${consecutive} Enter correct batch number`, function () {
      cy.get('#batchNumber').clear();
      cy.get('#batchNumber').type('0000399120');
      cy.get('#batchNumber').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter negative amount`, function () {
      cy.get('#qty').type('-1');
      cy.get('#qty').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} The system display error message 'Amount not allowed'`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter correct amount`, function () {
      cy.get('#qty').clear();
      cy.get('#qty').type('10');
      cy.get('#qty').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Complete initial production line clearance`, function () {

      cy.wait(timeWait(1000, 5000));
      cy.get('#initialClearance').click();
    });
    sumConsecutive();
    it(`${consecutive} Enter wrong user id`, function () {
      cy.get('#userID').type('10055');
      cy.get('#userID').type('{enter}');
    });
    sumConsecutive();
    it(`${consecutive} System display error message 'User doesn't exists!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.get('button').contains('OK').click();
    });
    sumConsecutive();
    it(`${consecutive} Enter correct user id`, function () {
      cy.get('#userID').clear();
      cy.get('#userID').type('1005');
      cy.get('#userID').type('{enter}');
    });
    sumConsecutive();
    it(`${consecutive} Enter wrong pin`, function () {
      cy.get('#passwordID').type('10055');
      cy.get('#passwordID').type('{enter}');
    });
    sumConsecutive();
    it(`${consecutive} System display error message 'Wrong Pin!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.get('button').contains('OK').click();
    });
    sumConsecutive();
    it(`${consecutive} Enter correct pin`, function () {
      cy.get('#passwordID').clear();
      cy.get('#passwordID').type('1111');
      cy.get('#passwordID').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Click on save button `, function () {
      cy.get('#btnSave').click();
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System display message 'Data saved successfully!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.visit('http://localhost:3000/trackerPro/LotLog');
    });
    sumConsecutive();
    it(`${consecutive} The lot number entered appears on the batch number history table`, function () {
      cy.wait(timeWait(1000, 5000));
    });
  });
  describe('Update the amount', () => {
    // it(`${consecutive} Lot log interface is loaded`, function () {
    //   cy.visit('http://localhost:3000/trackerPro/LotLog');
    //   // cy.get('label').contains('Location: ').click();
    //   cy.get('#building').select('CER2');
    //   cy.get("#btnBuilding").click();
    //   cy.wait(timeWait(1000, 5000));
    //   cy.reload();
    //   window.localStorage.setItem('building', 'CER2');
    // });
    sumConsecutive();
    it(`${consecutive} Enter a wrong batch number`, function () {
      cy.get('#batchNumber').type('00003991200');
      cy.get('#batchNumber').type('{enter}');

    });
    sumConsecutive();
    it(`${consecutive} The system display error message 'There is no associated recipe!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.get('button').contains('OK').click();
    });
    sumConsecutive();
    it(`${consecutive} Enter correct batch number`, function () {
      cy.get('#batchNumber').clear();
      cy.get('#batchNumber').type('0000399120');
      cy.get('#batchNumber').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter negative amount`, function () {
      cy.get('#qty').clear();
      cy.get('#qty').type('-1');
      cy.get('#qty').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} The system display error message 'Amount not allowed'`, function () {
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Enter higher amount`, function () {
      cy.get('#qty').clear();
      cy.get('#qty').type('20');
      cy.get('#qty').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });

    sumConsecutive();
    it(`${consecutive} Enter wrong user id`, function () {
      cy.get('#userID').type('10055');
      cy.get('#userID').type('{enter}');
    });
    sumConsecutive();
    it(`${consecutive} System display error message 'User doesn't exists!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.get('button').contains('OK').click();
    });
    sumConsecutive();
    it(`${consecutive} Enter correct user id`, function () {
      cy.get('#userID').clear();
      cy.get('#userID').type('1005');
      cy.get('#userID').type('{enter}');
    });
    sumConsecutive();
    it(`${consecutive} Enter wrong pin`, function () {
      cy.get('#passwordID').type('10055');
      cy.get('#passwordID').type('{enter}');
    });
    sumConsecutive();
    it(`${consecutive} System display error message 'Wrong Pin!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.get('button').contains('OK').click();
    });
    sumConsecutive();
    it(`${consecutive} Enter correct pin`, function () {
      cy.get('#passwordID').clear();
      cy.get('#passwordID').type('1111');
      cy.get('#passwordID').type('{enter}');
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} Click on save button `, function () {
      cy.get('#btnUpdate').click();
      cy.wait(timeWait(1000, 5000));
    });
    sumConsecutive();
    it(`${consecutive} System display message 'Data saved successfully!'`, function () {
      cy.wait(timeWait(1000, 5000));
      cy.get('button').contains('OK').click();
    });
    sumConsecutive();
    it(`${consecutive} The new amount appears on the batch number history table`, function () {
      cy.wait(timeWait(1000, 5000));
    });
  });
});
