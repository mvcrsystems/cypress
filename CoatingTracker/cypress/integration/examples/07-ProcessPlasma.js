describe('Process lot', function () {
	const lotNumber = "1704275G5";
	const desciption = "Scepter Final Assy XC";
	const user3 = '3333';
	const pass3 = '1234';
	const viewer = "CR Viewer";
	var treeIn = "TREE001";
	var treeOut = "TREE004";
	var treeOut2 = "TREE005";
	var treeIn2 = "TREE002";
	var treeIn3 = "TREE003";
	var wrongRackIn = "TRAY002";
	var plasmaRecipe = "MP11561";
	var user1 = 1111;
	var pass1 = 1234;
	var wrongPlasmaRecipe = "MP11333";
	var wrongController = "ED11255-001";
	var flowController = "ED11293-014";
	var flowController2 = "ED11293-010";
	var flowController3 = "ED11293-00-015";
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
	describe('Starts the Plasma In process', function () {
		describe('Insert the third tree before wait time is completed(' + treeIn3 + ')', function () {

			it('0' + i + ' - Enter blank on lot number field', function () {
				cy.screenshot();
				cy.get('#lotNumber').type('{enter}');
				cy.wait(1000);
				cy.get('#rack').should('be.disabled');
				cy.get('#desc').should('contain', 'Lot not logged');
			});
			i++;
			it('0' + i + ' - Display error message "Lot not logged!"', function () {
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
				cy.get('#rack').type(wrongRackIn, { delay: 100 })
				cy.screenshot();
				cy.get('#rack').type('{enter}');
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
				cy.get('#rack').type(treeIn3, { delay: 100 })
				cy.get('#rack').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on ED Field', function () {
				cy.screenshot();
				cy.get('#edIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + '- Display error message "Wrong ED"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong ED');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct ED', function () {
				cy.get('#edIn').clear();
				cy.get('#edIn').type(edPlasma, { delay: 100 })
				cy.get('#edIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on Plasma Recipe Field', function () {
				cy.screenshot();
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Blanks not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter wrong Plasma Recipe', function () {
				cy.get('#PlasmaRecipe').type(wrongPlasmaRecipe, { delay: 100 })
				cy.screenshot();
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Wrong Equipment Recipe"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Equipment Recipe');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-error has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Plasma Recipe', function () {
				cy.get('#PlasmaRecipe').clear();
				cy.get('#PlasmaRecipe').type(plasmaRecipe, { delay: 100 })
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on Flow Controller ED  field #1', function () {
				cy.screenshot();
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Blanks not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #1', function () {
				cy.get('#flowModal1').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #1', function () {
				cy.get('#flowModal1').clear();
				cy.get('#flowModal1').type(flowController, { delay: 100 })
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #2', function () {
				cy.get('#flowModal2').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal2').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #2', function () {
				cy.get('#flowModal2').clear();
				cy.get('#flowModal2').type(flowController2, { delay: 100 })
				cy.get('#flowModal2').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #3', function () {
				cy.get('#flowModal3').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal3').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter flow Controller with expired calibration', function () {
				cy.get('#flowModal3').type('ED11293-008', { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal3').type('{enter}');
				cy.wait(2000);
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
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Type a wrong exp date', function () {
				cy.get('#calModal').click();
				cy.wait(1000);
				cy.get('#calModal').type('{leftarrow}');
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
				cy.get('#userModal').type('3333', { delay: 100 })
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
			it(i + " - Display error message 'Data saved successfully!'", function () {
				cy.get('#swalTitle').contains('Data saved successfully!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.screenshot();
			});
			i++;
			it(i + ' - Accept the data that already inserted', function () {
				cy.get('#btnAccept').click();
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#passIn').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter blank in password field', function () {
				cy.screenshot();
				cy.get('#passIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('not.be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter user', function () {
				cy.get('#userIn').type(user1, { delay: 100 })
				cy.get('#userIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#passIn').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong password', function () {
				cy.get('#passIn').type(user1 + 1, { delay: 100 })
				cy.screenshot();
				cy.get('#passIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#saveIn').should('not.be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Save Information', function () {
				cy.get('#saveIn').click();
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display warning message Wait time out of range"', function () {
				cy.get('#swalTitle').should('contain', 'Wait time out of range');
				cy.screenshot();
				cy.wait(3000);
				cy.get('button').contains('OK').click();
			});
			i++;
			it(i + ' - Display message "Data saved successfully!"', function () {
				cy.get('#swalTitle').should('contain', 'Data saved successfully!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
			});
			i++;
			it(i + ' - Go to Lot log/Receipt Interface and verify that the In Process box it is populated', function () {
				cy.get('a').contains('Lot log/Receipt').click();
				cy.wait(1000);
				cy.get('#che' + lotNumber).should('be.checked');
				cy.wait(2000);
				cy.screenshot();
			});
			i++;
			it(i + ' - Go back to Process interface', function () {
				cy.get('a').contains('Process').click();
				cy.wait(1000);
			});
		});
		i++;
		describe('Insert the second tree (' + treeIn2 + ')', function () {
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
				cy.screenshot();
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.wait(1000);
				cy.get('button').contains('OK').click();
			});
			i++;
			it(i + ' - Enter a wrong holder in', function () {
				cy.get('#rack').type(wrongRackIn, { delay: 100 })
				cy.screenshot();
				cy.get('#rack').type('{enter}');
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
				cy.get('#rack').type(treeIn2, { delay: 100 })
				cy.get('#rack').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on ED Field', function () {
				cy.screenshot();
				cy.get('#edIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Wrong ED"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong ED');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct ED', function () {
				cy.get('#edIn').clear();
				cy.get('#edIn').type(edPlasma, { delay: 100 })
				cy.get('#edIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on Plasma Recipe Field', function () {
				cy.screenshot();
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Blanks not allowed!"', function () {
				cy.screenshot();
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter wrong Plasma Recipe', function () {
				cy.get('#PlasmaRecipe').type(wrongPlasmaRecipe, { delay: 100 })
				cy.screenshot();
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Wrong Equipment Recipe"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Equipment Recipe');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-error has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Plasma Recipe', function () {
				cy.get('#PlasmaRecipe').clear();
				cy.get('#PlasmaRecipe').type(plasmaRecipe, { delay: 100 })
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on Flow Controller ED  field #1', function () {
				cy.screenshot();
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Blanks not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #1', function () {
				cy.get('#flowModal1').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #1', function () {
				cy.get('#flowModal1').clear();
				cy.get('#flowModal1').type(flowController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #2', function () {
				cy.get('#flowModal2').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal2').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #2', function () {
				cy.get('#flowModal2').clear();
				cy.get('#flowModal2').type(flowController2, { delay: 100 })
				cy.get('#flowModal2').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #3', function () {
				cy.get('#flowModal3').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal3').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #3', function () {
				cy.get('#flowModal3').clear();
				cy.get('#flowModal3').type(flowController3, { delay: 100 })
				cy.get('#flowModal3').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Accept the data that already inserted', function () {
				cy.get('#btnAccept').click();
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#passIn').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter blank in password field', function () {
				cy.screenshot();
				cy.get('#passIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('not.be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter user', function () {
				cy.get('#userIn').type(user1, { delay: 100 })
				cy.get('#userIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#passIn').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong password', function () {
				cy.get('#passIn').type(user1 + 1, { delay: 100 })
				cy.screenshot();
				cy.get('#passIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
		i++;
		describe('Insert the first tree (' + treeIn + ')', function () {
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
				cy.get('#rack').type(wrongRackIn, { delay: 100 })
				cy.screenshot();
				cy.get('#rack').type('{enter}');
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
				cy.get('#rack').type(treeIn, { delay: 100 })
				cy.get('#rack').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on ED Field', function () {
				cy.screenshot();
				cy.get('#edIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Wrong ED"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong ED');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct ED', function () {
				cy.get('#edIn').clear();
				cy.get('#edIn').type(edPlasma, { delay: 100 })
				cy.get('#edIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on Plasma Recipe Field', function () {
				cy.screenshot();
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Blanks not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter wrong Plasma Recipe', function () {
				cy.get('#PlasmaRecipe').type(wrongPlasmaRecipe, { delay: 100 })
				cy.screenshot();
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Wrong Equipment Recipe"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Equipment Recipe');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-error has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#flowModal1').should('be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Plasma Recipe', function () {
				cy.get('#PlasmaRecipe').clear();
				cy.get('#PlasmaRecipe').type(plasmaRecipe, { delay: 100 })
				cy.get('#PlasmaRecipe').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter blank on Flow Controller ED  field #1', function () {
				cy.screenshot();
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Blanks not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #1', function () {
				cy.get('#flowModal1').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal2').should('be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #1', function () {
				cy.get('#flowModal1').clear();
				cy.get('#flowModal1').type(flowController, { delay: 100 })
				cy.get('#flowModal1').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #2', function () {
				cy.get('#flowModal2').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal2').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #2', function () {
				cy.get('#flowModal2').clear();
				cy.get('#flowModal2').type(flowController2, { delay: 100 })
				cy.get('#flowModal2').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong Flow Controller ED field #3', function () {
				cy.get('#flowModal3').type(wrongController, { delay: 100 })
				cy.screenshot();
				cy.get('#flowModal3').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "ED not found"', function () {
				cy.get('#swalTitle').should('contain', 'ED not found');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#btnAccept').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct Flow Controller ED field #3', function () {
				cy.get('#flowModal3').clear();
				cy.get('#flowModal3').type(flowController3, { delay: 100 })
				cy.get('#flowModal3').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Accept the data that already inserted', function () {
				cy.get('#btnAccept').click();
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#passIn').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter blank in password field', function () {
				cy.screenshot();
				cy.get('#passIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#userIn').should('not.be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter user', function () {
				cy.get('#userIn').type(user1, { delay: 100 })
				cy.get('#userIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#passIn').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong password', function () {
				cy.get('#passIn').type(user1 + 1, { delay: 100 })
				cy.screenshot();
				cy.get('#passIn').type('{enter}');
				cy.wait(2000);
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
				cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#ProcessIn').should('contain', 'Plasma');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('not.be.disabled');
				cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#parameterModal').should('not.be.visible');
				cy.get('#PlasmaRecipe').should('not.be.disabled');
				cy.get('#plasmaRecipeGroup').should('have.class', 'form-group has-success has-feedback');
				cy.get('#plasmaReccipeCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal1').should('not.be.disabled');
				cy.get('#flowSpan1').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck1').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal2').should('not.be.disabled');
				cy.get('#flowSpan2').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck2').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#flowModal3').should('not.be.disabled');
				cy.get('#flowSpan3').should('have.class', 'form-group has-success has-feedback');
				cy.get('#flowCheck3').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#btnAccept').should('not.be.disabled');
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
				cy.wait(1000);
				cy.screenshot();
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
	});
	i++;
	describe('Starts the plasma out process', function () {
		describe('Take out the fisrt tree (' + treeIn + ')', function () {
			it(i + ' - Enter blank on lot number field', function () {
				cy.get('#lotNumber').type('{enter}');
				cy.screenshot();
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
				cy.get('#rack').type(wrongRackIn, { delay: 100 })
				cy.screenshot();
				cy.get('#rack').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
			});
			i++;
			it(i + ' - Enter correct holder in', function () {
				cy.get('#rack').clear();
				cy.get('#rack').type(treeIn, { delay: 100 })
				cy.get('#rack').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
			it(i + ' - Enter the same holder where we have the units (' + treeIn + ')', function () {
				cy.get('#rackOut').type(treeIn, { delay: 100 })
				cy.screenshot();
				cy.get('#rackOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Can not use the same  Holder!', function () {
				cy.get('#swalTitle').should('contain', 'Can not use the same  Holder!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#rackOut').type(treeOut, { delay: 100 })
				cy.get('#rackOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter negative number in qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('-10', { delay: 100 })
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity');
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + '- Enter higher number in qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('11', { delay: 100 })
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('10', { delay: 100 })
				cy.get('#qtyOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#userOut').type(user1, { delay: 100 })
				cy.get('#userOut').type('{enter}')
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('not.be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + '- Type a wrong password', function () {
				cy.get('#passOut').type('1004', { delay: 100 })
				cy.screenshot();
				cy.get('#passOut').type('{enter}')
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');

			});
			i++;
			it(i + '- Display error message "Password or user incorrect!"', function () {
				cy.screenshot();
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#saveOut').should('not.be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
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
			it(i + '- Go to Viewer', function () {
				cy.get('a').contains(viewer).click();
				cy.wait(10000);
				cy.screenshot();
			});
			i++;
			it(i + ' - Go back to Process lot interface', function () {
				cy.get('a').contains('Process').click();
				cy.wait(1000);
				cy.screenshot();
			});
		});
		i++;
		describe('Take out the second tree (' + treeIn2 + ')', function () {
			it(i + ' - Enter blank on lot number field', function () {
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
			it(i + '- Enter a wrong holder in', function () {
				cy.get('#rack').type(wrongRackIn, { delay: 100 })
				cy.screenshot();
				cy.get('#rack').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
			});
			i++;
			it(i + ' - Enter correct holder in', function () {
				cy.get('#rack').clear();
				cy.get('#rack').type(treeIn2, { delay: 100 })
				cy.get('#rack').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
			it(i + ' - Enter the same holder where we have the units (' + treeIn2 + ')', function () {
				cy.get('#rackOut').type(treeIn2, { delay: 100 })
				cy.screenshot();
				cy.get('#rackOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Can not use the same  Holder!', function () {
				cy.get('#swalTitle').should('contain', 'Can not use the same  Holder!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#rackOut').type(treeOut2, { delay: 100 })
				cy.get('#rackOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter negative number in qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('-10', { delay: 100 })
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity');
				cy.wait(1000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Enter higher number in qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('31', { delay: 100 })
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('30', { delay: 100 })
				cy.get('#qtyOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.screenshot();
				cy.get('#userOut').type('{enter}', { force: true })
				cy.wait(1000)
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#userOut').type(user1, { delay: 100 })
				cy.screenshot();
				cy.get('#userOut').type('{enter}')
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('not.be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Type a wrong password', function () {
				cy.get('#passOut').type('1004', { delay: 100 })
				cy.screenshot();
				cy.get('#passOut').type('{enter}')
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.screenshot();
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good password', function () {
				cy.get('#userOut').type('{enter}')
				cy.screenshot();
				cy.get('#passOut').clear();
				cy.get('#passOut').type(pass1, { delay: 100 })
				cy.get('#passOut').type('{enter}')
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#saveOut').should('not.be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
			it(i + ' - Go back to Process lot interface', function () {
				cy.get('a').contains('Process').click();
				cy.wait(1000);
				cy.screenshot();
			});
		});
		i++;
		describe('Take out the third tree (' + treeIn3 + ')', function () {
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
				cy.screenshot();
				cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
				cy.wait(1000);
				cy.get('button').contains('OK').click();
			});
			i++;
			it(i + ' - Enter a wrong holder in', function () {
				cy.get('#rack').type(wrongRackIn, { delay: 100 })
				cy.screenshot();
				cy.get('#rack').type('{enter}');
				cy.wait(1000);
			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
			});
			i++;
			it(i + ' - Enter correct holder in', function () {
				cy.get('#rack').clear();
				cy.get('#rack').type(treeIn3, { delay: 100 })
				cy.get('#rack').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
			it(i + ' - Enter the same holder where we have the units (' + treeIn3 + ')', function () {
				cy.get('#rackOut').type(treeIn3, { delay: 100 })
				cy.screenshot();
				cy.get('#rackOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Can not use the same  Holder!', function () {
				cy.get('#swalTitle').should('contain', 'Can not use the same  Holder!');
				cy.wait(1000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
			it(i + ' - Enter a holder the already have unit (Merge)', function () {
				cy.get('#rackOut').clear();
				cy.get('#rackOut').type(treeOut, { delay: 100 })
				cy.get('#rackOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.wait(1000);
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter negative number in qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('-10', { delay: 100 })
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct qty out', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('10', { delay: 100 })
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
			});
			i++;
			it(i + ' - Display warning message "Holder in use, do you want to merge units?', function () {
				cy.get('#swalTitle').should('contain', 'Holder in use, do you want to merge units?');
				cy.screenshot();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
			});
			i++;
			it(i + ' - Leave blank on user', function () {
				cy.get('#userOut').clear();
				cy.screenshot();
				cy.get('#userOut').type('{enter}')
				cy.wait(1000)
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#passOut').should('not.be.disabled');
				cy.get('#saveIn').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + '- Leave blank on password', function () {
				cy.get('#passOut').clear();
				cy.screenshot();
				cy.get('#passOut').type('{enter}')
				cy.wait(2000)
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#userOut').type(user1, { delay: 100 })
				cy.get('#userOut').type('{enter}')
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
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
				cy.get('#ProcessOut').should('contain', 'Plasma to Base Coat');
				cy.get('#edOut').should('have.value', edPlasma);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.get('#saveOut').should('not.be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
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
			it(i + ' - Go back to Process lot interface', function () {
				cy.get('a').contains('Process').click();
				cy.wait(1000);
				cy.screenshot();
			});
			i++;
		});
	});
	describe('Remove lot from on-hold status  (Plasma)', function () {
		it(i + ' - Go to Lot log/Receipt interface', function () {
			cy.get('a').contains('log/Receipt').click();
			cy.wait(2000);
			cy.get('#che' + lotNumber).should('be.checked');
			cy.screenshot();
		});
		i++;
		it(i + " - Open On hold section", function () {
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
		it(i + " - Leave blank on comments input", function () {
			cy.get('#comment').focus();
			cy.wait(1000);
			cy.screenshot();
		});
		i++;
		it(i + ' - Leave Blank on user input (Comments field with blank)', function () {
			cy.get('#comment').should('be.empty');
			cy.get('#usrModal').should('not.be.disabled')
			cy.get('#usrModal').type('{enter}')
			cy.wait(1000);
			cy.get('#pwdModal').should('not.be.disabled')
			cy.get('#btnComment').should('be.disabled')
			cy.screenshot();
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
		it(i + " - Click on Insert Comment button", function () {
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
		it(i + " - Type Reason (on-hold)", function () {
			cy.get('#comment').type('Remove on hold status (Plasma)', { delay: 100 })
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
		it(i + " - Click on Insert Comment button", function () {
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