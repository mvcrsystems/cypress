
describe('Lot Log Interface', () => {
  beforeEach(function () {
    cy.visit('http://localhost/coatingtracker/lot_log.php');
  });
  describe('Facility CER1', () => {
    it('01 - Go to Lot Log/Receipt', function () {
      cy.visit('http://localhost/coatingtracker/lot_log.php');
      cy.wait(2000);
    });
    it('02- Select CER1 on Select Site field ', function () {
      cy.get("#site").select("CER1");
      cy.wait(2000);
    });
    it('03- Enter lot number ', function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000405654");
      cy.get("#lotNumber").type("{enter}");
      cy.wait(2000);
    });
    it('04- Enter Qty ', function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000405654");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("Enforced PTFE Shaft; Headway 17 Advanced Straight");
      cy.get("#qty").type(10);
      cy.wait(2000);
      cy.get("#qty").type('{enter}');
    });
    it('05- Enter lubricity qty ', function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000405654");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("Enforced PTFE Shaft; Headway 17 Advanced Straight");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.wait(2000);
    });
    it('06- Enter user  ', function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000405654");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("Enforced PTFE Shaft; Headway 17 Advanced Straight");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.wait(2000);
    });
    it('07- Enter password  ', function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000405654");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("Enforced PTFE Shaft; Headway 17 Advanced Straight");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type('{enter}');
      cy.wait(2000);
    });
    it('08- Click on the save button ', function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000405654");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("Enforced PTFE Shaft; Headway 17 Advanced Straight");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type('{enter}');
      cy.wait(2000);
    });
    it('09- Display message "Data saved successfully!" ', function () {
      cy.get("#site").select("CER1");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000405654");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("Enforced PTFE Shaft; Headway 17 Advanced Straight");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type('{enter}');
      cy.get("#saveBut").click();
      cy.wait(100);
      cy.get('#swal2-title').contains('Data saved successfully!');
      cy.wait(2000);
    });
    it('10- Go to the CER1 Viewer" ', function () {
      cy.visit("http://localhost/coatingtracker/viewer.php?id=CER2");
      cy.wait(5000);
    });
  });
  describe('Facility CER2', () => {
    it('11 - Go to Lot Log/Receipt', function () {
      cy.visit('http://localhost/coatingtracker/lot_log.php');
      cy.wait(2000);
    });
    it('12- Select CER1 on Select Site field ', function () {
      cy.get("#site").select("CostaRica");
      cy.wait(2000);
    });
    it('13- Enter lot number ', function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000353604");
      cy.get("#lotNumber").type("{enter}");
      cy.wait(2000);
    });
    it('14- Enter Qty ', function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000353604");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("SOFIA 6F-125cm STR Access 6F");
      cy.get("#qty").type(10);
      cy.wait(2000);
      cy.get("#qty").type('{enter}');
    });
    it('15- Enter lubricity qty ', function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000353604");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("SOFIA 6F-125cm STR Access 6F");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.wait(2000);
    });
    it('16- Enter user  ', function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000353604");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("SOFIA 6F-125cm STR Access 6F");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.wait(2000);
    });
    it('17- Enter password  ', function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000353604");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("SOFIA 6F-125cm STR Access 6F");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type('{enter}');
      cy.wait(2000);
    });
    it('18- Click on the save button ', function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000353604");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("SOFIA 6F-125cm STR Access 6F");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type('{enter}');
      cy.wait(2000);
    });
    it('19- Display message "Data saved successfully!" ', function () {
      cy.get("#site").select("CostaRica");
      cy.get("#lotNumber").should("be.enabled");
      cy.get("#lotNumber").type("0000353604");
      cy.get("#lotNumber").type("{enter}");
      cy.get("#qty").should("be.enabled");
      cy.get("#productName").contains("SOFIA 6F-125cm STR Access 6F");
      cy.get("#qty").type(10);
      cy.get("#qty").type('{enter}');
      cy.get("#lubricity").type("0");
      cy.get("#lubricity").type('{enter}');
      cy.get("#usr").type("1111");
      cy.get("#usr").type('{enter}');
      cy.get("#pwd").type("1111");
      cy.get("#pwd").type('{enter}');
      cy.get("#saveBut").click();
      cy.wait(100);
      cy.get('#swal2-title').contains('Data saved successfully!');
      cy.wait(2000);
    });
    it('20- Go to the CER2 Viewer" ', function () {
      cy.visit("http://localhost/coatingtracker/viewer.php?id=CostaRica");
    });
  });
});