describe('Raw Material Mix', function () {
	describe('Acceptability Test Desmodur N75 BA/X', function () {
		const user = '1005';
		const grams = '600';
		var i = 1;
		it('0' + i + ' - Coating Tracker Software', function () {
			cy.visit('http://sjo-testapp1/coatingtracker/index.php', {
				auth: {
					username: 'us\\wotracker',
					password: 'Microvention#44'
				}
			});
			cy.wait(1000);
		});
		i++;
		it('0' + i + ' - Go to Raw Material Mix Interface', function () {
			cy.get('#rmcr').click();
			cy.wait(2000);
		});
		i++;

		it('0' + i + ' - Go to Desmodur N75 BA/X Test Interface', function () {
			cy.get('a').contains('Desmodur N75 BA/X Test').click();
			cy.wait(2000);
			cy.get('#desmodur').should('be.empty');
			cy.get('#desmodur').should('not.be.disabled');
			cy.get('#desRev').should('be.disabled');
			cy.get('#desLot').should('be.disabled');
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it('0' + i + ' - Leave blank on desmodur value field', function () {
			cy.screenshot();
			cy.get('#desmodur').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it("0" + i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#desmodur').should('be.empty');
			cy.get('#desmodur').should('not.be.disabled');
			cy.get('#desRev').should('be.disabled');
			cy.get('#desLot').should('be.disabled');
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it('0' + i + ' - Type a desmodur value out of range', function () {
			cy.get('#desmodur').type('0.024', { delay: 100 });
			cy.get('#desmodur').type('{enter}');
			cy.wait(1000);
			cy.get('#des').should('have.class', 'form-group has-error has-feedback');
			cy.get('#desCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.wait(2000);
			cy.screenshot();
			cy.get('#desmodur').clear();
			cy.get('#desmodur').type('1.026', { delay: 100 });
			cy.get('#desmodur').type('{enter}')
			cy.wait(1000);
			cy.get('#des').should('have.class', 'form-group has-error has-feedback');
			cy.get('#desCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.screenshot();
		});
		i++;
		it('0' + i + '- Type a correct desmodur value', function () {
			cy.get('#desmodur').clear();
			cy.get('#desmodur').type('1.00', { delay: 100 });
			cy.wait(2000);
			cy.get('#desmodur').type('{enter}')
			cy.get('#des').should('have.class', 'form-group has-success has-feedback');
			cy.get('#desCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
			cy.get('#desRev').should('not.be.disabled');
			cy.get('#desLot').should('be.disabled');
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it('0' + i + ' - Leave blank on rev desmodur', function () {
			cy.screenshot();
			cy.get('#desRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it("0" + i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#desLot').should('be.disabled');
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a numbers on rev desmodur', function () {
			cy.get('#desRev').type('1.00', { delay: 100 });
			cy.wait(1000);
			cy.screenshot();
			cy.get('#desRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
			cy.get('#swalTitle').contains('Incorrect Format, Only letters');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#desRev').should('not.be.disabled');
			cy.get('#desLot').should('be.disabled');
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + '- Type a correct rev desmodur', function () {
			cy.get('#desRev').type('A', { delay: 100 });
			cy.wait(1000);
			cy.get('#desRev').type('{enter}');
			cy.wait(1000);
			cy.get('#desLot').should('not.be.disabled');
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on solution lot desmodur', function () {
			cy.screenshot();
			cy.get('#desLot').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a solution lot desmodur', function () {
			cy.get('#desLot').type('101010', { delay: 100 });
			cy.wait(1000);
			cy.get('#desLot').type('{enter}');
			cy.wait(1000);
			cy.get('#desDue').should('not.be.disabled');
			cy.get('#dowanol').should('not.be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + '- Type a wrong exp date desmodur', function () {
			cy.get('#desDue').type('{leftarrow}')
			cy.wait(1000);
			cy.get('#desDue').type('{enter}')
			cy.wait(1000);
			cy.get('#desDueCheck').should('have.class', 'form-group has-error has-feedback');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' Type a good exp date desmodur', function () {
			cy.get('#desLot').type('{enter}');
			cy.get('#desDue').type('{rightarrow}')
			cy.wait(1000);
			cy.get('#desDue').type('{enter}')
			cy.wait(1000);
			cy.get('#desDueCheck').should('have.class', 'form-group has-success has-feedback');
			cy.get('#dowanol').should('not.be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Dowanol  value', function () {
			cy.screenshot();
			cy.get('#dowanol').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + '- Type a Dowanol  value out of range', function () {
			cy.get('#dowanol').type('2.35', { delay: 100 });
			cy.get('#dowanol').type('{enter}');
			cy.wait(1000);
			cy.get('#dow').should('have.class', 'form-group has-error has-feedback');
			cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.wait(2000);
			cy.screenshot();
			cy.get('#dowanol').clear();
			cy.get('#dowanol').type('2.50', { delay: 100 });
			cy.get('#dowanol').type('{enter}')
			cy.wait(1000);
			cy.get('#dow').should('have.class', 'form-group has-error has-feedback');
			cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a correct Dowanol value', function () {
			cy.get('#dowanol').clear();
			cy.get('#dowanol').type('2.45', { delay: 100 });
			cy.wait(2000);
			cy.get('#dowanol').type('{enter}')
			cy.get('#dow').should('have.class', 'form-group has-success has-feedback');
			cy.get('#desCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
			cy.get('#dowRev').should('not.be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on rev Dowanol', function () {
			cy.screenshot();
			cy.get('#dowRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a numbers on rev Dowanol', function () {
			cy.get('#dowRev').type('1.00', { delay: 100 });
			cy.wait(1000);
			cy.screenshot();
			cy.get('#dowRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
			cy.get('#swalTitle').contains('Incorrect Format, Only letters');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#dowRev').should('not.be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a correct rev Dowanol', function () {
			cy.get('#dowRev').type('B', { delay: 100 });
			cy.wait(1000);
			cy.get('#dowRev').type('{enter}');
			cy.get('#dowRev').should('not.be.disabled');
			cy.get('#dowLot').should('not.be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on solution lot Dowanol', function () {
			cy.screenshot();
			cy.get('#dowLot').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a solution lot Dowanol', function () {
			cy.get('#dowLot').type('202020', { delay: 100 });
			cy.wait(1000);
			cy.get('#dowLot').type('{enter}');
			cy.wait(1000);
			cy.get('#trimet').should('not.be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a wrong exp date dowanol', function () {
			cy.get('#dowDue').type('{leftarrow}')
			cy.wait(1000);
			cy.get('#dowDue').type('{enter}')
			cy.wait(1000);
			cy.get('#dowDueCheck').should('have.class', 'form-group has-error has-feedback');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a good exp date dowanol', function () {
			cy.get('#dowLot').type('{enter}');
			cy.get('#dowDue').type('{rightarrow}')
			cy.get('#dowDueCheck').should('have.class', 'form-group has-success has-feedback');
			cy.wait(1000);
			cy.get('#dowDue').type('{enter}')
			cy.wait(1000);
			cy.get('#trimet').should('not.be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on trimethylpentane  value', function () {
			cy.screenshot();
			cy.get('#trimet').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#trimet').should('not.be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a trimethylpentane  value out of range', function () {
			cy.get('#trimet').type('1.15', { delay: 100 });
			cy.get('#trimet').type('{enter}');
			cy.wait(1000);
			cy.get('#tri').should('have.class', 'form-group has-error has-feedback');
			cy.get('#triCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.wait(2000);
			cy.screenshot();
			cy.get('#trimet').clear();
			cy.get('#trimet').type('1.55', { delay: 100 });
			cy.get('#trimet').type('{enter}')
			cy.wait(1000);
			cy.get('#tri').should('have.class', 'form-group has-error has-feedback');
			cy.get('#triCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a correct trimethylpentane value', function () {
			cy.get('#trimet').clear();
			cy.get('#trimet').type('1.34', { delay: 100 });
			cy.wait(2000);
			cy.get('#trimet').type('{enter}')
			cy.get('#tri').should('have.class', 'form-group has-success has-feedback');
			cy.get('#triCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
			cy.get('#triRev').should('not.be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on rev trimethylpentane', function () {
			cy.screenshot();
			cy.get('#triRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#triRev').should('not.be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a numbers on rev trimethylpentane', function () {
			cy.get('#triRev').type('1.00', { delay: 100 });
			cy.wait(1000);
			cy.screenshot();
			cy.get('#triRev').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
			cy.get('#swalTitle').contains('Incorrect Format, Only letters');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#triRev').should('not.be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a correct rev trimethylpentane', function () {
			cy.get('#triRev').type('B', { delay: 100 });
			cy.wait(1000);
			cy.get('#triRev').type('{enter}');
			cy.get('#triLot').should('not.be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on solution lot trimethylpentane', function () {
			cy.screenshot();
			cy.get('#triLot').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#triLot').should('not.be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a solution lot trimethylpentane', function () {
			cy.get('#triLot').type('303030', { delay: 100 });
			cy.wait(1000);
			cy.get('#triLot').type('{enter}');
			cy.wait(1000);
			cy.get('#ed').should('not.be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a wrong exp date trimethylpentane', function () {
			cy.get('#triDue').type('{leftarrow}')
			cy.wait(1000);
			cy.get('#triDue').type('{enter}')
			cy.wait(1000);
			cy.get('#triDueCheck').should('have.class', 'form-group has-error has-feedback');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a good exp date trimethylpentane', function () {
			cy.get('#triLot').type('{enter}');
			cy.get('#triDue').type('{rightarrow}')
			cy.get('#triDueCheck').should('have.class', 'form-group has-success has-feedback');
			cy.get('#triDue').type('{enter}');
			cy.wait(1000);
			cy.get('#ed').should('not.be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave blank on Scale ED', function () {
			cy.screenshot();
			cy.get('#ed').type('{enter}');
			cy.wait(2000);
		});
		i++;
		it(i + " - Display error message 'Blanks not allowed'", function () {
			cy.get('#swalTitle').contains('Blanks not allowed');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#ed').should('not.be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a wrong Scale ED', function () {
			cy.get('#ed').type('ED11255-001', { delay: 100 });
			cy.screenshot();
			cy.get('#ed').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'ED not found'", function () {
			cy.get('#swalTitle').contains('ED not found');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#ed').should('not.be.disabled');
			cy.get('#edDue').should('not.be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		it(i + ' - Type a good Scale ED', function () {
			cy.get('#ed').clear();
			cy.get('#ed').type('ED2288-005', { delay: 100 });
			cy.get('#ed').type('{enter}');
			cy.wait(2000);
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('not.be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Type a Scale ED with expired calibration', function () {
			cy.get('#ed').clear();
			cy.get('#ed').type('ED2288-002', { delay: 100 });
			cy.screenshot();
			cy.get('#ed').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + " - Display error message 'Expired Calibration'", function () {
			cy.get('#swalTitle').contains('Expired Calibration');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#ed').should('not.be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
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
			cy.get('#swalTitle').contains('Data saved successfully!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(1000);
			cy.screenshot();
		});
		i++;
		it(i + ' - Select solution status', function () {
			cy.get('#status').select('Clear/Transparente');
			cy.wait(2000);
			cy.get('#usr').should('not.be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
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
		it(i + " - Display message 'Data saved successfully!", function () {
			cy.get('#swalTitle').contains('Data saved successfully!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#desmodur').should('be.empty');
			cy.get('#desmodur').should('be.disabled');
			cy.get('#desRev').should('be.disabled');
			cy.get('#desLot').should('be.disabled');
			cy.get('#desDue').should('be.disabled');
			cy.get('#dowanol').should('be.disabled');
			cy.get('#dowRev').should('be.disabled');
			cy.get('#dowLot').should('be.disabled');
			cy.get('#dowDue').should('be.disabled');
			cy.get('#trimet').should('be.disabled');
			cy.get('#triRev').should('be.disabled');
			cy.get('#triLot').should('be.disabled');
			cy.get('#triDue').should('be.disabled');
			cy.get('#ed').should('be.disabled');
			cy.get('#edDue').should('be.disabled');
			cy.get('#status').should('be.disabled');
			cy.get('#usr').should('be.disabled');
			cy.get('#pwd').should('be.disabled');
			cy.get('#saveBut').should('be.disabled');
		});
		i++;
		describe('Crosslinker Mix', function () {
			it(i + ' - Go to Crosslinker Mix Interface', function () {
				cy.get('input[name="numberTest"]').invoke('val').then(text => {
					cy.get('#rmcr').click();
					cy.wait(2000);
					cy.get('a').contains('Crosslinker Mix').click();
					cy.wait(2000);
					cy.get('#lotNumberPost').type(text, { force: true });
				});
				i++;
				cy.wait(2000);
				cy.get('#grams').should('be.disabled');
				cy.get('#cx').should('be.disabled');
				cy.get('#cxRev').should('be.disabled');
				cy.get('#cxLot').should('be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10%');
				cy.get('#pma').should('contain', '90%');
				cy.screenshot();
			});
			i++;
			it(i + ' - Select correct consecutive number', function () {
				cy.get('#lotNumberPost').invoke('val').then(text => {
					cy.get('#lotNumber').select(text);
				});
				i++;
				cy.wait(2000);
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.get('#grams').should('not.be.disabled');
				cy.get('#cx').should('be.disabled');
				cy.get('#cxRev').should('be.disabled');
				cy.get('#cxLot').should('be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10%');
				cy.get('#pma').should('contain', '90%');
				cy.screenshot();
			});
			i++;
			it(i + ' - Choose a total mixture', function () {
				cy.get('#grams').select(grams, { delay: 100 });
				cy.wait(2000);
				cy.get('#cx').should('not.be.disabled');
				cy.get('#cxRev').should('be.disabled');
				cy.get('#cxLot').should('be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + '- Leave blank on CX-100 value field', function () {
				cy.screenshot();
				cy.get('#cx').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed!'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#cx').should('not.be.disabled');
				cy.get('#cxRev').should('be.disabled');
				cy.get('#cxLot').should('be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a CX-100 value out of range', function () {
				cy.get('#cx').type('0.331', { delay: 100 });
				cy.get('#cx').type('{enter}');
				cy.wait(1000);
				cy.get('#cx1').should('have.class', 'form-group has-error has-feedback');
				cy.get('#cxCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.wait(2000);
				cy.screenshot();
				cy.get('#cx').clear();
				cy.get('#cx').type('0.559', { delay: 100 });
				cy.get('#cx').type('{enter}')
				cy.wait(1000);
				cy.get('#cx1').should('have.class', 'form-group has-error has-feedback');
				cy.get('#cxCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.wait(1000);
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a correct CX-100 value', function () {
				cy.get('#cx').clear();
				cy.get('#cx').type('0.444', { delay: 100 });
				cy.get('#cx').type('{enter}')
				cy.wait(2000);
				cy.get('#cx1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#cxCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#cxRev').should('not.be.disabled');
				cy.get('#cxLot').should('be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on rev CX-100', function () {
				cy.screenshot();
				cy.get('#cxRev').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed!'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#cxRev').should('not.be.disabled');
				cy.get('#cxLot').should('be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a numbers on rev CX-100', function () {
				cy.get('#cxRev').type('1.00', { delay: 100 });
				cy.wait(1000);
				cy.screenshot();
				cy.get('#cxRev').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
				cy.get('#swalTitle').contains('Incorrect Format, Only letters');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#cxRev').should('not.be.disabled');
				cy.get('#cxLot').should('be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a correct rev CX-100', function () {
				cy.get('#cxRev').type('A', { delay: 100 });
				cy.get('#cxRev').type('{enter}');
				cy.wait(1000);
				cy.get('#cxLot').should('not.be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on solution lot CX-100', function () {
				cy.screenshot();
				cy.get('#cxLot').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed!'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#cxLot').should('not.be.disabled');
				cy.get('#cxDue').should('be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a solution lot CX-100', function () {
				cy.get('#cxLot').type('101010', { delay: 100 });
				cy.get('#cxLot').type('{enter}');
				cy.wait(1000);
				cy.get('#cxDue').should('not.be.disabled');
				cy.get('#dowanol').should('not.be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a wrong exp date CX-100', function () {
				cy.get('#cxDue').type('{leftarrow}')
				cy.get('#cxDue').type('{enter}')
				cy.wait(1000);
				cy.get('#cxDueCheck').should('have.class', 'form-group has-error has-feedback');
				cy.get('#cxDue').should('not.be.disabled');
				cy.get('#dowanol').should('be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a good exp date CX-100', function () {
				cy.get('#cxLot').type('{enter}');
				cy.get('#cxDue').type('{rightarrow}')
				cy.get('#cxDue').type('{enter}')
				cy.wait(1000);
				cy.get('#cxDueCheck').should('have.class', 'form-group has-success has-feedback');
				cy.get('#dowanol').should('not.be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on Dowanol value field', function () {
				cy.screenshot();
				cy.get('#dowanol').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed!'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#dowanol').should('not.be.disabled');
				cy.get('#dowRev').should('be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a Dowanol value out of range', function () {
				cy.get('#dowanol').type('3.939', { delay: 100 });
				cy.get('#dowanol').type('{enter}');
				cy.wait(1000);
				cy.get('#dow').should('have.class', 'form-group has-error has-feedback');
				cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.wait(2000);
				cy.screenshot();
				cy.get('#dowanol').clear();
				cy.get('#dowanol').type('4.231', { delay: 100 });
				cy.get('#dowanol').type('{enter}')
				cy.wait(1000);
				cy.get('#dow').should('have.class', 'form-group has-error has-feedback');
				cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.wait(1000);
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a correct Dowanol value', function () {
				cy.get('#dowanol').clear();
				cy.get('#dowanol').type('3.970', { delay: 100 });
				cy.get('#dowanol').type('{enter}')
				cy.wait(2000);
				cy.get('#dow').should('have.class', 'form-group has-success has-feedback');
				cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#dowRev').should('not.be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on rev Dowanol', function () {
				cy.screenshot();
				cy.get('#dowRev').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed!'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#dowRev').should('not.be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a numbers on rev Dowanol', function () {
				cy.get('#dowRev').type('1.00', { delay: 100 });
				cy.wait(1000);
				cy.screenshot();
				cy.get('#dowRev').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
				cy.get('#swalTitle').contains('Incorrect Format, Only letters');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#dowRev').should('not.be.disabled');
				cy.get('#dowLot').should('be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a correct rev Dowanol', function () {
				cy.get('#dowRev').type('B', { delay: 100 });
				cy.get('#dowRev').type('{enter}');
				cy.wait(1000);
				cy.get('#dowLot').should('not.be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on solution lot Dowanol', function () {
				cy.screenshot();
				cy.get('#dowLot').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed!'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#dowLot').should('not.be.disabled');
				cy.get('#dowDue').should('be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a solution lot Dowanol', function () {
				cy.get('#dowLot').type('202020', { delay: 100 });
				cy.get('#dowLot').type('{enter}');
				cy.wait(1000);
				cy.get('#dowDue').should('not.be.disabled');
				cy.get('#scale').should('not.be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a wrong exp date Dowanol', function () {
				cy.get('#dowDue').type('{leftarrow}')
				cy.get('#dowDue').type('{enter}')
				cy.wait(1000);
				cy.get('#dowDueCheck').should('have.class', 'form-group has-error has-feedback');
				cy.get('#dowDue').should('not.be.disabled');
				cy.get('#scale').should('be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a good exp date Dowanol', function () {
				cy.get('#dowLot').type('{enter}');
				cy.get('#dowDue').type('{rightarrow}')
				cy.get('#dowDue').type('{enter}')
				cy.wait(1000);
				cy.get('#dowDueCheck').should('have.class', 'form-group has-success has-feedback');
				cy.get('#scale').should('not.be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on Scale ED', function () {
				cy.screenshot();
				cy.get('#scale').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#scale').should('not.be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a wrong Scale ED', function () {
				cy.get('#scale').type('ED11255-001', { delay: 100 });
				cy.screenshot();
				cy.get('#scale').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'ED not found'", function () {
				cy.get('#swalTitle').contains('ED not found');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#scale').should('not.be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a good Scale ED', function () {
				cy.get('#scale').clear();
				cy.get('#scale').type('ED2288-005', { delay: 100 });
				cy.get('#scale').type('{enter}');
				cy.wait(2000);
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#scaleDueCheck').should('have.class', 'form-group has-success has-feedback');
				cy.get('#mixer').should('not.be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			it(i + ' - Type a Scale ED with expired calibration', function () {
				cy.get('#scale').clear();
				cy.get('#scale').type('ED2288-002', { delay: 100 });
				cy.screenshot();
				cy.get('#scale').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Expired Calibration'", function () {
				cy.get('#swalTitle').contains('Expired Calibration');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#scale').should('not.be.disabled');
				cy.get('#scaleDue').should('be.disabled');
				cy.get('#mixer').should('be.disabled');
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
				cy.get('#swalTitle').contains('Data saved successfully!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on Mixer ED', function () {
				cy.screenshot();
				cy.get('#mixer').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#mixer').should('not.be.disabled');
				cy.get('#speed').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a  Mixer ED', function () {
				cy.get('#mixer').type('ED2206-012', { delay: 100 })
				cy.get('#mixer').type('{enter}');
				cy.wait(2000);
				cy.get('#speed').should('not.be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + '- Leave blank on Mixer setting', function () {
				cy.screenshot();
				cy.get('#speed').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + " - Display error message 'Blanks not allowed'", function () {
				cy.get('#swalTitle').contains('Blanks not allowed');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#speed').should('not.be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a  Mixer setting out of range', function () {
				cy.get('#speed').type('350', { delay: 100 })
				cy.screenshot();
				cy.get('#speed').type('{enter}');
				cy.wait(2000);
				cy.get('#speed').should('not.be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + " - Display error message 'Parameter not allowed'", function () {
				cy.get('#swalTitle').contains('Parameter not allowed');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#speed').should('not.be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a  correct Mixer setting', function () {
				cy.get('#speed').type('150', { delay: 100 })
				cy.get('#speed').type('{enter}');
				cy.wait(2000);
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on user input', function () {
				cy.screenshot();
				cy.get('#usr').type('{enter}')
				cy.wait(2000);
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Leave blank on password input', function () {
				cy.screenshot();
				cy.get('#pwd').type('{enter}')
				cy.wait(1000);
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');

			});
			i++;
			it(i + " - Display error message 'Password or user incorrect!'", function () {
				cy.get('#swalTitle').contains('Password or user incorrect!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#usr').type(user, { delay: 100 })
				cy.get('#usr').type('{enter}')
				cy.wait(1000);
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
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
				cy.get('#swalTitle').contains('Password or user incorrect!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#saveBut').should('be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
			});
			i++;
			it(i + ' - Type a good password', function () {
				cy.get('#usr').type('{enter}')
				cy.get('#pwd').clear();
				cy.get('#pwd').type('1005', { delay: 100 })
				cy.get('#pwd').type('{enter}')
				cy.wait(1000);
				cy.get('#saveBut').should('not.be.disabled');
				cy.get('#cx100').should('contain', '10% (0.441g - 0.459g)');
				cy.get('#pma').should('contain', '90% (3.969g - 4.131g)');
				cy.get('#desc').should('contain', 'Base Coat Mixture');
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
			});
			i++;
			describe('Base Coat Mix', function () {
				it(i + ' - Go to Base Coat Interface', function () {
					cy.get('#lotNumberPost').invoke('val').then(text => {
						cy.get('#rmcr').click({ force: true });
						cy.wait(2000);
						cy.get('a').contains('Base Coat Mix').click();
						cy.wait(2000);
						cy.get('#lotNumberPost').type(text, { force: true });
						cy.wait(2000);
						cy.get('#grams').should('be.disabled');
						cy.get('#desmodur').should('be.disabled');
						cy.get('#desRev').should('be.disabled');
						cy.get('#desLot').should('be.disabled');
						cy.get('#desDue').should('be.disabled');
						cy.get('#dowanol').should('be.disabled');
						cy.get('#dowRev').should('be.disabled');
						cy.get('#dowLot').should('be.disabled');
						cy.get('#dowDue').should('be.disabled');
						cy.get('#cx').should('be.disabled');
						cy.get('#hydak').should('be.disabled');
						cy.get('#hydRev').should('be.disabled');
						cy.get('#hydLot').should('be.disabled');
						cy.get('#hydDue').should('be.disabled');
						cy.get('#scale').should('be.disabled');
						cy.get('#scaleDue').should('be.disabled');
						cy.get('#mixer').should('be.disabled');
						cy.get('#mixDue').should('be.disabled');
						cy.get('#speed').should('be.disabled');
						cy.get('#usr').should('be.disabled');
						cy.get('#pwd').should('be.disabled');
						cy.get('#saveBut').should('be.disabled');
						cy.get('#stopBut').should('be.disabled');
						cy.screenshot();
					});
				});
				i++;
				it(i + ' - Type a correct consecutive number', function () {
					cy.get('#lotNumberPost').invoke('val').then(text => {
						cy.get('#lotNumber').select(text);
					});
					cy.get('#lotNumber').type('{enter}');
					cy.wait(2000)
					cy.get('#desmodur').should('not.be.disabled');
					cy.get('#desRev').should('be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on desmodur value field', function () {
					cy.screenshot();
					cy.get('#desmodur').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#desmodur').should('not.be.disabled');
					cy.get('#desRev').should('be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + '- Type a desmodur value out of range', function () {
					cy.get('#desmodur').type('11.99', { delay: 100 });
					cy.get('#desmodur').type('{enter}');
					cy.wait(1000);
					cy.get('#des').should('have.class', 'form-group has-error has-feedback');
					cy.get('#desCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.wait(2000);
					cy.screenshot();
					cy.get('#desmodur').clear();
					cy.get('#desmodur').type('11.37', { delay: 100 });
					cy.get('#desmodur').type('{enter}')
					cy.wait(1000);
					cy.get('#des').should('have.class', 'form-group has-error has-feedback');
					cy.get('#desCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a correct desmodur value', function () {
					cy.get('#desmodur').clear();
					cy.get('#desmodur').type('11.49', { delay: 100 });
					cy.get('#desmodur').type('{enter}');
					cy.wait(2000);
					cy.get('#desRev').should('not.be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on rev desmodur', function () {
					cy.screenshot();
					cy.get('#desRev').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#desRev').should('not.be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a numbers on rev desmodur', function () {
					cy.get('#desRev').type('1.00', { delay: 100 });
					cy.wait(1000);
					cy.screenshot();
					cy.get('#desRev').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
					cy.get('#swalTitle').contains('Incorrect Format, Only letters');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#desRev').should('not.be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a correct rev desmodur', function () {
					cy.get('#desRev').type('A', { delay: 100 });
					cy.wait(1000);
					cy.get('#desRev').type('{enter}');
					cy.wait(1000);
					cy.get('#desLot').should('not.be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on solution lot desmodur', function () {
					cy.screenshot();
					cy.get('#desLot').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#desLot').should('not.be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a solution lot desmodur', function () {
					cy.get('#desLot').type('101010', { delay: 100 });
					cy.wait(1000);
					cy.get('#desLot').type('{enter}');
					cy.wait(1000);
					cy.get('#desDue').should('not.be.disabled');
					cy.get('#dowanol').should('not.be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a wrong exp date desmodur', function () {
					cy.get('#desDue').type('{leftarrow}')
					cy.wait(1000);
					cy.get('#desDue').type('{enter}')
					cy.wait(1000);
					cy.get('#desDueCheck').should('have.class', 'form-group has-error has-feedback');
					cy.get('#desDue').should('not.be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a good exp date desmodur', function () {
					cy.get('#desLot').type('{enter}');
					cy.get('#desDue').type('{rightarrow}')
					cy.wait(1000);
					cy.get('#desDue').type('{enter}')
					cy.wait(1000);
					cy.get('#desDueCheck').should('have.class', 'form-group has-success has-feedback');
					cy.get('#dowanol').should('not.be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on Dowanol  value field', function () {
					cy.screenshot();
					cy.get('#dowanol').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#dowanol').should('not.be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a Dowanol  value out of range', function () {
					cy.get('#dowanol').type('424.22', { delay: 100 });
					cy.get('#dowanol').type('{enter}');
					cy.wait(1000);
					cy.get('#dow').should('have.class', 'form-group has-error has-feedback');
					cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.wait(2000);
					cy.screenshot();
					cy.get('#dowanol').clear();
					cy.get('#dowanol').type('407.38', { delay: 100 });
					cy.get('#dowanol').type('{enter}')
					cy.wait(1000);
					cy.get('#dow').should('have.class', 'form-group has-error has-feedback');
					cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a correct Dowanol  value', function () {
					cy.get('#dowanol').clear();
					cy.get('#dowanol').type('407.49', { delay: 100 });
					cy.get('#dowanol').type('{enter}');
					cy.wait(2000);
					cy.get('#dow').should('have.class', 'form-group has-success has-feedback');
					cy.get('#dowCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#dowRev').should('not.be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on rev Dowanol ', function () {
					cy.screenshot();
					cy.get('#dowRev').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#dowRev').should('not.be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a numbers on rev Dowanol ', function () {
					cy.get('#dowRev').type('1.00', { delay: 100 });
					cy.wait(1000);
					cy.screenshot();
					cy.get('#dowRev').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
					cy.get('#swalTitle').contains('Incorrect Format, Only letters');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#dowRev').should('not.be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a correct rev Dowanol ', function () {
					cy.get('#dowRev').clear();
					cy.get('#dowRev').type('B', { delay: 100 });
					cy.wait(1000);
					cy.get('#dowRev').type('{enter}');
					cy.wait(1000);
					cy.get('#dowLot').should('not.be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on solution lot Dowanol ', function () {
					cy.screenshot();
					cy.get('#dowLot').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#dowLot').should('not.be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a solution lot Dowanol ', function () {
					cy.get('#dowLot').type('202020', { delay: 100 });
					cy.wait(1000);
					cy.get('#dowLot').type('{enter}');
					cy.wait(1000);
					cy.get('#dowDue').should('not.be.disabled');
					cy.get('#cx').should('not.be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a wrong exp date Dowanol ', function () {
					cy.get('#dowDue').type('{leftarrow}')
					cy.wait(1000);
					cy.get('#dowDue').type('{enter}')
					cy.wait(1000);
					cy.get('#dowDueCheck').should('have.class', 'form-group has-error has-feedback');
					cy.get('#dowDue').should('not.be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a good exp date Dowanol ', function () {
					cy.get('#dowLot').type('{enter}');
					cy.get('#dowDue').type('{rightarrow}')
					cy.wait(1000);
					cy.get('#dowDue').type('{enter}')
					cy.wait(1000);
					cy.get('#dowDueCheck').should('have.class', 'form-group has-success has-feedback');
					cy.get('#cx').should('not.be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on  Crosslinker CX-100 value field', function () {
					cy.screenshot();
					cy.get('#cx').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#cx').should('not.be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a  Crosslinker CX-100 value out of range', function () {
					cy.get('#cx').type('2.67', { delay: 100 });
					cy.get('#cx').type('{enter}');
					cy.wait(1000);
					cy.get('#cx100').should('have.class', 'form-group has-error has-feedback');
					cy.get('#cxCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.wait(2000);
					cy.screenshot();
					cy.get('#cx').clear();
					cy.get('#cx').type('2.37', { delay: 100 });
					cy.get('#cx').type('{enter}')
					cy.wait(1000);
					cy.get('#cx100').should('have.class', 'form-group has-error has-feedback');
					cy.get('#cxCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a correct  Crosslinker CX-100 value', function () {
					cy.get('#cx').clear();
					cy.get('#cx').type('2.48', { delay: 100 });
					cy.get('#cx').type('{enter}');
					cy.wait(2000);
					cy.get('#cx100').should('have.class', 'form-group has-success has-feedback');
					cy.get('#cxCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#hydak').should('not.be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on Hydak B23K value field', function () {
					cy.screenshot();
					cy.get('#hydak').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#hydak').should('not.be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a Hydak B23K value out of range', function () {
					cy.get('#hydak').type('173.39', { delay: 100 });
					cy.get('#hydak').type('{enter}');
					cy.wait(1000);
					cy.get('#hyd').should('have.class', 'form-group has-error has-feedback');
					cy.get('#hydCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.wait(2000);
					cy.screenshot();
					cy.get('#hydak').clear();
					cy.get('#hydak').type('166.48', { delay: 100 });
					cy.get('#hydak').type('{enter}')
					cy.wait(1000);
					cy.get('#hyd').should('have.class', 'form-group has-error has-feedback');
					cy.get('#hydCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a correct Hydak B23K value', function () {
					cy.get('#hydak').clear();
					cy.get('#hydak').type('166.59', { delay: 100 });
					cy.get('#hydak').type('{enter}');
					cy.wait(2000);
					cy.get('#hyd').should('have.class', 'form-group has-success has-feedback');
					cy.get('#hydCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#hydRev').should('not.be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on rev Hydak B23K', function () {
					cy.screenshot();
					cy.get('#hydRev').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#hydRev').should('not.be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a numbers on rev Hydak B23K', function () {
					cy.get('#hydRev').type('1.00', { delay: 100 });
					cy.wait(1000);
					cy.screenshot();
					cy.get('#hydRev').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Incorrect Format, Only letters'", function () {
					cy.get('#swalTitle').contains('Incorrect Format, Only letters');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#hydRev').should('not.be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a correct rev Hydak B23K', function () {
					cy.get('#hydRev').clear();
					cy.get('#hydRev').type('C', { delay: 100 });
					cy.wait(1000);
					cy.get('#hydRev').type('{enter}');
					cy.wait(1000);
					cy.get('#hydLot').should('not.be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on solution lot Hydak B23K', function () {
					cy.screenshot();
					cy.get('#hydLot').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#hydLot').should('not.be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a solution lot Hydak B23K', function () {
					cy.get('#hydLot').type('303030', { delay: 100 });
					cy.wait(1000);
					cy.get('#hydLot').type('{enter}');
					cy.wait(1000);
					cy.get('#hydDue').should('not.be.disabled');
					cy.get('#scale').should('not.be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a wrong exp date Hydak B23K', function () {
					cy.get('#hydDue').type('{leftarrow}')
					cy.wait(1000);
					cy.get('#hydDue').type('{enter}')
					cy.wait(1000);
					cy.get('#hydDueCheck').should('have.class', 'form-group has-error has-feedback');
					cy.get('#hydDue').should('not.be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a good exp date Hydak B23K', function () {
					cy.get('#hydLot').type('{enter}');
					cy.get('#hydDue').type('{rightarrow}')
					cy.wait(1000);
					cy.get('#hydDue').type('{enter}')
					cy.wait(1000);
					cy.get('#hydDueCheck').should('have.class', 'form-group has-success has-feedback');
					cy.get('#scale').should('not.be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on Scale ED', function () {
					cy.screenshot();
					cy.get('#scale').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#scale').should('not.be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a  Scale ED', function () {
					cy.get('#scale').type('ED2288-005', { delay: 100 });
					cy.get('#scale').type('{enter}');
					cy.wait(2000);
					cy.get('#scaleDueCheck').should('have.class', 'form-group has-success has-feedback');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('not.be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a Scale ED with expired calibration', function () {
					cy.get('#scale').clear();
					cy.get('#scale').type('ED2288-002', { delay: 100 });
					cy.screenshot();
					cy.get('#scale').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Expired Calibration'", function () {
					cy.get('#swalTitle').contains('Expired Calibration');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#scale').should('not.be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
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
					cy.get('#swalTitle').contains('Data saved successfully!');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(1000);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on Mixer ED', function () {
					cy.screenshot();
					cy.get('#mixer').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#mixer').should('not.be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a   Mixer ED', function () {
					cy.get('#mixer').type('ED2219-002', { delay: 100 });
					cy.get('#mixer').type('{enter}');
					cy.wait(2000);
					cy.get('#mixDueCheck').should('have.class', 'form-group has-success has-feedback');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('not.be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a Mixer ED with expired calibration', function () {
					cy.get('#mixer').clear();
					cy.get('#mixer').type('ED2219-006', { delay: 100 });
					cy.screenshot();
					cy.get('#mixer').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Expired Calibration'", function () {
					cy.get('#swalTitle').contains('Expired Calibration');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#mixer').should('not.be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('not.be.disabled');
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
					cy.get('#swalTitle').contains('Data saved successfully!');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(1000);
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on Mixing Speed', function () {
					cy.screenshot();
					cy.get('#speed').type('{enter}');
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Blanks not allowed'", function () {
					cy.get('#swalTitle').contains('Blanks not allowed');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#speed').should('not.be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Type a  Mixing Speed values out of range', function () {
					cy.get('#speed').type('305', { delay: 100 });
					cy.get('#speed').type('{enter}');
					cy.wait(2000);
					cy.get('#sp').should('have.class', 'form-group has-error has-feedback');
					cy.get('#speedCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.get('#speed').clear();
					cy.get('#speed').type('195', { delay: 100 });
					cy.get('#speed').type('{enter}');
					cy.wait(2000);
					cy.get('#sp').should('have.class', 'form-group has-error has-feedback');
					cy.get('#speedCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.screenshot();
				});
				i++;
				it(i + ' - type a  correct Mixing Speed values', function () {
					cy.get('#speed').clear();
					cy.get('#speed').type('250', { delay: 100 });
					cy.get('#speed').type('{enter}');
					cy.wait(1000);
					cy.get('#sp').should('have.class', 'form-group has-success has-feedback');
					cy.get('#speedCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#usr').should('not.be.disabled');
					cy.get('#pwd').should('not.be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
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
					cy.wait(2000);
					cy.get('#grams').should('be.disabled');
					cy.get('#desmodur').should('be.disabled');
					cy.get('#desRev').should('be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('not.be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
				});
				i++;
				it(i + ' - Try to stop time', function () {
					cy.get('#stopBut').click();
					cy.wait(1000);
				});
				i++;
				it(i + " - Display error message 'Error, not enough time'", function () {
					cy.get('#swalTitle').contains('Error, not enough time');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(1000);
					cy.get('#grams').should('be.disabled');
					cy.get('#desmodur').should('be.disabled');
					cy.get('#desRev').should('be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('not.be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.wait(1000);
				});
				i++;
				it(i + " - Wait unitl mixing time is done'", function () {
					cy.wait(1200000);
					cy.screenshot();
				});
				i++;
				it(i + ' - Stop time', function () {
					cy.get('#stopBut').click();
					cy.wait(1000);
					cy.get('#grams').should('be.disabled');
					cy.get('#desmodur').should('be.disabled');
					cy.get('#desRev').should('be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#desc').should('contain', 'Basecoat Mix');
					cy.get('#desReq').should('contain', '1.95% (11.47g - 11.93g)');
					cy.get('#dowReq').should('contain', '69.30% (407.48g - 424.12g)');
					cy.get('#cxReq').should('contain', '0.42% (2.47g - 2.57g)');
					cy.get('#hydReq').should('contain', '28.33% (166.58g - 173.38g)');
					cy.get('#grams').should('have.value', grams);
					cy.wait(2000);
				});
				i++;
				it(i + " - Display message 'Data saved successfully!'", function () {
					cy.get('#swalTitle').contains('Data saved successfully!');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#grams').should('be.disabled');
					cy.get('#desmodur').should('be.disabled');
					cy.get('#desRev').should('be.disabled');
					cy.get('#desLot').should('be.disabled');
					cy.get('#desDue').should('be.disabled');
					cy.get('#dowanol').should('be.disabled');
					cy.get('#dowRev').should('be.disabled');
					cy.get('#dowLot').should('be.disabled');
					cy.get('#dowDue').should('be.disabled');
					cy.get('#cx').should('be.disabled');
					cy.get('#hydak').should('be.disabled');
					cy.get('#hydRev').should('be.disabled');
					cy.get('#hydLot').should('be.disabled');
					cy.get('#hydDue').should('be.disabled');
					cy.get('#scale').should('be.disabled');
					cy.get('#scaleDue').should('be.disabled');
					cy.get('#mixer').should('be.disabled');
					cy.get('#mixDue').should('be.disabled');
					cy.get('#speed').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.get('#stopBut').should('be.disabled');
				});
			});
		});
	});
});