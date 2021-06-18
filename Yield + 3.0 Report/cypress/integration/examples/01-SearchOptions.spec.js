
function leadingZeroes(num, zeroes = 2) {
	return '0'.repeat(zeroes - Math.ceil(Math.log10(num + 1))) + num;
}

describe('Selecting Area', function () {
	let area = '';
	let i = 0;
	it(leadingZeroes(++i) + ' - Go to Yiel + 3.0 Report', function (){
		cy.visit('http://localhost/yp3_report/');
		cy.wait(1000);
	}

	);

	 it(leadingZeroes(++i) + ' - Log in (Wrong)', function () {
        	cy.get('#email').type("wrong", { delay: 100 });
        	cy.get('#password').type("wrong", { delay: 100 });
        	cy.get('button').contains(' Iniciar sesión').click();
        	cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        	cy.get('#password').clear();
        	cy.wait(1000);
        	cy.screenshot();
    	});
    	it(leadingZeroes(++i)  + ' - Log in (Good)', function () {
        	cy.get('#email').clear();
        	cy.get('#email').type("wotracker", { delay: 100 });
        	cy.get('#password').type("Microvention#44", { delay: 100 });
        	cy.get('button').contains(' Iniciar sesión').click();
        	cy.wait(1000)
        	cy.screenshot();
    	});
	it(leadingZeroes(++i) + ' - Selecting an area', function(){
		cy.get('.btn[aria-owns=bs-select-1]').click();
		cy.get('a#bs-select-1-5').click();
		cy.wait(1000);
		cy.get('.btn[aria-owns=bs-select-2]').click();
		cy.get('a#bs-select-2-0');
		cy.get('a#bs-select-2-1');
	});
	it(leadingZeroes(++i) + ' - Selecting a product', function() {
		cy.get('a#bs-select-2-1').click();
		cy.get('.btn[aria-owns=bs-select-3]').click();
	});
	it(leadingZeroes(++i) + ' - Selecting Assy', function () {
		cy.get('.btn[aria-owns=bs-select-4]').should('not.exist');
		cy.get('a#bs-select-3-1').click();
		cy.get('a#bs-select-3-2').click();
		cy.get('.btn[aria-owns=bs-select-4]');
	});	
	it(leadingZeroes(++i) + ' - Wrong Worker data', function () {
		cy.get('#shift').select('A');
		cy.get('#shift').should('have.value','A');
//		cy.get('#shift').select('C').should('not.exist');
		cy.get('#line').select('All');
		cy.get('#line').should('have.value','All');
		cy.get('#userID').type('59112').type('{enter}');
		cy.get('#userName').should('have.value','User name not found');
		
	});

	it(leadingZeroes(++i) + ' - Right Worker data', function () {
		cy.get('#shift').select('B');
		cy.get('#shift').should('have.value','B');
		cy.get('#line').select('All');
		cy.get('#line').should('have.value','All');
		cy.get('#userID').clear();
		cy.get('#userID').type('1491').type('{enter}');
		cy.get('#userName').should('have.value','Mejias Murillo Andres');
	});
	it(leadingZeroes(++i) + ' - Date inputs', function () {
		cy.get('#sDate').type('2021-03-15');
		cy.get('#eDate').type('2021-04-25');
		cy.get('#sDate').should('have.value','2021-03-15');
		cy.get('#eDate').should('have.value','2021-04-25');
	});
	it(leadingZeroes(++i) + ' - Try to search', function () {
		cy.get('button#search').should('be.disabled');
	});
	it(leadingZeroes(++i) + ' - Select BR', function () {
		cy.get('.btn[aria-owns=bs-select-4]').click();
		cy.get('a#bs-select-4-1').click();
		cy.get('a#bs-select-4-2').click();
		cy.get('a#bs-select-4-3').click();	
		cy.get('.btn[aria-owns=bs-select-4]').click();
	});
	it(leadingZeroes(++i) + ' - Search', function () {
		cy.get('#search').click();
	});
	it(leadingZeroes(++i) + ' - Show tables', function () {
		cy.wait(5000);
		cy.get('button[data-target="#firstDataRow"]').click();
		cy.get('button[data-target="#outputDataRow"]').click();
		cy.get('button[data-target="#paretoDataRow"]').click();
		cy.get('button[data-target="#historyTable"]').click();
	});

});

