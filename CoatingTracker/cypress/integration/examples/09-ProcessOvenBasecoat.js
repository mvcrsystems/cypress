describe('Process lot', function () {
    const lotNumber = "1704275G5";
    const desciption = "Scepter Final Assy XC";
    const user3 = '1005';
    const pass3 = '1005';
    const viewer = "CR Viewer";
    var treeIn = "TREE001";
    var rackIn = "RACK003";
    var rackIn2 = "RACK002";
    var edPlasma = "ED11255-003";
    var edOven = "ED11282-004";
    var user1 = 1111;
    var pass1 = 1234;
    var i = 1;
    it('0' + i + ' - Coating Tracker Software', function () {
        cy.visit('http://sjo-testapp1/coatingtracker/index.php', {
            auth: {
                username: 'us\\wotracker',
                password: 'Microvention#44'
            }
        })
        cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Go to Process lot interface', function () {
        cy.get('a').contains('Process').click();
        cy.wait(1000);
        cy.get('#lotNumber').should('not.be.disabled');
    });
    i++;
    describe('Starts the Oven - Horno / Base Coat In process', function () {/*
        describe('Enter the rack ' + rackIn + '', function () {
            it('0' + i + ' - Enter blank on lot number field', function () {
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            i++;
            it('0' + i + '- Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            i++;
            it('0' + i + ' - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it('0' + i + ' - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it('0' + i + ' - Enter a lot number logged', function () {
                cy.get('#lotNumber').clear();
                cy.get('#lotNumber').type(lotNumber, { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.screenshot();
            });
            i++;
            it('0' + i + ' - Enter a blank in holder in field', function () {
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            i++;
            it('0' + i + ' - Display error message "Blanks not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            i++;
            it(i + ' - Enter a wrong holder in', function () {
                cy.get('#rack').type(treeIn, { delay: 100 })
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Holder Empty"', function () {
                cy.get('#swalTitle').should('contain', 'Holder Empty');
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
            i++;
            it(i + ' - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(rackIn, { delay: 100 });
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Enter blank on ED field', function () {
                cy.screenshot();
                cy.get('#edIn').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong ED"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong ED');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter wrong ED value', function () {
                cy.get('#edIn').clear();
                cy.get('#edIn').type(edPlasma, { delay: 100 });
                cy.screenshot();
                cy.get('#edIn').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong ED"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong ED');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter ED with experid calibration', function () {
                cy.get('#edIn').clear();
                cy.get('#edIn').type('ED11282-012', { delay: 100 });
                cy.get('#edIn').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#parameterModal').should('not.be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#btnValidate').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Display error message "Expired Calibration"', function () {
                cy.get('#swalTitle').should('contain', 'Expired Calibration');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Type a wrong exp date', function () {
                cy.get('#calModal').click();
                cy.get('#calModal').type('{leftarrow}')
                cy.wait(1000);
                cy.wait(1000);
                cy.get('#userModal').should('be.disabled');
                cy.get('#passModal').should('be.disabled');
                cy.get('#btnCalSave').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Type a good exp date', function () {
                cy.get('#calModal').click();
                cy.get('#calModal').type('{rightarrow}')
                cy.get('#calModal').type('{rightarrow}')
                cy.wait(1000);
                cy.get('#userModal').should('not.be.disabled');
                cy.get('#passModal').should('be.disabled');
                cy.get('#btnCalSave').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Leave blank on user input', function () {
                cy.screenshot();
                cy.get('#userModal').type('{enter}')
                cy.wait(2000);
                cy.get('#passModal').should('be.disabled')
                cy.get('#btnCalSave').should('be.disabled');
            });
            i++;
            it(i + " - Display error message 'Blanks not allowed'", function () {
                cy.get('#swalTitle').contains('Blanks not allowed');
                cy.wait(2000);
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(1000);
                cy.get('#passModal').should('be.disabled')
                cy.get('#btnCalSave').should('be.disabled');
            });
            i++;
            it(i + ' - Type a good user', function () {
                cy.get('#userModal').type(3333, { delay: 100 })
                cy.get('#userModal').type('{enter}')
                cy.wait(1000);
                cy.screenshot();
                cy.get('#btnCalSave').should('be.disabled');
                cy.get('#passModal').should('not.be.disabled')
            });
            i++;
            it(i + ' - Type a wrong password', function () {
                cy.get('#passModal').type('1004', { delay: 100 })
                cy.screenshot();
                cy.get('#passModal').type('{enter}')
                cy.wait(1000);
            });
            i++;
            it(i + " - Display error message 'Password or user incorrect!'", function () {
                cy.get('#swalTitle').contains('Password or user incorrect!');
                cy.wait(2000);
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(1000);
                cy.get('#passModal').should('not.be.disabled')
                cy.get('#btnCalSave').should('be.disabled');
            });
            i++;
            it(i + ' - Type a good password', function () {
                cy.get('#userModal').type('{enter}')
                cy.get('#passModal').clear();
                cy.get('#passModal').type('1234', { delay: 100 })
                cy.get('#passModal').type('{enter}')
                cy.wait(1000);
                cy.get('#btnCalSave').should('not.be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Click on Save change button', function () {
                cy.get('#btnCalSave').click();
                cy.wait(2000);
            });
            i++;
            it(i + " - Display  message 'Data saved successfully!'", function () {
                cy.get('#swalTitle').contains('Data saved successfully!');
                cy.wait(2000);
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#btnValidate').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it('18 - Enter higher Oven Temperature value', function () {
                cy.get('#tempModal').type('150', { delay: 100 });
                cy.screenshot();
                cy.get('#tempModal').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong Temperature"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong Temperature');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-error has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#btnValidate').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter smaller Oven Temperature value', function () {
                cy.get('#tempModal').clear();
                cy.get('#tempModal').type('15', { delay: 100 });
                cy.screenshot();
                cy.get('#tempModal').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong Temperature"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong Temperature');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-error has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#btnValidate').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter correct Oven Temperature value', function () {
                cy.get('#tempModal').clear();
                cy.get('#tempModal').type('130', { delay: 100 });
                cy.get('#tempModal').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-success has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#btnValidate').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Accept the Oven Temperature value', function () {
                cy.get('#btnValidate').click();
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('not.be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-success has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#btnValidate').should('not.be.disabled');
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + '- Enter blank in user field', function () {
                cy.screenshot();
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter blank in password field', function () {
                cy.screenshot();
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter user', function () {
                cy.get('#userIn').type(user1, { delay: 100 })
                cy.screenshot();
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter wrong password', function () {
                cy.get('#passIn').type(user1 + 1, { delay: 100 })
                cy.screenshot();
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter correct password', function () {
                cy.get('#userIn').type('{enter}');
                cy.get('#passIn').type(pass1, { delay: 100 })
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('not.be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Save Information', function () {
                cy.get('#saveIn').click();
                cy.wait(2000);
            });
            i++;
            it(i + ' - Display message "Data saved successfully!"', function () {
                cy.get('#swalTitle').should('contain', 'Data saved successfully!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            i++;
            it(i + ' - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                cy.screenshot();
            });
            i++;
            it(i + ' - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                cy.screenshot();
            });
            i++;
        });
        describe('Enter the rack ' + rackIn2 + '', function () {
            it(i + 'Enter blank on lot number field', function () {
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            i++;
            it(i + ' - Display error message "Lot not logged!"', function () {
                cy.screenshot();
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            i++;
            it(i + ' - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it(i + ' - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it(i + ' - Enter a lot number logged', function () {
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
            i++;
            it(i + ' - Enter a blank in holder in field', function () {
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            i++;

            it(i + ' - Display error message "Blanks not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            i++;

            it(i + ' - Enter a wrong holder in', function () {
                cy.get('#rack').type(treeIn, { delay: 100 })
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            i++;

            it(i + '- Display error message "Holder Empty"', function () {
                cy.get('#swalTitle').should('contain', 'Holder Empty');
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
            i++;
            it(i + ' - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(rackIn2, { delay: 100 });
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Enter blank on ED field', function () {
                cy.screenshot();
                cy.get('#edIn').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong ED"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong ED');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter wrong ED value', function () {
                cy.get('#edIn').clear();
                cy.get('#edIn').type(edPlasma, { delay: 100 });
                cy.screenshot();
                cy.get('#edIn').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong ED"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong ED');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter correct ED value', function () {
                cy.get('#edIn').clear();
                cy.get('#edIn').type(edOven, { delay: 100 });
                cy.get('#edIn').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#btnValidate').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Enter higher Oven Temperature value', function () {
                cy.get('#tempModal').type('150', { delay: 100 });
                cy.screenshot();
                cy.get('#tempModal').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong Temperature"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong Temperature');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-error has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#btnValidate').should('be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter smaller Oven Temperature value', function () {
                cy.get('#tempModal').clear();
                cy.get('#tempModal').type('15', { delay: 100 });
                cy.screenshot();
                cy.get('#tempModal').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Wrong Temperature"', function () {
                cy.get('#swalTitle').should('contain', 'Wrong Temperature');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-error has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#btnValidate').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter correct Oven Temperature value', function () {
                cy.get('#tempModal').clear();
                cy.get('#tempModal').type('130', { delay: 100 });
                cy.get('#tempModal').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-success has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#btnValidate').should('not.be.disabled');
                cy.get('#userIn').should('be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Accept the Oven Temperature value', function () {
                cy.get('#btnValidate').click();
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessIn').should('contain', 'Horno/Oven BC');
                cy.get('#qtyIn').should('be.disabled');
                cy.get('#edIn').should('not.be.disabled');
                cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#parameterModal').should('not.be.visible');
                cy.get('#tempModal').should('not.be.disabled');
                cy.get('#tempSpan').should('have.class', 'form-group has-success has-feedback');
                cy.get('#tempCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#btnValidate').should('not.be.disabled');
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Enter blank in user field', function () {
                cy.screenshot();
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter blank in password field', function () {
                cy.screenshot();
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter user', function () {
                cy.get('#userIn').type(user1, { delay: 100 })
                cy.screenshot();
                cy.get('#userIn').type('{enter}');
                cy.wait(2000);
                cy.get('#passIn').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter wrong password', function () {
                cy.get('#passIn').type(user1 + 1, { delay: 100 })
                cy.screenshot();
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
                cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#userIn').should('not.be.disabled');
                cy.get('#passIn').should('be.disabled');
                cy.get('#saveIn').should('be.disabled');
            });
            i++;
            it(i + ' - Enter correct password', function () {
                cy.get('#userIn').type('{enter}');
                cy.get('#passIn').type(pass1, { delay: 100 })
                cy.get('#passIn').type('{enter}');
                cy.wait(2000);
                cy.get('#saveIn').should('not.be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Save Information', function () {
                cy.get('#saveIn').click();
                cy.wait(2000);
            });
            i++;
            it(i + ' - Display message "Data saved successfully!"', function () {
                cy.get('#swalTitle').should('contain', 'Data saved successfully!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            i++;
            it(i + ' - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                cy.screenshot();
            });
            i++;
            it(i + ' - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                cy.screenshot();
            });
        });
        i++;*/
    });
    describe('Starts Oven - Horno / Base Coat Out process', function () {
        describe('Take Out the holder ' + rackIn2 + '', function () {
            it(i + ' - Enter blank on lot number field', function () {
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            i++;
            it(i + ' - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            i++;
            it(i + ' - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it(i + ' - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it(i + ' - Enter a lot number logged', function () {
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
            i++;
            it(i + ' - Enter a blank in holder in field', function () {
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            i++;
            it(i + ' - Display error message "Blanks not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            i++;
            it(i + ' - Enter a wrong holder in', function () {
                cy.get('#rack').type(treeIn, { delay: 100 })
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Holder Empty"', function () {
                cy.get('#swalTitle').should('contain', 'Holder Empty');
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
            i++;
            it(i + ' - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(rackIn2, { delay: 100 });
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessOut').should('contain', 'Horno/Oven BC to Top Coat');
                cy.get('#edOut').should('have.value', edOven);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.screenshot();
            });
            i++;

            it(i + ' - Enter wrong value on holder out field', function () {
                cy.get('#rackOut').type(treeIn, { delay: 100 });
                cy.screenshot();
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Holder not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Holder not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessOut').should('contain', 'Horno/Oven BC to Top Coat');
                cy.get('#edOut').should('have.value', edOven);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rackOutput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            i++;
            it(i + ' - Enter correct holder out', function () {
                cy.get('#rackOut').clear();
                cy.get('#rackOut').type(rackIn2, { delay: 100 });
                cy.get('#rackOut').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessOut').should('contain', 'Horno/Oven BC to Top Coat');
                cy.get('#edOut').should('have.value', edOven);
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
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
            i++;
            it(i + ' - Leave blank on user', function () {
                cy.get('#userOut').clear();
                cy.screenshot();
                cy.get('#userOut').type('{enter}')
                cy.wait(1000)
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            i++;
            it(i + ' - Leave blank on password', function () {
                cy.get('#passOut').clear();
                cy.screenshot();
                cy.get('#passOut').type('{enter}')
                cy.wait(2000)
                cy.get('#passOut').should('be.empty');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
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
            i++;
            it(i + ' - Type a good user', function () {
                cy.get('#userOut').type(user1, { delay: 100 })
                cy.get('#userOut').type('{enter}')
                cy.wait(1000);
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Type a wrong password', function () {
                cy.get('#passOut').type('1004', { delay: 100 })
                cy.screenshot();
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
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
            i++;
            it(i + ' - Type a good password', function () {
                cy.get('#userOut').type('{enter}')
                cy.get('#passOut').clear();
                cy.get('#passOut').type(pass1, { delay: 100 })
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#saveOut').should('not.be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.wait(1000);
                cy.screenshot();
            });
            i++;
            it(i + ' - Click on Take Out button', function () {
                cy.get('#saveOut').click();
                cy.wait(2000);
                cy.screenshot();
            });
            i++;
            it(i + ' - Display warning message "Incomplete process time,  Do you want to continue?"', function () {
                cy.get('#swalTitle').should('contain', 'Incomplete process time,  Do you want to continue?');
                cy.screenshot();
                cy.wait(2000);
                cy.get('button').contains('OK').click();
            });
            i++;
            it(i + ' - Display message "Data saved successfully!"', function () {
                cy.get('#swalTitle').should('contain', 'Data saved successfully!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
            });
            i++;
            it(i + ' - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                cy.screenshot();
            });
            i++;
            it(i + ' - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                cy.screenshot();
            });
        });
        i++;
        describe('Take Out the holder ' + rackIn + '', function () {
            it(i + ' - Enter blank on lot number field', function () {
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#desc').should('contain', 'Lot not logged');
            });
            i++;
            it(i + ' - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
            });
            i++;
            it(i + ' - Enter a lot number not logged', function () {
                cy.get('#lotNumber').type('170575G7', { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it(i + ' - Display error message "Lot not logged!"', function () {
                cy.get('#swalTitle').should('contain', 'Lot not logged!');
                cy.screenshot();
                cy.get('#desc').should('contain', 'Lot not logged');
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rack').should('be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
            });
            i++;
            it(i + ' - Enter a lot number logged', function () {
                cy.get('#lotNumber').clear();
                cy.get('#lotNumber').type(lotNumber, { delay: 100 });
                cy.screenshot();
                cy.get('#lotNumber').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
                cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
                cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
            });
            i++;
            it(i + ' - Enter a blank in holder in field', function () {
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
                cy.get('#desc').should('contain', desciption);
                cy.get('#rack').should('not.be.disabled');
            });
            i++;
            it(i + ' - Display error message "Blanks not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
            });
            i++;
            it(i + ' - Enter a wrong holder in', function () {
                cy.get('#rack').type(treeIn, { delay: 100 })
                cy.screenshot();
                cy.get('#rack').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Holder Empty"', function () {
                cy.get('#swalTitle').should('contain', 'Holder Empty');
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
            i++;
            it(i + ' - Enter correct holder in', function () {
                cy.get('#rack').clear();
                cy.get('#rack').type(rackIn, { delay: 100 });
                cy.get('#rack').type('{enter}');
                cy.wait(2000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessOut').should('contain', 'Horno/Oven BC to Top Coat');
                cy.get('#edOut').should('have.value', 'ED11282-012');
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Enter wrong value on holder out field', function () {
                cy.get('#rackOut').type(treeIn, { delay: 100 });
                cy.screenshot();
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
            });
            i++;
            it(i + ' - Display error message "Holder not allowed!"', function () {
                cy.get('#swalTitle').should('contain', 'Holder not allowed!');
                cy.screenshot();
                cy.wait(1000);
                cy.get('button').contains('OK').click();
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessOut').should('contain', 'Horno/Oven BC to Top Coat');
                cy.get('#edOut').should('have.value', 'ED11282-012');
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rackOutput').should('have.class', 'form-group has-error has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
                cy.get('#qtyOut').should('be.disabled');
                cy.get('#rejectOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.get('#userOut').should('be.disabled');
                cy.get('#passOut').should('be.disabled');
                cy.get('#saveOut').should('be.disabled');
            });
            i++;
            it(i + ' - Enter correct holder out', function () {
                cy.get('#rackOut').clear();
                cy.get('#rackOut').type(rackIn, { delay: 100 });
                cy.get('#rackOut').type('{enter}');
                cy.wait(1000);
                cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
                cy.get('#ProcessOut').should('contain', 'Horno/Oven BC to Top Coat');
                cy.get('#edOut').should('have.value', 'ED11282-012');
                cy.get('#rackOut').should('not.be.disabled');
                cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
                cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
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
            i++;
            it(i + ' - Leave blank on user', function () {
                cy.get('#userOut').clear();
                cy.screenshot();
                cy.get('#userOut').type('{enter}')
                cy.wait(1000)
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveIn').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            i++;
            it(i + ' - Leave blank on password', function () {
                cy.screenshot();
                cy.get('#passOut').clear();
                cy.get('#passOut').type('{enter}')
                cy.wait(2000)
                cy.get('#passOut').should('be.empty');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
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
            i++;
            it(i + ' - Type a good user', function () {
                cy.get('#userOut').type(user1, { delay: 100 })
                cy.get('#userOut').type('{enter}')
                cy.wait(1000);
                cy.get('#passOut').should('not.be.disabled');
                cy.get('#saveOut').should('be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.screenshot();
            });
            i++;
            it(i + ' - Type a wrong password', function () {
                cy.get('#passOut').type('1004', { delay: 100 })
                cy.screenshot();
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
            });
            i++;
            it(i + ' - Display error message "Password or user incorrect!"', function () {
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
            i++;
            it(i + ' - Type a good password', function () {
                cy.get('#userOut').type('{enter}')
                cy.get('#passOut').clear();
                cy.get('#passOut').type(pass1, { delay: 100 })
                cy.get('#passOut').type('{enter}')
                cy.wait(1000);
                cy.get('#saveOut').should('not.be.disabled');
                cy.get('#rejectMin').should('be.disabled');
                cy.get('#rejectPlus').should('be.disabled');
                cy.wait(1000);
                cy.screenshot();
            });
            i++;
            it(i + ' - Wait until the process time is done', function () {
                cy.wait(42000);
            });
            i++;
            it(i + ' - Click on Take Out button', function () {
                cy.get('#saveOut').click();
                cy.wait(2000);
            });
            i++;
            it(i + ' - Display message "Data saved successfully!"', function () {
                cy.get('#swalTitle').should('contain', 'Data saved successfully!');
                cy.screenshot();
                cy.get('button').contains('OK').click();
                cy.wait(2000);
            });
            i++;
            it(i + ' - Go to Viewer', function () {
                cy.get('a').contains(viewer).click();
                cy.wait(10000);
                cy.screenshot();
            });
            i++;
            it(i + ' - Go back to Process interface', function () {
                cy.get('a').contains('Process').click();
                cy.wait(1000);
                cy.screenshot();
            });
        });
    });
    i++;
    describe('Remove lot from on-hold status (Oven - Horno / Base Coat)', function () {
        it(i + ' - Go to Lot log/Receipt interface', function () {
            cy.get('a').contains('log/Receipt').click();
            cy.wait(2000);
            cy.get('#che' + lotNumber).should('be.checked');
            cy.screenshot();
        });
        i++;
        it(i + ' - Open On hold section', function () {
            cy.get('#che' + lotNumber).click();
            cy.wait(2000);
            cy.get('#lotComments').should('be.disabled').and('have.value', lotNumber);
            cy.get('#comment').should('not.be.disabled').and('be.empty');
            cy.get('#usrModal').should('not.be.disabled')
            cy.get('#pwdModal').should('be.disabled')
            cy.get('#btnComment').should('be.disabled')
            cy.screenshot();
        });
        i++;
        it(i + ' - Leave blank on comments input', function () {
            cy.get('#comment').focus();
            cy.wait(1000);
            cy.screenshot();
        });
        i++;
        it(i + ' - Leave Blank on user input (Comments field with blank)', function () {
            cy.get('#comment').should('be.empty');
            cy.get('#usrModal').should('not.be.disabled')
            cy.screenshot();
            cy.get('#usrModal').type('{enter}')
            cy.wait(1000);
            cy.get('#pwdModal').should('not.be.disabled')
            cy.get('#btnComment').should('be.disabled')
        });
        i++;
        it(i + ' - Leave Blank on password input (Comments field with blank)', function () {
            cy.screenshot();
            cy.get('#pwdModal').type('{enter}')
            cy.wait(1000);
        });
        i++;
        it(i + ' - Display error message "User not allowed"', function () {
            cy.get('#swalTitle').should('contain', 'User not allowed');
            cy.screenshot();
            cy.wait(2000);
            cy.get('button').contains('OK').click();
            cy.get('#usrModal').should('not.be.disabled');
            cy.get('#pwdModal').should('not.be.disabled');
            cy.get('#btnComment').should('be.disabled');
        });
        i++;
        it(i + ' - Type a good user (Comments field with blank)', function () {
            cy.get('#usrModal').should('be.empty');
            cy.get('#usrModal').type(user3, { delay: 100 })
            cy.get('#usrModal').type('{enter}')
            cy.wait(1000);
            cy.get('#pwdModal').should('not.be.disabled')
            cy.get('#btnComment').should('be.disabled')
            cy.screenshot();
        });
        i++;
        it(i + ' - Type a wrong password  (Comments field with blank)', function () {
            cy.get('#pwdModal').type('1004', { delay: 100 })
            cy.screenshot();
            cy.get('#pwdModal').type('{enter}')
            cy.wait(2000);
        });
        i++;
        it(i + ' - Display error message "User not allowed"', function () {
            cy.get('#swalTitle').should('contain', 'User not allowed');
            cy.screenshot();
            cy.wait(2000);
            cy.get('button').contains('OK').click();
            cy.get('#usrModal').should('not.be.disabled');
            cy.get('#pwdModal').should('not.be.disabled');
            cy.get('#btnComment').should('be.disabled');
        })
        i++;
        it(i + ' - Type a good password  (Comments field with blank)', function () {
            cy.get('#pwdModal').clear();
            cy.get('#usrModal').type('{enter}');
            cy.get('#pwdModal').type(pass3, { delay: 100 });
            cy.get('#pwdModal').type('{enter}');
            cy.wait(2000);
            cy.get('#btnComment').should('not.be.disabled');
            cy.screenshot();
        });
        i++;
        it(i + ' - Click on Insert Comment button', function () {
            cy.get('#btnComment').click();
            cy.wait(2000);
        });
        i++;
        it(i + ' - Display error message "Blanks not allowed!"', function () {
            cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
            cy.screenshot();
            cy.wait(2000);
            cy.get('button').contains('OK').click();
            cy.get('#usrModal').should('not.be.disabled');
            cy.get('#pwdModal').should('be.disabled');
            cy.get('#btnComment').should('be.disabled');
        })
        i++;
        it(i + ' - Type Reason (on-hold)', function () {
            cy.get('#comment').type('Remove on hold status (Oven - Horno / Base Coat)', { delay: 100 })
            cy.wait(1000);
            cy.screenshot();
        });
        i++;
        it(i + ' - Leave Blank on user input ', function () {
            cy.get('#usrModal').clear();
            cy.screenshot();
            cy.get('#usrModal').type('{enter}')
            cy.wait(1000);
        });
        i++;
        it(i + ' - Leave Blank on password input ', function () {
            cy.get('#pwdModal').clear();
            cy.screenshot();
            cy.get('#pwdModal').type('{enter}')
            cy.wait(2000);
        });
        i++;
        it(i + ' - Display error message "User not allowed"', function () {
            cy.get('#swalTitle').should('contain', 'User not allowed');
            cy.screenshot();
            cy.wait(2000);
            cy.get('button').contains('OK').click();
            cy.wait(1000);
        });
        i++;
        it(i + ' - Type a good user', function () {
            cy.get('#usrModal').type(user3, { delay: 100 })
            cy.get('#usrModal').type('{enter}')
            cy.wait(1000);
            cy.screenshot();
        });
        i++;
        it(i + ' - Type a wrong password', function () {
            cy.get('#pwdModal').type('1004', { delay: 100 })
            cy.screenshot();
            cy.get('#pwdModal').type('{enter}')
            cy.wait(2000);
        });
        i++;
        it(i + ' - Display error message "User not allowed"', function () {
            cy.get('#swalTitle').should('contain', 'User not allowed');
            cy.screenshot();
            cy.wait(2000);
            cy.get('button').contains('OK').click();
        });
        i++;
        it(i + ' - Type a good password', function () {
            cy.get('#pwdModal').clear();
            cy.get('#usrModal').type('{enter}');
            cy.get('#pwdModal').type(pass3, { delay: 100 });
            cy.get('#pwdModal').type('{enter}');
            cy.wait(2000);
            cy.screenshot();
        });
        i++;
        it(i + ' - Click on Insert Comment button', function () {
            cy.get('#btnComment').click();
            cy.wait(2000);
        });
        i++;
        it(i + ' - Display message "Data saved successfully!"', function () {
            cy.get('#swalTitle').should('contain', 'Data saved successfully!');
            cy.screenshot();
            cy.wait(2000);
            cy.get('button').contains('OK').click();
            cy.wait(2000);
            cy.get('#che' + lotNumber).should('not.be.checked');
        });
    });
});