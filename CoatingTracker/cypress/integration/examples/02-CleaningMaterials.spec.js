describe('Cleaning Materials', function () {
    const lotNumber = '1704275G5';
    const dowLot = "101010";
    const user = '1005';
    const ipaDue = '01/Jan/1900';
    const lotDescription = "Scepter Final Assy XC";
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
        cy.get('#dowLot').should('not.be.disabled');
        cy.get('#dowDue').should('be.disabled');
        cy.get('#ipaLot').should('not.be.disabled');
        cy.get('#ipaDue').should('be.disabled');
        cy.get('#usr').should('be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Type a Dowanol solution lot', function () {
        cy.get('#dowLot').type(dowLot, { delay: 100 })
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Verify Dowanol solution lot', function () {
        cy.get('#dowLot').type('{enter}');
        cy.wait(1000);
        cy.get('#desc').should('contain', lotDescription)
        cy.get('#dowDue').should('not.be.disabled');
        cy.get('#ipaLot').should('not.be.disabled');
        cy.get('#ipaLot').should('have.value', "N/A")
        cy.get('#ipaDue').should('be.disabled');
        cy.get('#usr').should('not.be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Type a wrong exp date', function () {
        cy.get('#dowDue').type('{leftarrow}')
        cy.wait(1000);
        cy.get('#dowDue').type('{enter}')
        cy.wait(1000);
        cy.get('#usr').should('be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
        cy.screenshot();
    });
    i++;
    it(i + ' - Type a good exp date', function () {
        cy.get('#dowLot').type('{enter}');
        cy.get('#dowDue').type('{rightarrow}')
        cy.wait(1000);
        cy.get('#dowDue').type('{enter}')
        cy.wait(1000);
        cy.get('#usr').should('not.be.disabled');
        cy.get('#pwd').should('be.disabled');
        cy.get('#saveBut').should('be.disabled');
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
        cy.get('#swalTitle').contains('Password or user incorrect!');
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
        cy.get('#swalTitle').contains('Password or user incorrect!');
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
        cy.get('#pwd').type('1005', { delay: 100 })
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
        cy.get('#swalTitle').contains('Data saved successfully!');
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