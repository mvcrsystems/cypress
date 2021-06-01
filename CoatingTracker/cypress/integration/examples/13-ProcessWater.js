describe('Process lot', function () {
    const lotNumber = "1704275G5";
    const desciption = "Scepter Final Assy XC";
    const viewer = "CR Viewer";
    var treeIn3 = "TREE003";
    var rackIn = "RACK001";
    var rackIn2 = "RACK002";
    var washing = "Washing"
    var trayOut3 = 'TRAY005';
    var trayOut4 = 'TRAY004';
    var user1 = 1111;
    var pass1 = 1234;
    it('01 - Coating Tracker Software', function () {
        cy.visit('http://sjo-testapp1/coatingtracker/index.php', {
            auth: {
                username: 'us\\wotracker',
                password: 'Microvention#44'
            }
        })
        cy.wait(2000);
    });

    it('02 - Go to Process lot interface', function () {
        cy.get('a').contains('Process').click();
        cy.wait(1000);
        cy.get('#lotNumber').should('not.be.disabled');
    });
    describe('Starts Distilled water / Agua Destilada Out Process', function () {
        describe('Insert the holder ' + trayOut4 + '', function () {
            it('03 - Enter blank on lot number field', function () {
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            it('04 - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            it('05 - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('06 - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('07 - Enter a lot number logged', function () {
                cy.get('#lotNumber').clear();
                cy.get('#lotNumber').type(lotNumber, { delay: 100 });
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.screenshot();
            });
            it('08 - Enter a blank in holder in field', function () {
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            it('09 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('10 - Enter a wrong holder in', function () {
                cy.get('#rack').type('TRAY009', { delay: 100 })
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            it('11 - Display error message "Holder not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Holder not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('12 - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(trayOut4, { delay: 100 })
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#ProcessOut').should('contain', 'Agua/Water to Horno/Oven Dry');
                cy.get('#edOut').should('have.value', washing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.screenshot();
            });
            it('13 - Enter the same holder where we have the units (' + treeIn3 + ') on Holder Out field', function () {
                cy.get('#rackOut').type(trayOut4, { delay: 100 })
                cy.screenshot();
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
            });
            it('14 - Display error message "Holder not allowed!', function () {
                cy.get('#swalTitle').should('contain', 'Holder not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#ProcessOut').should('contain', 'Agua/Water to Horno/Oven Dry');
                cy.get('#edOut').should('have.value', washing);
                cy.get('#rackOutput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            it('15 - Enter the correct Holder Out', function () {
                cy.get('#rackOut').clear();
                cy.get('#rackOut').type(rackIn, { delay: 100 })
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
                cy.get('#ProcessOut').should('contain', 'Agua/Water to Horno/Oven Dry');
                cy.get('#edOut').should('have.value', washing);
                cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.screenshot();
            });
            it('16 - Leave blank on user', function () {
                cy.get('#userOut').clear();
                cy.screenshot();
                cy.get('#userOut').type('{enter}')
                cy.wait(1000)
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('17 - Leave blank on password', function () {
                cy.get('#passOut').clear();
                cy.screenshot();
                cy.get('#passOut').type('{enter}')
                cy.wait(2000)
                cy.get('#passOut').should('be.empty');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('18 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('19 - Type a good user', function () {
                cy.get('#userOut').type(user1, { delay: 100 })
                cy.get('#userOut').type('{enter}')
                cy.wait(1000);
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.screenshot();
            });
            it('20 - Type a wrong password', function () {
                cy.get('#passOut').type('1004', { delay: 100 })
                cy.screenshot();
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('21 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('22 - Type a good password', function () {
                cy.get('#userOut').type('{enter}')
                cy.get('#passOut').clear();
                cy.get('#passOut').type(pass1, { delay: 100 })
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#saveOut').should('not.be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.screenshot();
            });
            it('23 - Click on Take Out button', function () {
                cy.get('#saveOut').click();
                cy.wait(2000);
            });
            it('24 - Display warning message "Incomplete process time,  Do you want to continue?"', function () {
                cy.get('#swalTitle').should('contain', 'Incomplete process time,  Do you want to continue?');
                cy.screenshot();
                cy.wait(2000);
                cy.get('button').contains('OK').click();
            });
            it('25 - Display message "Data saved successfully!"', function () {
                cy.get('#swalTitle').should('contain', 'Data saved successfully!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
            });
            it('26 - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                cy.screenshot();
            });
            it('27 - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                cy.screenshot();
            });
        });
        describe('Insert the holder ' + trayOut3 + '', function () {
            it('28 - Enter blank on lot number field', function () {
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            it('29 - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            it('30 - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('31 - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('32 - Enter a lot number logged', function () {
                cy.get('#lotNumber').clear();
                cy.get('#lotNumber').type(lotNumber, { delay: 100 });
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.screenshot();
            });
            it('33 - Enter a blank in holder in field', function () {
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            it('34 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('35 - Enter a wrong holder in', function () {
                cy.get('#rack').type('TRAY008', { delay: 100 })
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            it('36 - Display error message "Holder not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Holder not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('37 - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(trayOut3, { delay: 100 })
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#ProcessOut').should('contain', 'Agua/Water to Horno/Oven Dry');
                cy.get('#edOut').should('have.value', washing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.screenshot();
            });
            it('38 - Enter the same holder where we have the units (' + treeIn3 + ') on Holder Out field', function () {
                cy.get('#rackOut').type(trayOut3, { delay: 100 })
                cy.screenshot();
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
            });
            it('39 - Display error message "Holder not allowed!', function () {
                cy.get('#swalTitle').should('contain', 'Holder not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#ProcessOut').should('contain', 'Agua/Water to Horno/Oven Dry');
                cy.get('#edOut').should('have.value', washing);
                cy.get('#rackOutput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            it('40 - Enter the correct Holder Out', function () {
                cy.get('#rackOut').clear();
                cy.get('#rackOut').type(rackIn2, { delay: 100 })
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
                cy.get('#ProcessOut').should('contain', 'Agua/Water to Horno/Oven Dry');
                cy.get('#edOut').should('have.value', washing);
                cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.screenshot();
            });
            it('41 - Leave blank on user', function () {
                cy.get('#userOut').clear();
                cy.screenshot();
                cy.get('#userOut').type('{enter}')
                cy.wait(1000)
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('42 - Leave blank on password', function () {
                cy.get('#passOut').clear();
                cy.screenshot();
                cy.get('#passOut').type('{enter}')
                cy.wait(2000)
                cy.get('#passOut').should('be.empty');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('43 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('44 - Type a good user', function () {
                cy.get('#userOut').type(user1, { delay: 100 })
                cy.get('#userOut').type('{enter}')
                cy.wait(1000);
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.screenshot();
            });
            it('45 - Type a wrong password', function () {
                cy.get('#passOut').type('1004', { delay: 100 })
                cy.screenshot();
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('46 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('47 - Type a good password', function () {
                cy.get('#userOut').type('{enter}')
                cy.get('#passOut').clear();
                cy.get('#passOut').type(pass1, { delay: 100 })
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#saveOut').should('not.be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.screenshot();
            });
            it('48 - Waiting until the process time is complete', function () {
                cy.wait(55000);
                cy.screenshot();
            });
            it('49 - Click on Take Out button', function () {
                cy.get('#saveOut').click();
                cy.wait(2000);
            });
            it('50 - Display message "Data saved successfully!"', function () {
                cy.get('#swalTitle').should('contain', 'Data saved successfully!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
            });
            it('51 - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                cy.screenshot();
            });
        });
    });
});