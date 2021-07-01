
function leadingZeroes(num, zeroes = 2) {
	return '0'.repeat(zeroes - Math.ceil(Math.log10(num + 1))) + num;
}

describe('Selecting data to search', function () {
	let i = 0;
	it(leadingZeroes(++i) + ' - Go to Yield + 3.0 Report', function () {
		cy.visit('http://sjo-testapp1/yp3_report/');
		cy.wait(1000);
	});
	it(leadingZeroes(++i) + ' - Log in (Wrong)', function () {
		cy.get('#email').type("wrong", { delay: 100 });
		cy.get('#password').type("wrong", { delay: 100 });
		cy.get('button').contains(" Iniciar sesión").click();
		cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
		cy.get('#password').clear();
		cy.clearCookies();
		cy.wait(2000);
		cy.screenshot();
	});
	it(leadingZeroes(++i) + ' - Log in (Correct)', function () {
		cy.get('#email').clear();
		cy.get('#email').type("coatingtr", { delay: 100 });
		cy.get('#password').type("Cuacoro#44", { delay: 100 });
		cy.get('button').contains(' Iniciar sesión').click();
		cy.wait(2000)
		cy.screenshot();
	});
	it(leadingZeroes(++i) + ' - Selecting an area', function () {
		cy.get('.btn[aria-owns=bs-select-1]').click();
		cy.get('a#bs-select-1-5').click();
		cy.wait(1000);
		cy.get('.btn[aria-owns=bs-select-2]').click();
		cy.get('a#bs-select-2-0');
		cy.get('a#bs-select-2-1');
		cy.get('button#search').should('be.disabled');
	});
	it(leadingZeroes(++i) + ' - Selecting a product', function () {
		cy.get('a#bs-select-2-1').click();
		cy.get('.btn[aria-owns=bs-select-3]').click();
		cy.get('button#search').should('be.disabled');
	});
	it(leadingZeroes(++i) + ' - Selecting Assy', function () {
		cy.get('.btn[aria-owns=bs-select-4]').should('not.exist');
		cy.get('a#bs-select-3-1').click();
		cy.get('a#bs-select-3-2').click();
		cy.get('.btn[aria-owns=bs-select-4]');
		cy.get('button#search').should('be.disabled');
	});
	it(leadingZeroes(++i) + ' - Select BR', function () {
		cy.get('.btn[aria-owns=bs-select-4]').click();
		cy.get('a#bs-select-4-0').click();
		cy.get('a#bs-select-4-1').click();
		cy.get('a#bs-select-4-2').click();
		cy.get('.btn[aria-owns=bs-select-4]').click();
	});
	it(leadingZeroes(++i) + ' - Wrong Worker data', function () {
		cy.get('#shift').select('A');
		cy.get('#shift').should('have.value', 'A');
		cy.get('#line').select('All');
		cy.get('#line').should('have.value', 'All');
		cy.get('#userID').type('59112').type('{enter}', { delay: 200 });
		cy.get('#userName').should('have.value', 'User name not found');
	});
	it(leadingZeroes(++i) + ' - Right Worker data', function () {
		cy.get('#shift').select('B');
		cy.get('#shift').should('have.value', 'B');
		cy.get('#line').select('All');
		cy.get('#line').should('have.value', 'All');
		cy.get('#userID').clear();
		cy.get('#userID').type('1491').type('{enter}');
		cy.get('#userName').should('have.value', 'Mejias Murillo Andres');
	});
	it(leadingZeroes(++i) + ' - Select date inputs', function () {
		cy.get('#sDate').type('2021-03-15', { delay: 200 });
		cy.get('#eDate').type('2021-04-25', { delay: 200 });
		cy.get('#sDate').should('have.value', '2021-03-15');
		cy.get('#eDate').should('have.value', '2021-04-25');
	});
	it(leadingZeroes(++i) + ' - Search data with all users', function () {
		cy.get('#userID').clear();
		cy.get('#shift').should('have.value', 'B');
		cy.get('#line').should('have.value', 'All');
		cy.get('#userID').type('{enter}');
		cy.get('#userID').should('have.value', '');
		cy.get('#userName').should('have.value', 'All');
		cy.get('#search').click();
	});
	it(leadingZeroes(++i) + ' - Show Daily RTY graphic', function () {
		cy.wait(1000);
		cy.get('#yieldChart').get('div').should('have.class', 'col-md-12');
	});
	it(leadingZeroes(++i) + ' - Show Daily Output graphic', function () {
		cy.wait(1000);
		cy.get('#outputChart').get('div').should('have.class', 'col-md-12');
	});
	it(leadingZeroes(++i) + ' - Show Rejects graphic', function () {
		cy.wait(1000);
		cy.get('#paretoChart').get('div').should('have.class', 'col-md-12');
	});
	it(leadingZeroes(++i) + ' - Show Yield by Process cards', function () {
		cy.wait(1000);
		cy.get('#processYieldRow').get('div').should('have.class', 'card');
	});
	it(leadingZeroes(++i) + ' - Show tables', function () {
		cy.wait(20000);
		cy.get('button[data-target="#firstDataRow"]').click();
		cy.get("#yieldTable").should('be.visible');
		cy.get("#dailyYieldTable").should('be.visible');
		cy.get('button[data-target="#outputDataRow"]').click();
		cy.get("#outputTable").should('be.visible');
		cy.get('button[data-target="#paretoDataRow"]').click();
		cy.get("#paretoTable").should('be.visible');
		cy.get('button[data-target="#historyTable"]').click();
		cy.get("#historyTable").should('be.visible');
		cy.get('button[data-target="#processTable"]').click();
		cy.get("#processDataTable").should('be.visible');
	});
});
