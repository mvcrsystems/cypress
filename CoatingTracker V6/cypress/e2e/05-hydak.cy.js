describe('Base Consecutive', () => {
  beforeEach(function () {
    cy.visit('http://localhost/coatingtracker/topcoat.php');
  });

  // Define una variable global para almacenar el valor
  var consecutive = 0;
  var num = 0;
  // Función que suma 1 a la variable
  function sumConsecutive() {
    consecutive = "";
    num += 1;
    if (num < 10) {
      consecutive = '0' + num + ' - ';
    } else {
      consecutive = num + ' - ';
    }
  }

  describe('Hydak A-15 interface CER1', () => {
    sumConsecutive();
    it(`${consecutive}Go to Desmodur interface`, function () {
      cy.visit("http://localhost/coatingtracker/topcoat.php");
    });
    sumConsecutive();
    it(`${consecutive}Select Facility`, function () {
      cy.get("#site").select("CER1");
    });
    sumConsecutive();
    it(`${consecutive}Enter Hydak Lot`, function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").type("0000369318");
    });
    sumConsecutive();
    it(`${consecutive}Enter Fridge ED`, function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
    });
    sumConsecutive();
    it(`${consecutive}Enter User`, function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
      cy.get("#ed").type("{enter}");
      cy.get("#usr").type("1111");
    });
    sumConsecutive();
    it(`${consecutive}Enter Password`, function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
      cy.get("#ed").type("{enter}");
      cy.get("#usr").type("1111");
      cy.get("#usr").type("{enter}");
      cy.get("#pwd").type("1111");
    });
    sumConsecutive();
    it(`${consecutive}Click on save button`, function () {

    });
    sumConsecutive();
    it(`${consecutive}The system display "Display message "Data saved successfully!"`, function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
      cy.get("#ed").type("{enter}");
      cy.get("#usr").type("1111");
      cy.get("#usr").type("{enter}");
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type("{enter}");
      cy.get("#saveBut").click();
      cy.wait(100);
    });
    sumConsecutive();
    it(`${consecutive}Go to CER1 Viewer"`, function () {
      cy.visit("http://localhost/coatingtracker/viewer.php?id=CER1");
    });
  });
  describe('Hydak A-15 interface CER2', () => {
    sumConsecutive();
    it(`${consecutive}Go to Desmodur interface`, function () {
      cy.visit("http://localhost/coatingtracker/topcoat.php");
    });
    sumConsecutive();
    it(`${consecutive}Select Facility`, function () {
      cy.get("#site").select("CostaRica");
    });
    sumConsecutive();
    it(`${consecutive}Enter Hydak Lot`, function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").type("0000369318");
    });
    sumConsecutive();
    it(`${consecutive}Enter Fridge ED`, function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
    });
    sumConsecutive();
    it(`${consecutive}Enter Fridge ED`, function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
      cy.get("#ed").type("{enter}");
    });
    sumConsecutive();
    it(`${consecutive}Enter User`, function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
      cy.get("#ed").type("{enter}");
      cy.get("#usr").type("1111");
    });
    sumConsecutive();
    it(`${consecutive}Enter Password`, function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
      cy.get("#ed").type("{enter}");
      cy.get("#usr").type("1111");
      cy.get("#usr").type("{enter}");
      cy.get("#pwd").type("1111");
    });
    sumConsecutive();
    it(`${consecutive}Click on save button`, function () {

    });
    sumConsecutive();
    it(`${consecutive}The system display "Display message "Data saved successfully!"`, function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").type("0000369318");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#ed").type("ED11676-00-079");
      cy.get("#ed").type("{enter}");
      cy.get("#usr").type("1111");
      cy.get("#usr").type("{enter}");
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type("{enter}");
      cy.get("#saveBut").click();
      cy.wait(100);
    });
    sumConsecutive();
    it(`${consecutive}Go to CER2 Viewer"`, function () {
      cy.visit("http://localhost/coatingtracker/viewer.php?id=CostaRica");
    });
  });
});