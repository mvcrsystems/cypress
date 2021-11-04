describe('Process lot', function () {
    const lotNumber = "0000057824";
    const desciption = "Scepter";
    const viewer = "CR Viewer";
    var rackOut3 = "RACK001";
    var rackOut4 = "RACK004";
    var wrongRackIn = "TRAY008";
    var EDWashing = "WASHING";
    var trayOut3 = 'TRAY005';
    var trayOut4 = 'TRAY004';
    var trayIn = 'TRAY003';
    var trayIn2 = 'TRAY002';
    var user1 = '3333';
    var pass1 = '3333';
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
    describe('Start the  Sodium Bicarbonate / Bicarbonato In process ', function () {
        describe('Insert the holder ' + rackOut4 + '', function () {
            it('03 - Enter blank on lot number field', function () {
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            it('04 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            it('05 - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('06 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
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
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
            });
            it('08 - Enter a blank in holder in field', function () {
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            it('09 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('10 - Enter a wrong holder in', function () {
                cy.get('#rack').type(wrongRackIn, { delay: 100 })
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            it('11 - Display error message "Holder not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Holder not allowed!');
                ////cy.screenshot();;
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
                cy.get('#rack').type(rackOut4, { delay: 100 })
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('13 - Enter blank on ED Field', function () {
                ////cy.screenshot();;
                cy.get('#edIn').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('14 - Display error message "Wrong ED"', function () {
                cy.get('#swal2-title').should('contain', 'Wrong ED');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('15 - Enter correct ED', function () {
                cy.get('#edIn').clear();
                cy.get('#edIn').type(EDWashing, { delay: 100 })
                cy.get('#edIn').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('16 - Enter blank on Tray In', function () {
                ////cy.screenshot();;
                cy.get('#holderTray').type('{enter}');
                cy.wait(2000);
            });
            it('17 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('18 - Enter a wrong Tray In', function () {
                cy.get('#holderTray').type('RACK001', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#holderTray').type('{enter}');
                cy.wait(1000);
            });
            it('19 - Display error message "Holder not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Holder not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('18 - Enter a tray with no consecutive number assigned', function () {
                cy.get('#holderTray').type('TRAY008', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#holderTray').type('{enter}');
                cy.wait(1000);
            });
            it('19 - Display error message "Holder does not has a consecutive number assigned"', function () {
                cy.get('#swal2-title').should('contain', 'Holder does not has a consecutive number assigned');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('20 - Enter correct Tray In', function () {
                cy.get('#holderTray').clear();
                cy.get('#holderTray').type(trayIn, { delay: 100 })
                cy.get('#holderTray').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#bicarbonateNumber').should('not.empty');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('21 - Enter blank on qty', function () {
                ////cy.screenshot();;
                cy.get('#qtyModal').type('{enter}');
                cy.wait(1000);
            });
            it('22 - Display error message "Wrong Quantity!"', function () {
                cy.get('#swal2-title').should('contain', 'Wrong Quantity!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('23 - Enter higher quanity on Tray In', function () {
                cy.get('#qtyModal').type('31', { delay: 100 });
                ////cy.screenshot();;
                cy.get('#qtyModal').type('{enter}');
                cy.wait(1000);
            });
            it('24 - Display error message "Wrong Quantity!"', function () {
                cy.get('#swal2-title').should('contain', 'Wrong Quantity!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('25 - Enter correct quanity on Tray In', function () {
                cy.get('#qtyModal').clear();
                cy.get('#qtyModal').type('30', { delay: 100 })
                cy.get('#qtyModal').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#bicarbonateNumber').should('not.empty')
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.get('#btnAccept').should('not.be.disabled');
                ////cy.screenshot();;
            });
            it('27 - Accept the data that already inserted', function () {
                cy.get('#btnAccept').click();
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('not.be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('28 - Enter blank in user field', function () {
                ////cy.screenshot();;
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('29 - Enter blank in password field', function () {
                ////cy.screenshot();;
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            it('30 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('31 - Enter user', function () {
                cy.get('#userIn').type(user1, { delay: 100 })
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('32 - Enter wrong password', function () {
                cy.get('#passIn').type(user1 + 1, { delay: 100 })
                ////cy.screenshot();;
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            it('33 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('34 - Enter correct password', function () {
                cy.get('#userIn').type('{enter}');
                cy.get('#passIn').type(pass1, { delay: 100 })
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('not.be.disabled');
                ////cy.screenshot();;
            });
            it('35 - Save Information', function () {
                cy.get('#saveIn').click();
                cy.wait(2000);
            });
            /*it('36 - Display warning message "Wait time out of range"', function () {
                cy.get('#swal2-title').should('contain', 'Wait time out of range');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });*/
            it('37 - Display message "Data saved successfully!"', function () {
                cy.get('#swal2-title').should('contain', 'Data saved successfully!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('38 - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                ////cy.screenshot();;
            });
            it('39 - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                ////cy.screenshot();;
            });
        });
        describe('Insert the holder ' + rackOut3 + '', function () {
            it('40 - Enter blank on lot number field', function () {
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            it('41 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            it('42 - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('43 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('44 - Enter a lot number logged', function () {
                cy.get('#lotNumber').clear();
                cy.get('#lotNumber').type(lotNumber, { delay: 100 });
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                ////cy.screenshot();;
            });
            it('45 - Enter a blank in holder in field', function () {
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            it('46 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('47 - Enter a wrong holder in', function () {
                cy.get('#rack').type('RACK005', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            it('48 - Display error message " Holder not allowed!"', function () {
                cy.get('#swal2-title').should('contain', ' Holder not allowed!');
                ////cy.screenshot();;
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
            it('49 - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(rackOut3, { delay: 100 })
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('50 - Enter blank on ED Field', function () {
                ////cy.screenshot();;
                cy.get('#edIn').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('51 - Display error message "Wrong ED"', function () {
                cy.get('#swal2-title').should('contain', 'Wrong ED');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('52 - Enter correct ED', function () {
                cy.get('#edIn').clear();
                cy.get('#edIn').type(EDWashing, { delay: 100 })
                cy.get('#edIn').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('53 - Enter blank on Tray In', function () {
                ////cy.screenshot();;
                cy.get('#holderTray').type('{enter}');
                cy.wait(2000);
            });
            it('54 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('55 - Enter a wrong Tray In', function () {
                cy.get('#holderTray').type('RACK001', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#holderTray').type('{enter}');
                cy.wait(1000);
            });
            it('56 - Display error message "Holder not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Holder not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('57 - Enter correct Tray In', function () {
                cy.get('#holderTray').clear();
                cy.get('#holderTray').type(trayIn2, { delay: 100 })
                cy.get('#holderTray').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('58 - Enter blank on Tray In', function () {
                ////cy.screenshot();;
                cy.get('#qtyModal').type('{enter}');
                cy.wait(1000);
            });
            it('59 - Display error message "Wrong Quantity!"', function () {
                cy.get('#swal2-title').should('contain', 'Wrong Quantity!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('60 - Enter higher quanity on Tray In', function () {
                cy.get('#qtyModal').type('31', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#qtyModal').type('{enter}');
                cy.wait(1000);
            });
            it('61 - Display error message "Wrong Quantity!"', function () {
                cy.get('#swal2-title').should('contain', 'Wrong Quantity!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('62 - Enter correct quanity on Tray In', function () {
                cy.get('#qtyModal').clear();
                cy.get('#qtyModal').type('20', { delay: 100 })
                cy.get('#qtyModal').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('64 - Accept the data that already inserted', function () {
                cy.get('#btnAccept').click();
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Bicarbonato/Sodium Bicarbonate');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('not.be.visible');
                cy.get('#holderTray').should('not.be.disabled');
                cy.get('#qtyModal').should('not.be.disabled');
                cy.get('#bicarbonateNumber').should('be.disabled');
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('65 - Enter blank in user field', function () {
                ////cy.screenshot();;
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('66 - Enter blank in password field', function () {
                ////cy.screenshot();;
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            it('67 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('68 - Enter user', function () {
                cy.get('#userIn').type(user1, { delay: 100 })
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                ////cy.screenshot();;
            });
            it('69 - Enter wrong password', function () {
                cy.get('#passIn').type(user1 + 1, { delay: 100 })
                ////cy.screenshot();;
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            it('70 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            it('71 - Enter correct password', function () {
                cy.get('#userIn').type('{enter}');
                cy.get('#passIn').type(pass1, { delay: 100 })
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('not.be.disabled');
                ////cy.screenshot();;
            });
            it('72 - Save Information', function () {
                cy.get('#saveIn').click();
                cy.wait(2000);
            });
            it('73 - Display message "Data saved successfully!"', function () {
                cy.get('#swal2-title').should('contain', 'Data saved successfully!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('77 - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                ////cy.screenshot();;
            });
            it('75 - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                ////cy.screenshot();;
            });
        });
    });
    describe('Start Sodium Bicarbonate / Bicarbonato Out process', function () {
        describe('Take out the holder ' + trayIn2 + '', function () {
            it('76 - Enter blank on lot number field', function () {
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            it('77 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            it('78 - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('79 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('80 - Enter a lot number logged', function () {
                cy.get('#lotNumber').clear();
                cy.get('#lotNumber').type(lotNumber, { delay: 100 });
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                ////cy.screenshot();;
            });
            it('81 - Enter a blank in holder in field', function () {
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            it('82 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('83 - Enter a wrong holder in', function () {
                cy.get('#rack').type('RACK001', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            it('84 - Display error message "Holder not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Holder not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('85 - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(trayIn2, { delay: 100 })
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Wate');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                ////cy.screenshot();;
            });
            it('86 - Enter the same holder where we have the units (' + trayIn2 + ')', function () {
                cy.get('#rackOut').type(trayIn2, { delay: 100 })
                ////cy.screenshot();;
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Wate');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            it('87 - Display error message "Can not use the same  Holder!"', function () {
                cy.get('#swal2-title').should('contain', 'Can not use the same  Holder!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Wate');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            it('88 - Enter correct holder out', function () {
                cy.get('#rackOut').clear();
                cy.get('#rackOut').type(trayOut3, { delay: 100 })
                cy.get('#rackOut').type('{enter}');
                cy.wait(2000);
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Water');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                ////cy.screenshot();;
            });
            it('89 - Leave blank on user', function () {
                cy.get('#userOut').clear();
                ////cy.screenshot();;
                cy.get('#userOut').type('{enter}')
                cy.wait(1000)
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('90 - Leave blank on password', function () {
                cy.get('#passOut').clear();
                ////cy.screenshot();;
                cy.get('#passOut').type('{enter}')
                cy.wait(2000)
                cy.get('#passOut').should('be.empty');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('91 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('92 - Type a good user', function () {
                cy.get('#userOut').type(user1, { delay: 100 })
                cy.get('#userOut').type('{enter}')
                cy.wait(1000);
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                ////cy.screenshot();;
            });
            it('93 - Type a wrong password', function () {
                cy.get('#passOut').type('1004', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');

            });
            it('94 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('95 - Type a good password', function () {
                cy.get('#userOut').type('{enter}')
                cy.get('#passOut').clear();
                cy.get('#passOut').type(pass1, { delay: 100 })
                cy.get('#passOut').type('{enter}')
                cy.wait(2000);
                cy.get('#saveOut').should('not.be.disabled');
                cy.get('#rejectMin').should('be.enabled');
                cy.get('#rejectPlus').should('be.enabled');
                ////cy.screenshot();;
            });
            it('96 - Click on Take Out button', function () {
                cy.get('#saveOut').click();
                cy.wait(2000);
            });
            it('97 - Display warning message "Incomplete process time,  Do you want to continue?"', function () {
                cy.get('#swal2-title').should('contain', 'Incomplete process time,  Do you want to continue?');
                ////cy.screenshot();;
                cy.wait(2000);
                cy.get('button').contains('OK').click();
            });
            it('98 - Display message "Data saved successfully!"', function () {
                cy.get('#swal2-title').should('contain', 'Data saved successfully!');
                ////cy.screenshot();;
                cy.wait(2000);
                cy.get('button').contains('OK').click();
            });
            it('99 - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                ////cy.screenshot();;
            });
            it('100 - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                ////cy.screenshot();;
            });
        });
        describe('Take out the holder ' + trayIn + '', function () {
            it('101 - Enter blank on lot number field', function () {
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            it('102 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            it('103 - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                ////cy.screenshot();;
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('104 - Display error message "Lot not logged!"', function () {
                cy.get('#swal2-title').should('contain', 'Lot not logged!');
                ////cy.screenshot();;
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            it('105 - Enter a lot number logged', function () {
                cy.get('#lotNumber').clear();
                cy.get('#lotNumber').type(lotNumber, { delay: 100 });
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                ////cy.screenshot();;
            });
            it('106 - Enter a blank in holder in field', function () {
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            it('107 - Display error message "Blanks not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('108 - Enter a wrong holder in', function () {
                cy.get('#rack').type('RACK001', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            it('109 - Display error message "Holder not allowed!"', function () {
                cy.get('#swal2-title').should('contain', 'Holder not allowed!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            it('110 - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(trayIn, { delay: 100 })
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Wate');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                ////cy.screenshot();;
            });
            it('111 - Enter the same holder where we have the units (' + trayIn + ')', function () {
                cy.get('#rackOut').type(trayIn, { delay: 100 })
                ////cy.screenshot();;
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Wate');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            it('112 - Display error message "Can not use the same  Holder!"', function () {
                cy.get('#swal2-title').should('contain', 'Can not use the same  Holder!');
                ////cy.screenshot();;
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Wate');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            it('113 - Enter correct holder out', function () {
                cy.get('#rackOut').clear();
                cy.get('#rackOut').type(trayOut4, { delay: 100 })
                cy.get('#rackOut').type('{enter}');
                cy.wait(2000);
                cy.get('#ProcessOut').should('contain', 'Bicarbonato/Sodium Bicarbonate to Agua/Wate');
                cy.get('#edOut').should('have.value', EDWashing);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                ////cy.screenshot();;
            });
            it('114 - Leave blank on user', function () {
                cy.get('#userOut').clear();
                ////cy.screenshot();;
                cy.get('#userOut').type('{enter}')
                cy.wait(1000)
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('115 - Leave blank on password', function () {
                cy.get('#passOut').clear();
                ////cy.screenshot();;
                cy.get('#passOut').type('{enter}')
                cy.wait(2000)
                cy.get('#passOut').should('be.empty');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('116 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('117 - Type a good user', function () {
                cy.get('#userOut').type(user1, { delay: 100 })
                cy.get('#userOut').type('{enter}')
                cy.wait(1000);
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                ////cy.screenshot();;
            });
            it('118 - Type a wrong password', function () {
                cy.get('#passOut').type('1004', { delay: 100 })
                ////cy.screenshot();;
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');

            });
            it('119 - Display error message "Password or user incorrect!"', function () {
                cy.get('#swal2-title').should('contain', 'Password or user incorrect!');
                ////cy.screenshot();;
                cy.get('button').contains('OK').click();
                cy.wait(2000);
                cy.get('#userOut').should('not.be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            it('120 - Type a good password', function () {
                cy.get('#userOut').type('{enter}')
                cy.get('#passOut').clear();
                cy.get('#passOut').type(pass1, { delay: 100 })
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#saveOut').should('not.be.disabled');
                cy.get('#rejectMin').should('be.enabled');
                cy.get('#rejectPlus').should('be.enabled');
                ////cy.screenshot();;
            });
            it('121 - Waiting until the process time is complete', function () {
                cy.wait(91000);
                ////cy.screenshot();;
            });
            it('122 - Click on Take Out button', function () {
                cy.get('#saveOut').click();
                cy.wait(2000);
            });
            it('123 - Display message "Data saved successfully!"', function () {
                cy.get('#swal2-title').should('contain', 'Data saved successfully!');
                ////cy.screenshot();;
                cy.wait(2000);
                cy.get('button').contains('OK').click();
            });
            it('124 - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                ////cy.screenshot();;
            });
        });
    });
});