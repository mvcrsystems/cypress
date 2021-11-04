describe('Hydak A-15 (Top Coat)', function () {
	const lotNumber = '01218555';
	const ed = 'ED11683-001';
	const user = '6281';
	const pass = '6281';
	var i = 1;
	it('0' + i + ' - Coating Tracker Software', function () {
		cy.visit('http://sjo-testapp1/coatingtracker/index.php', {
			auth: {
				username: 'us\\wotracker',
				password: 'Microvention#44'
			}
		})
	});
	i++;
	it('0' + i + ' - Go to Hydak A-15 (Top Coat) Interface', function () {
		cy.wait(2000);
		cy.get('#rmcr').click({ force: true });
		cy.wait(2000);
		cy.get('a').contains('Hydak A-15 (Top Coat)').click();
		cy.wait(2000);
		cy.get('#hydDue').should('be.disabled');
		cy.get('#sample').should('be.disabled');
		cy.get('#ed').should('be.disabled');
		cy.get('#edDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it('0' + i + ' - Leave blank on Hydak Lot Number field', function () {
		cy.screenshot();
		cy.get('#lotNumber').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it('0' + i + " - Display error message 'Blanks not allowed!'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed!');
		cy.wait(1000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(1000);
		cy.get('#hydDue').should('be.disabled');
		cy.get('#sample').should('be.disabled');
		cy.get('#ed').should('be.disabled');
		cy.get('#edDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it('0' + i + ' - Type a Hydak Lot Number', function () {
		cy.get('#lotNumber').type(lotNumber, { delay: 100 });
		cy.screenshot();
		cy.get('#lotNumber').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it('0' + i + ' - Leave blank on  Fridge (Thermometer) field ', function () {
		cy.screenshot();
		cy.get('#ed').type('{enter}');
		cy.wait(1000);
		cy.get('#sample').should('be.disabled');
		cy.get('#ed').should('not.be.disabled');
		cy.get('#edDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;

	it('0' + i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(1000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(1000);
	});
	i++;
	it(i + ' - Type a Fridge (Thermometer) ', function () {
		cy.get('#ed').type(ed, { delay: 100 });
		cy.get('#ed').type('{enter}');
		cy.wait(1000);
		cy.get('#sample').should('be.disabled');
		cy.get('#edDueCheck').should('have.class', 'form-group has-success has-feedback');
		cy.get('#edDue').should('be.disabled');
		cy.get('#usr').should('not.be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Type a Fridge (Thermometer) with expired calibration', function () {
		cy.get('#ed').clear();
		cy.get('#ed').type('ED2207-039', { delay: 100 });
		cy.screenshot();
		cy.get('#ed').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Expired Calibration'", function () {
		cy.get('#swal2-title').contains('Expired Calibration');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#edDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + ' - Type a wrong exp date', function () {
		cy.get('#calModal').type('{leftarrow}')
		cy.wait(1000);
		cy.get('#calModal').type('{enter}')
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
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(1000);
		cy.get('#passModal').should('be.disabled')
		cy.get('#btnCalSave').should('be.disabled');
	});
	i++;
	it(i + ' - Type a good user', function () {
		cy.get('#userModal').type(user, { delay: 100 })
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
		cy.get('#swal2-title').contains('Password or user incorrect!');
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
		cy.get('#passModal').type('6281', { delay: 100 })
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
	it(i + " - Display error message 'Data saved successfully!'", function () {
		cy.get('#swal2-title').contains('Data saved successfully!');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(1000);
		cy.screenshot();
	});
	it(i + ' - Leave blank on user input', function () {
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
		cy.wait(1000);
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
		cy.get('#saveBut').should('be.disabled');
		cy.get('#pwd').should('not.be.disabled')
		cy.screenshot();
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
		cy.wait(1000);
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
		cy.get('#pwd').type(pass, { delay: 100 })
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
		cy.wait(1000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#hydDue').should('be.disabled');
		cy.get('#sample').should('be.disabled');
		cy.get('#ed').should('be.disabled');
		cy.get('#edDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + ' - Go back to  Raw Material Mix Interface', function () {
		cy.get('#rmcr').click({ force: true });
		cy.wait(1000);
		cy.screenshot();
	});
});