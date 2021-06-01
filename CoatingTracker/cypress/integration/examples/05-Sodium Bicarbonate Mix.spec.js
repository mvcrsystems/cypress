describe('Sodium Bicarbonate Mix', function () {
	const soduimHigher = "10.21";
	const soduimSmaller = "9.79";
	const sodium = "9.81";
	const wrongSodiumRev = "1.00";
	const correctSodiumRev = "A";
	const sodiumLot = "101010";
	const waterHigher = "2041";
	const waterSmaller = "1959";
	const water = "1961";
	const wrongWaterRev = "1.00";
	const correctWaterRev = "B"
	const waterLot = "202020";
	const ed = 'ED2288-005';
	const user = '1005';
	const pass = '1005';
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
	it('0' + i + ' - Go to Sodium Bicarbonate Mix Interface', function () {
		cy.wait(2000);
		cy.get('#rmcr').click({ force: true });
		cy.wait(2000);
		cy.get('a').contains('Sodium Bicarbonate Mix').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('not.be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;

	it('0' + i + ' - Leave blank on Bicarbonate value field', function () {
		cy.screenshot();
		cy.get('#bicarbonate').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it('0' + i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('not.be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;

	it('0' + i + ' - Type a Bicarbonate value out of range', function () {
		cy.get('#bicarbonate').type(soduimHigher, { delay: 100 });
		cy.get('#bicarbonate').type('{enter}');
		cy.wait(1000);
		cy.get('#bic').should('have.class', 'form-group has-error has-feedback');
		cy.get('#bicCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
		cy.wait(2000);
		cy.screenshot();
		cy.get('#bicarbonate').clear();
		cy.get('#bicarbonate').type(soduimSmaller, { delay: 100 });
		cy.get('#bicarbonate').type('{enter}')
		cy.wait(1000);
		cy.get('#bic').should('have.class', 'form-group has-error has-feedback');
		cy.get('#bicCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
		cy.screenshot();
	});
	i++;
	it('0' + i + ' - Type a correct Bicarbonate value', function () {
		cy.get('#bicarbonate').clear();
		cy.get('#bicarbonate').type(sodium, { delay: 100 });
		cy.get('#bicarbonate').type('{enter}');
		cy.wait(2000);
		cy.get('#bic').should('have.class', 'form-group has-success has-feedback');
		cy.get('#bicCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
		cy.get('#bicRev').should('not.be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it('0' + i + ' - Leave blank on Bicarbonate rev  ', function () {
		cy.screenshot();
		cy.get('#bicRev').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it('0' + i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicRev').should('not.be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it('0' + i + ' - Type a numbers on Bicarbonate rev  ', function () {
		cy.screenshot();
		cy.get('#bicRev').type(wrongSodiumRev, { delay: 100 });
		cy.wait(1000);
		cy.screenshot();
		cy.get('#bicRev').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
		cy.get('#swal2-title').contains('Incorrect Format, Only letters');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicRev').should('not.be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + ' - Type a correct Bicarbonate rev  ', function () {
		cy.get('#bicRev').type(correctSodiumRev, { delay: 100 });
		cy.wait(1000);
		cy.get('#bicRev').type('{enter}');
		cy.wait(1000);
		cy.get('#bicLot').should('not.be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Leave blank on Bicarbonate solution lot  ', function () {
		cy.screenshot();
		cy.get('#bicLot').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicLot').should('not.be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + ' - Type a solution Bicarbonate lot  ', function () {
		cy.get('#bicLot').type(sodiumLot, { delay: 100 });
		cy.wait(1000);
		cy.get('#bicLot').type('{enter}');
		cy.wait(1000);
		cy.get('#bicDue').should('not.be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('not.be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Type a wrong Bicarbonate exp date ', function () {
		cy.get('#bicDue').type('{leftarrow}')
		cy.wait(1000);
		cy.get('#bicDue').type('{enter}')
		cy.wait(1000);
		cy.get('#bicDueCheck').should('have.class', 'form-group has-error has-feedback');
		cy.get('#bicDue').should('not.be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Type a good Bicarbonate exp date ', function () {
		cy.get('#bicLot').type('{enter}');
		cy.get('#bicDue').type('{rightarrow}')
		cy.get('#bicDue').type('{enter}')
		cy.wait(1000);
		cy.get('#bicDueCheck').should('have.class', 'form-group has-success has-feedback');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('not.be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Leave blank on Scale ED  ', function () {
		cy.screenshot();
		cy.get('#scale').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#scale').should('not.be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});

	i++;
	it(i + ' - Type a Scale ED', function () {
		cy.get('#scale').type(ed, { delay: 100 });
		cy.get('#scale').type('{enter}');
		cy.wait(2000);
		cy.get('#scaleDueCheck').should('have.class', 'form-group has-success has-feedback');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('not.be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Type a Scale ED with expired calibration', function () {
		cy.get('#scale').clear();
		cy.get('#scale').type('ED2288-003', { delay: 100 });
		cy.screenshot();
		cy.get('#scale').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Expired Calibration'", function () {
		cy.get('#swal2-title').contains('Expired Calibration');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#scale').should('not.be.disabled');
		cy.get('#scaleDue').should('be.disabled');
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
		cy.get('#passModal').type('1005', { delay: 100 })
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
	i++;
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
	it(i + " - Display error message 'Password or user incorrect!", function () {
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
	it(i + " - Display error message 'Password or user incorrect!", function () {
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
		cy.get('#pwd').type(pass, { delay: 100 })
		cy.get('#pwd').type('{enter}')
		cy.get('#saveBut').should('not.be.disabled');
		cy.wait(3000);
		cy.screenshot();
	});
	i++;
	it(i + ' - Click on Save button', function () {
		cy.get('#saveBut').click();
		cy.wait(2000);
	});
	i++;
	it(i + " - Display message 'Data saved successfully!", function () {
		cy.get('#swal2-title').contains('Data saved successfully!');
		cy.wait(2000);
		cy.get('button').contains('OK').click();
		cy.wait(1000);
	});
	i++;
	it(i + ' - Click on Sodium Bicarbonate Number button', function () {
		cy.wait(3000);
		cy.get('#btnCons0').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('not.be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Leave blank on Water field', function () {
		cy.screenshot();
		cy.get('#water').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('not.be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
	});
	i++;

	it(i + ' - Type a Water value out of range', function () {
		cy.get('#water').type(waterHigher, { delay: 100 });
		cy.get('#water').type('{enter}');
		cy.wait(1000);
		cy.get('#wat').should('have.class', 'form-group has-error has-feedback');
		cy.get('#watCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
		cy.wait(2000);
		cy.screenshot();
		cy.get('#water').clear();
		cy.get('#water').type(waterSmaller, { delay: 100 });
		cy.get('#water').type('{enter}')
		cy.wait(1000);
		cy.get('#wat').should('have.class', 'form-group has-error has-feedback');
		cy.get('#watCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
		cy.screenshot();
	});
	i++;
	it(i + ' - Type a correct Water value', function () {
		cy.get('#water').clear();
		cy.get('#water').type(water, { delay: 100 });
		cy.get('#water').type('{enter}');
		cy.wait(2000);
		cy.get('#wat').should('have.class', 'form-group has-success has-feedback');
		cy.get('#watCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#waterRev').should('not.be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Leave blank on Water rev  ', function () {
		cy.screenshot();
		cy.get('#waterRev').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#waterRev').should('not.be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
	});
	i++;
	it(i + ' - Type a numbers on Water rev  ', function () {
		cy.get('#waterRev').type(wrongWaterRev, { delay: 100 });
		cy.wait(1000);
		cy.screenshot();
		cy.get('#waterRev').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
		cy.get('#swal2-title').contains('Incorrect Format, Only letters');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#waterRev').should('not.be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
	});
	i++;
	it(i + ' - Type a correct Water rev  ', function () {
		cy.get('#waterRev').type(correctWaterRev, { delay: 100 });
		cy.wait(1000);
		cy.get('#waterRev').type('{enter}');
		cy.wait(1000);
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#waterLot').should('not.be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Leave blank on Water solution lot  ', function () {
		cy.screenshot();
		cy.get('#waterLot').type('{enter}');
		cy.wait(1000);
	});
	i++;
	it(i + " - Display error message 'Blanks not allowed'", function () {
		cy.get('#swal2-title').contains('Blanks not allowed');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#waterLot').should('not.be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
	});
	i++;
	it(i + ' - Type a solution Water lot  ', function () {
		cy.get('#waterLot').type(waterLot, { delay: 100 });
		cy.get('#waterLot').type('{enter}');
		cy.wait(1000);
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#waterDue').should('not.be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('not.be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Type a wrong Water exp date ', function () {
		cy.get('#waterDue').type('{leftarrow}')
		cy.get('#waterDue').type('{enter}')
		cy.wait(1000);
		cy.get('#watDueCheck').should('have.class', 'form-group has-error has-feedback');
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#waterDue').should('not.be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Type a good Water exp date ', function () {
		cy.get('#waterLot').type('{enter}');
		cy.get('#waterDue').type('{rightarrow}')
		cy.get('#waterDue').type('{enter}')
		cy.wait(1000);
		cy.get('#watDueCheck').should('have.class', 'form-group has-success has-feedback');
		cy.get('#bicarbonate').should('be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('not.be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#updateButton').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it(i + ' - Leave blank on user input', function () {
		cy.screenshot();
		cy.get('#usr').type('{enter}')
		cy.wait(2000);
		cy.get('#pwd').should('not.be.disabled')
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + ' - Leave blank on password input', function () {
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
		cy.get('#saveBut').should('be.disabled');
		cy.get('#pwd').should('not.be.disabled')
	});
	i++;

	it(i + ' - Type a wrong password', function () {
		cy.get('#pwd').type('1004', { delay: 100 })
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
		cy.get('#updateButton').should('be.disabled');
	});
	i++;
	it(i + ' - Type a good password', function () {
		cy.get('#usr').type('{enter}')
		cy.get('#pwd').clear();
		cy.get('#pwd').type(pass, { delay: 100 })
		cy.get('#pwd').type('{enter}')
		cy.wait(1000);
		cy.get('#updateButton').should('not.be.disabled');
	});
	i++;
	it(i + ' - Click on Update button', function () {
		cy.get('#updateButton').click();
		cy.wait(2000);
	});
	i++;
	it(i + " - Display message 'Data saved successfully!'", function () {
		cy.get('#swal2-title').contains('Data saved successfully!');
		cy.wait(2000);

		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
		cy.get('#bicarbonate').should('not.be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + ' - Waiting until mixing time has 00:02:00 as minimum', function () {
		cy.wait(120000);
		cy.screenshot();
	});
	i++;

	it(i + ' - Stop Timer', function () {
		cy.get('#stop0').click();
	});
	i++;
	it(i + ' - Type a wrong rack', function () {
		cy.get('#stop0').click();
		cy.get('#trayOne').type('RACK001', { delay: 100 });
		cy.get('#trayOne').type('{enter}')
	});
	i++;
	it(i + " - Display message 'Holder not allowed!'", function () {
		cy.get('#descTray').contains('Holder not allowed! / Holder no permitido!');
		cy.wait(2000);
		cy.screenshot();
		cy.wait(2000);
	});
	i++;
	it(i + ' - Type holer in use', function () {
		cy.get('#trayOne').clear();
		cy.get('#trayOne').type('TRAY001', { delay: 100 });
		cy.screenshot();
		cy.get('#trayOne').type('{enter}')
	});
	i++;
	it(i + " - Display message 'Holder in use! '", function () {
		cy.get('#descTray').contains('Holder in use! / Holder en uso!');
		cy.wait(2000);
		cy.screenshot();
		cy.wait(2000);
	});
	i++;
	it(i + ' - Type correct holder', function () {
		cy.get('#trayOne').clear();
		cy.get('#trayOne').type('TRAY002', { delay: 100 });
		cy.screenshot();
		cy.get('#trayOne').type('{enter}');
	});
	i++;
	it(i + ' - Click on save button', function () {
		cy.screenshot();
		cy.get('#btnSave').click();
	});
	i++;
	it(i + " - Display message 'Data saved successfully!'", function () {
		cy.get('#swal2-title').contains('Data saved successfully!');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(2000);
	});
	i++;
	it(i + " - Remove consecutive number", function () {
		cy.get('#btnDel0').click();
		cy.wait(2000);
		cy.get('button').contains('Remove').click();
		cy.wait(2000);
		cy.get('button').contains('OK').click();
		cy.get('#bicarbonate').should('not.be.disabled');
		cy.get('#bicRev').should('be.disabled');
		cy.get('#bicLot').should('be.disabled');
		cy.get('#bicDue').should('be.disabled');
		cy.get('#water').should('be.disabled');
		cy.get('#waterRev').should('be.disabled');
		cy.get('#waterLot').should('be.disabled');
		cy.get('#waterDue').should('be.disabled');
		cy.get('#scale').should('be.disabled');
		cy.get('#scaleDue').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	describe('Create a new consecutive', function () {
		it(i + '- Leave blank on Bicarbonate value field', function () {
			cy.screenshot();
			cy.get('#bicarbonate').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicarbonate').should('not.be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;

		it(i + ' - Type a Bicarbonate value out of range', function () {
			cy.get('#bicarbonate').type(soduimHigher, { delay: 100 });
			cy.get('#bicarbonate').type('{enter}');
			cy.wait(1000);
			cy.get('#bic').should('have.class', 'form-group has-error has-feedback');
			cy.get('#bicCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.wait(2000);
			cy.screenshot();
			cy.get('#bicarbonate').clear();
			cy.get('#bicarbonate').type(soduimSmaller, { delay: 100 });
			cy.get('#bicarbonate').type('{enter}')
			cy.wait(1000);
			cy.get('#bic').should('have.class', 'form-group has-error has-feedback');
			cy.get('#bicCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.screenshot();
		});
		i++;
		it(i + '- Type a correct Bicarbonate value', function () {
			cy.get('#bicarbonate').clear();
			cy.get('#bicarbonate').type(sodium, { delay: 100 });
			cy.get('#bicarbonate').type('{enter}');
			cy.wait(2000);
			cy.get('#bic').should('have.class', 'form-group has-success has-feedback');
			cy.get('#bicCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
			cy.get('#bicRev').should('not.be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Bicarbonate rev  ', function () {
			cy.screenshot();
			cy.get('#bicRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicRev').should('not.be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a numbers on Bicarbonate rev  ', function () {
			cy.screenshot();
			cy.get('#bicRev').type(wrongSodiumRev, { delay: 100 });
			cy.wait(1000);
			cy.screenshot();
			cy.get('#bicRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
			cy.get('#swal2-title').contains('Incorrect Format, Only letters');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicRev').should('not.be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a correct Bicarbonate rev  ', function () {
			cy.get('#bicRev').type(correctSodiumRev, { delay: 100 });
			cy.wait(1000);
			cy.get('#bicRev').type('{enter}');
			cy.wait(1000);
			cy.get('#bicLot').should('not.be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Bicarbonate solution lot  ', function () {
			cy.screenshot();
			cy.get('#bicLot').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicLot').should('not.be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a solution Bicarbonate lot  ', function () {
			cy.get('#bicLot').type(sodiumLot, { delay: 100 });
			cy.wait(1000);
			cy.get('#bicLot').type('{enter}');
			cy.wait(1000);
			cy.get('#bicDue').should('not.be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('not.be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a wrong Bicarbonate exp date ', function () {
			cy.get('#bicDue').type('{leftarrow}')
			cy.wait(1000);
			cy.get('#bicDue').type('{enter}')
			cy.wait(1000);
			cy.get('#bicDueCheck').should('have.class', 'form-group has-error has-feedback');
			cy.get('#bicDue').should('not.be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a good Bicarbonate exp date ', function () {
			cy.get('#bicLot').type('{enter}');
			cy.get('#bicDue').type('{rightarrow}')
			cy.get('#bicDue').type('{enter}')
			cy.wait(1000);
			cy.get('#bicDueCheck').should('have.class', 'form-group has-success has-feedback');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('not.be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Scale ED  ', function () {
			cy.screenshot();
			cy.get('#scale').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#scale').should('not.be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;

		it(i + ' - Type a Scale ED', function () {
			cy.get('#scale').type(ed, { delay: 100 });
			cy.get('#scale').type('{enter}');
			cy.wait(2000);
			cy.get('#scaleDueCheck').should('have.class', 'form-group has-success has-feedback');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('not.be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a Scale ED with expired calibration', function () {
			cy.get('#scale').clear();
			cy.get('#scale').type('ED2288-003', { delay: 100 });
			cy.screenshot();
			cy.get('#scale').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Expired Calibration'", function () {
			cy.get('#swal2-title').contains('Expired Calibration');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#scale').should('not.be.disabled');
			cy.get('#scaleDue').should('be.disabled');
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
			cy.get('#passModal').type('1005', { delay: 100 })
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
		i++;
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
		it(i + " - Display error message 'Password or user incorrect!", function () {
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
		it(i + " - Display error message 'Password or user incorrect!", function () {
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
			cy.get('#pwd').type(pass, { delay: 100 })
			cy.get('#pwd').type('{enter}')
			cy.get('#saveBut').should('not.be.disabled');
			cy.wait(3000);
			cy.screenshot();
		});
		i++;
		it(i + ' - Click on Save button', function () {
			cy.get('#saveBut').click();
			cy.wait(2000);
		});
		i++;
		it(i + " - Display message 'Data saved successfully!", function () {
			cy.get('#swal2-title').contains('Data saved successfully!');
			cy.wait(2000);
			cy.get('button').contains('OK').click();
			cy.wait(1000);
		});
		i++;
		it(i + ' - Click on Sodium Bicarbonate Number button', function () {
			cy.wait(3000);
			cy.get('#btnCons0').click();
			cy.wait(2000);
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('not.be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Water field', function () {
			cy.screenshot();
			cy.get('#water').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('not.be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
		});
		i++;

		it(i + ' - Type a Water value out of range', function () {
			cy.get('#water').type(waterHigher, { delay: 100 });
			cy.get('#water').type('{enter}');
			cy.wait(1000);
			cy.get('#wat').should('have.class', 'form-group has-error has-feedback');
			cy.get('#watCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.wait(2000);
			cy.screenshot();
			cy.get('#water').clear();
			cy.get('#water').type(waterSmaller, { delay: 100 });
			cy.get('#water').type('{enter}')
			cy.wait(1000);
			cy.get('#wat').should('have.class', 'form-group has-error has-feedback');
			cy.get('#watCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a correct Water value', function () {
			cy.get('#water').clear();
			cy.get('#water').type(water, { delay: 100 });
			cy.get('#water').type('{enter}');
			cy.wait(2000);
			cy.get('#wat').should('have.class', 'form-group has-success has-feedback');
			cy.get('#watCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#waterRev').should('not.be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Water rev  ', function () {
			cy.screenshot();
			cy.get('#waterRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#waterRev').should('not.be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
		});
		i++;
		it(i + ' - Type a numbers on Water rev  ', function () {
			cy.get('#waterRev').type(wrongWaterRev, { delay: 100 });
			cy.wait(1000);
			cy.screenshot();
			cy.get('#waterRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
			cy.get('#swal2-title').contains('Incorrect Format, Only letters');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#waterRev').should('not.be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
		});
		i++;
		it(i + ' - Type a correct Water rev  ', function () {
			cy.get('#waterRev').type(correctWaterRev, { delay: 100 });
			cy.wait(1000);
			cy.get('#waterRev').type('{enter}');
			cy.wait(1000);
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#waterLot').should('not.be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Water solution lot  ', function () {
			cy.screenshot();
			cy.get('#waterLot').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#waterLot').should('not.be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
		});
		i++;
		it(i + ' - Type a solution Water lot  ', function () {
			cy.get('#waterLot').type(waterLot, { delay: 100 });
			cy.get('#waterLot').type('{enter}');
			cy.wait(1000);
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#waterDue').should('not.be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('not.be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a wrong Water exp date ', function () {
			cy.get('#waterDue').type('{leftarrow}')
			cy.get('#waterDue').type('{enter}')
			cy.wait(1000);
			cy.get('#watDueCheck').should('have.class', 'form-group has-error has-feedback');
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#waterDue').should('not.be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a good Water exp date ', function () {
			cy.get('#waterLot').type('{enter}');
			cy.get('#waterDue').type('{rightarrow}')
			cy.get('#waterDue').type('{enter}')
			cy.wait(1000);
			cy.get('#watDueCheck').should('have.class', 'form-group has-success has-feedback');
			cy.get('#bicarbonate').should('be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('not.be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#updateButton').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on user input', function () {
			cy.screenshot();
			cy.get('#usr').type('{enter}')
			cy.wait(2000);
			cy.get('#pwd').should('not.be.disabled')
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Leave blank on password input', function () {
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
			cy.screenshot();
			cy.get('#usr').type('{enter}')
			cy.wait(1000);
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
			cy.get('#updateButton').should('be.disabled');
		});
		i++;
		it(i + ' - Type a good password', function () {
			cy.get('#usr').type('{enter}')
			cy.get('#pwd').clear();
			cy.get('#pwd').type(pass, { delay: 100 })
			cy.get('#pwd').type('{enter}')
			cy.wait(1000);
			cy.get('#updateButton').should('not.be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Click on Update button', function () {
			cy.get('#updateButton').click();
			cy.wait(2000);
		});
		i++;
		it(i + " - Display message 'Data saved successfully!'", function () {
			cy.get('#swal2-title').contains('Data saved successfully!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#bicarbonate').should('not.be.disabled');
			cy.get('#bicRev').should('be.disabled');
			cy.get('#bicLot').should('be.disabled');
			cy.get('#bicDue').should('be.disabled');
			cy.get('#water').should('be.disabled');
			cy.get('#waterRev').should('be.disabled');
			cy.get('#waterLot').should('be.disabled');
			cy.get('#waterDue').should('be.disabled');
			cy.get('#scale').should('be.disabled');
			cy.get('#scaleDue').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Waiting until mixing time has 00:02:00 as minimum', function () {
			cy.wait(120000);
			cy.screenshot();
		});
		i++;
		it(i + ' - Stop Timer', function () {
			cy.get('#stop0').click();
		});
		i++;
		it(i + ' - Type a wrong rack', function () {
			cy.get('#stop0').click();
			cy.get('#trayOne').type('RACK001', { delay: 100 });
			cy.get('#trayOne').type('{enter}')
		});
		i++;
		it(i + " - Display message 'Holder not allowed!'", function () {
			cy.get('#descTray').contains('Holder not allowed! / Holder no permitido!');
			cy.wait(2000);
			cy.screenshot();
			cy.wait(2000);
		});
		i++;
		it(i + ' - Type holer in use', function () {
			cy.get('#trayOne').clear();
			cy.get('#trayOne').type('TRAY001', { delay: 100 });
			cy.screenshot();
			cy.get('#trayOne').type('{enter}')
		});
		i++;
		it(i + " - Display message 'Holder in use! '", function () {
			cy.get('#descTray').contains('Holder in use! / Holder en uso!');
			cy.wait(2000);
			cy.screenshot();
			cy.wait(2000);
		});
		i++;
		it(i + ' - Type correct holder', function () {
			cy.get('#trayOne').clear();
			cy.get('#trayOne').type('TRAY003', { delay: 100 });
			cy.screenshot();
			cy.get('#trayOne').type('{enter}');
		});
		i++;
		it(i + ' - Click on button save', function () {
			cy.get('#btnSave').click();
		});
		i++;
		it(i + " - Display message 'Data saved successfully!'", function () {
			cy.get('#swal2-title').contains('Data saved successfully!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
		});
	});
});