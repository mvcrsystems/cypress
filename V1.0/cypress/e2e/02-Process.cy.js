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
    describe('PTFE Necking HW 27 + In', () => {
      it(`${consecutive} Enter wrong batch number`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct batch number`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Click on line clearance`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong qty`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct qty`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Catheter Fusing Machine)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Catheter Fusing Machine)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Reticle)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Reticle)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Ruler)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Ruler)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Triple Axis Laser Micrometer)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Triple Axis Laser Micrometer)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Weight Set)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Weight Set)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Weight Set)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Weight Set)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Air Flow (SCFH))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Air Flow (SCFH))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Speed (in / min))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Speed (in / min))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Temperature (°F))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Temperature (°F))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Weight (g))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Weight (g))`, function () {
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
      it(`${consecutive} Click on start process`, function () {
        cy.wait(timeWait(1000, 5000));
      });
    });
    describe('PTFE Necking HW 27 + Out', () => {
      sumConsecutive();
      it(`${consecutive} Click on start process`, function () {
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
      it(`${consecutive} Enter wrong station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong station Out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct station Out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong qty out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct qty out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter dimensional`, function () {
        cy.wait(timeWait(5000, 10000));
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
      it(`${consecutive} Click on take out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
    });
    describe('Coil Winding In', () => {
      it(`${consecutive} Enter wrong batch number`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct batch number`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Click on line clearance`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong qty`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct qty`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Block Ruler or equivalent)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Block Ruler or equivalent)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Coil Winder Machine (CA & CR))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Coil Winder Machine (CA & CR))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Reticle)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Reticle)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Ruler)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Ruler)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong ed equipment (Snap Gauge)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct ed equipment (Snap Gauge)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Tension SP (gm))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Tension SP (gm))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Step Length (inch) step 1)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Step Length (inch) step 1)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Spin Speed (RPS) step 1)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Spin Speed (RPS) step 1)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Pitch (inch) step 1)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Pitch (inch) step 1)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Mandrel Diameter (inches))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Mandrel Diameter (inches))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Step Length (inch) step 2)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Step Length (inch) step 2)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Spin Speed (RPS) step 2)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Spin Speed (RPS) step 2)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Pitch (inch) step 2)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Pitch (inch) step 2)`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Mandrel Tension (gm))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Mandrel Tension (gm))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong parameter (Load Filament Tension (gm))`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct parameter (Load Filament Tension (gm))`, function () {
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
      it(`${consecutive} Click on start process`, function () {
        cy.wait(timeWait(1000, 5000));
      });
    });
    describe('Coil Winding Out', () => {
      sumConsecutive();
      it(`${consecutive} Click on start process`, function () {
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
      it(`${consecutive} Enter wrong station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct station in`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong station Out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct station Out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter wrong qty out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter correct qty out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
      sumConsecutive();
      it(`${consecutive} Enter dimensional`, function () {
        cy.wait(timeWait(5000, 10000));
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
      it(`${consecutive} Click on take out`, function () {
        cy.wait(timeWait(1000, 5000));
      });
    });
  });
});
