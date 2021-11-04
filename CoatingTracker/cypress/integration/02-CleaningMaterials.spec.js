describe('Cleaning Materials', function () {
    const lotNumber = '0000057824';
    const ipaLot = "0000095247";
    const user = '6281';
    const lotDescription = "Scepter";
    var i = 1;
    it('0' + i + ' - Login in the server', function () {
        cy.visit('http://sjo-testapp1/coatingtracker/index.php', {
            auth: {
                username: 'us\\wotracker',
                password: 'Microvention#44'
            }
        })
        cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Go to rawmaterial interface', function () {
        cy.visit('http://sjo-testapp1/coatingtracker/rawmatmix.php', {
            auth: {
                username: 'us\\wotracker',
                password: 'Microvention#44'
            }
        })
        cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Click on Cleaning Materials section', function () {
        cy.get('a').contains('Cleaning Materials').click();
        cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Leave blanks on lot number input', function () {
        cy.get('#lotNumber').clear();
        cy.wait(1000)
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Verify lot number (Blank)', function () {
        cy.get('#lotNumber').should('be.empty');
        cy.get('#lotNumber').type('{enter}');
        cy.get('#desc').should('contain', 'Lot not logged')
        cy.get('#dowLot').should('be.disabled');
        cy.get('#dowDue').should('be.disabled');
        cy.get('#ipaLot').should('be.disabled');
        cy.get('#ipaDue').should('be.disabled');
        cy.get('#usr').should('be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Type a wrong lot number', function () {
        cy.get('#lotNumber').type('20202020', { delay: 100 })
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Verify wrong lot number', function () {
        cy.get('#lotNumber').type('{enter}');
        cy.wait(1000);
        cy.get('#desc').should('contain', 'Lot not logged')
        cy.get('#dowLot').should('be.disabled');
        cy.get('#dowDue').should('be.disabled');
        cy.get('#ipaLot').should('be.disabled');
        cy.get('#ipaDue').should('be.disabled');
        cy.get('#usr').should('be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Type a good lot number', function () {
        cy.get('#lotNumber').clear();
        cy.get('#lotNumber').type(lotNumber, { delay: 100 })
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Verify good lot number', function () {
        cy.get('#lotNumber').type('{enter}');
        cy.wait(1000);
        cy.get('#desc').should('contain', lotDescription)
        cy.get('#dowLot').should('be.disabled');
        cy.get('#dowDue').should('be.disabled');
        cy.get('#ipaLot').should('be.enabled');
        cy.get('#ipaDue').should('be.disabled');
        cy.get('#usr').should('be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Type a IPA solution lot', function () {
        cy.get('#ipaLot').type(ipaLot, { delay: 100 })
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Verify IPA solution lot', function () {
        cy.get('#ipaLot').type('{enter}');
        cy.wait(1000);
        cy.get('#desc').should('contain', lotDescription)
        cy.get('#dowDue').should('be.disabled');
        cy.get('#dowDue').should('have.value', "1900/Jan/01");
        cy.get('#ipaLot').should('be.enabled');
        cy.get('#dowLot').should('have.value', "N/A");
        cy.get('#ipaDue').should('be.disabled');
        cy.get('#ipaDue').should('have.value', "21-Sep-2022")
        cy.get('#usr').should('be.enabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it(i + '- Leave blank on user input', function () {
        cy.screenshot();
        cy.get('#usr').type('{enter}')
        cy.wait(2000);
        cy.get('#pwd').should('not.be.disabled')
        cy.get('#saveBut').should('be.disabled');
    });
    i++;
    it(i + ' - Leave blank on password input', function () {
        cy.screenshot();
        cy.get('#pwd').type('{enter}')
        cy.wait(1000);
        cy.get('#saveBut').should('be.disabled');
    });
    i++;
    it(i + " - Display error message 'Password or user incorrect!'", function () {
        cy.get('#swal2-title').contains('Password or user incorrect!');
        cy.wait(2000);
        cy.screenshot();
        cy.get('button').contains('OK').click();
        cy.wait(1000);
        cy.get('#pwd').should('be.disabled')
        cy.get('#saveBut').should('be.disabled');
    });
    i++;
    it(i + ' - Type a good user', function () {
        cy.get('#usr').type(user, { delay: 100 })
        cy.get('#usr').type('{enter}')
        cy.wait(1000);
        cy.screenshot();
        cy.get('#saveBut').should('be.disabled');
        cy.get('#pwd').should('not.be.disabled')
    });
    i++;
    it(i + ' - Type a wrong password', function () {
        cy.get('#pwd').type('1004', { delay: 100 })
        cy.screenshot();
        cy.get('#pwd').type('{enter}')
        cy.wait(1000);
    });
    i++;
    it(i + " - Display error message 'Password or user incorrect!'", function () {
        cy.get('#swal2-title').contains('Password or user incorrect!');
        cy.wait(2000);
        cy.screenshot();
        cy.get('button').contains('OK').click();
        cy.wait(1000);
        cy.get('#pwd').should('be.disabled')
        cy.get('#saveBut').should('be.disabled');
    });
    i++;
    it(i + ' - Type a good password', function () {
        cy.get('#usr').type('{enter}')
        cy.get('#pwd').clear();
        cy.get('#pwd').type('6281', { delay: 100 })
        cy.get('#pwd').type('{enter}')
        cy.wait(1000);
        cy.get('#saveBut').should('not.be.disabled');
        cy.screenshot();
    });
    i++;
    it(i + ' - Click on Save button', function () {
        cy.get('#saveBut').click();
        cy.wait(2000);
    });
    i++;
    it(i + " - Display message 'Data saved successfully!'", function () {
        cy.get('#swal2-title').contains('Data saved successfully!');
        cy.wait(2000);
        cy.screenshot();
        cy.get('button').contains('OK').click();
        cy.wait(1000);
        cy.get('#lotNumber').type(lotNumber, { delay: 100 })
        cy.get('#lotNumber').type('{enter}');
        cy.wait(1000);
        cy.get('#desc').should('contain', lotDescription)
        cy.get('#dowLot').should('be.disabled');
        cy.get('#dowDue').should('be.disabled');
        cy.get('#ipaLot').should('be.disabled');
        cy.get('#ipaDue').should('be.disabled');
        cy.get('#usr').should('be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.wait(10000)
        cy.screenshot();
    });
});