describe('Process lot', function () {
	const lotNumber = "1704275G5";
	const desciption = "Scepter Final Assy XC";
	const user3 = '1005';
	const pass3 = '1005';
	const viewer = "CR Viewer";
	var treeIn = "TREE001";
	var treeOut = "TREE004";
	var treeOut2 = "TREE005";
	var treeIn2 = "TREE002";
	var treeIn3 = "TREE003";
	var rackIn = "RACK001";
	var rackIn2 = "RACK002";
	var rackOut3 = "RACK003";
	var rackOut4 = "RACK004";
	var wrongRackIn = "TRAY002";
	var qtySmaller = -8;
	var washing = "Washing"
	var qtyHigher = 11;
	var firstQty = 10;
	var wrongEd1 = "WASHING";
	var EDWashing = "WASHING";
	var edCleaning = "CLEANING";
	var edPlasma = "ED11255-003";
	var edBasecoat = "ED11194-006";
	var edTopCoat = "ED12275-001";
	var plasmaRecipe = "MP11561";
	var edRuler = "ED2012-5526";
	var edOven = "ED11282-004";
	var trayOut3 = 'TRAY003';
	var trayOut4 = 'TRAY004';
	var trayIn = 'TRAY001';
	var trayIn2 = 'TRAY002';
	var baseCoatPlasma = 2;
	var topCoatPlasma = 3;
	var hygrometerEd = "ED11371-014";
	var user1 = 1111;
	var pass1 = 1234;
	var wrongPlasmaRecipe = "MP11333";
	var wrongController = "ED11255-001";
	var flowController = "ED11293-008";
	var flowController2 = "ED11293-010";
	var flowController3 = "ED11294-00-018";
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
	describe('Cleanning In', function () {/*

		it('0' + i + ' Enter blank on lot number field', function () {
			cy.screenshot();
			cy.get('#lotNumber').type('{enter}');
			cy.wait(1000);
			cy.get('#rack').should('be.disabled');
			cy.get('#desc').should('contain', 'Lot not logged');
		});
		i++;
		it('0' + i + ' - Display error message "Lot not logged!"', function () {
			cy.get('#swalTitle').should('contain', 'Lot not logged!');
			cy.get('#desc').should('contain', 'Lot not logged');
			cy.wait(1000);
			cy.get('button').contains('OK').click();
			cy.get('#rack').should('be.disabled');
			cy.screenshot()
		});
		i++;
		it('0' + i + ' - Enter a lot number not logged', function () {
			cy.get('#lotNumber').type('170575G7', { delay: 100 });
			cy.get('#lotNumber').type('{enter}');
			cy.wait(1000);
			cy.get('#rack').should('be.disabled');
			cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
			cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.screenshot()
		});
		i++;
		it('0' + i + ' - Display error message "Lot not logged!"', function () {
			cy.get('#swalTitle').should('contain', 'Lot not logged!');
			cy.get('#desc').should('contain', 'Lot not logged');
			cy.screenshot()
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
			cy.screenshot()
		});
		i++;
		it('0' + i + ' - Enter a blank in holder in field', function () {
			cy.screenshot()
			cy.get('#rack').type('{enter}');
			cy.wait(1000);
			cy.get('#desc').should('contain', desciption);
			cy.get('#rack').should('not.be.disabled');
		});
		i++;
		it('0' + i + ' - Display error message "Blanks not allowed!"', function () {
			cy.get('#swalTitle').should('contain', 'Blanks not allowed!');
			cy.wait(1000);
			cy.screenshot()
			cy.get('button').contains('OK').click();
		});
		i++;
		it(i + ' - Enter a wrong holder in', function () {
			cy.get('#rack').type(wrongRackIn, { delay: 100 })
			cy.screenshot()
			cy.get('#rack').type('{enter}');
			cy.wait(1000);
		});
		i++;
		it(i + ' - Display error message "Holder not allowed!"', function () {
			cy.get('#swalTitle').should('contain', 'Holder not allowed!');
			cy.wait(1000);
			cy.screenshot()
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
			cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
			cy.get('#qtyIn').should('not.be.disabled');
			cy.get('#edIn').should('be.disabled');
			cy.get('#userIn').should('be.disabled');
			cy.get('#passIn').should('be.disabled');
			cy.get('#saveIn').should('be.disabled');
			cy.screenshot()
		});
		i++;
		it(i + ' - Enter higher qty that the lot has in qty field', function () {
			cy.get('#qtyIn').clear();
			cy.get('#qtyIn').type(qtyHigher, { delay: 100 })
			cy.screenshot();
			cy.get('#qtyIn').type('{enter}');
			cy.wait(2000);
		});
		i++;
		it(i + ' - Display error message "Wrong Quantity"', function () {
			cy.get('#swalTitle').should('contain', 'Wrong Quantity');
			cy.wait(1000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.get('#qtyInput').should('have.class', 'form-group has-error has-feedback');
			cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
			cy.get('#qtyIn').should('not.be.disabled');
			cy.get('#edIn').should('be.disabled');
			cy.get('#userIn').should('be.disabled');
			cy.get('#passIn').should('be.disabled');
			cy.get('#saveIn').should('be.disabled');
		});
		i++;
		it(i + ' - Enter negative qty in qty field', function () {
			cy.get('#qtyIn').clear();
			cy.get('#qtyIn').type(qtySmaller, { delay: 100 })
			cy.screenshot();
			cy.get('#qtyIn').type('{enter}');
			cy.wait(2000);
		});
		i++;
		it(i + ' - Display error message "Wrong Quantity"', function () {
			cy.get('#swalTitle').should('contain', 'Wrong Quantity');
			cy.wait(1000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.get('#qtyInput').should('have.class', 'form-group has-error has-feedback');
			cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
			cy.get('#qtyIn').should('not.be.disabled');
			cy.get('#edIn').should('be.disabled');
			cy.get('#userIn').should('be.disabled');
			cy.get('#passIn').should('be.disabled');
			cy.get('#saveIn').should('be.disabled');
		});
		i++;
		it(i + ' - Enter correct qty in qty field', function () {
			cy.get('#qtyIn').clear();
			cy.get('#qtyIn').type(firstQty, { delay: 100 })
			cy.get('#qtyIn').type('{enter}');
			cy.wait(2000);
			cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
			cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
			cy.get('#edIn').should('not.be.disabled');
			cy.get('#userIn').should('be.disabled');
			cy.get('#passIn').should('be.disabled');
			cy.get('#saveIn').should('be.disabled');
			cy.screenshot();
		});
		i++;
		it(i + ' - Enter blank in ED field', function () {
			cy.screenshot();
			cy.get('#edIn').type('{enter}')
			cy.wait(2000);
		});
		i++;
		it(i + ' - Display error message "Wrong ED"', function () {
			cy.get('#swalTitle').should('contain', 'Wrong ED');
			cy.wait(1000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
			cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.get('#userIn').should('be.disabled');
			cy.get('#passIn').should('be.disabled');
			cy.get('#saveIn').should('be.disabled');
		});
		i++;
		it(i + ' - Enter wrong ED', function () {
			cy.get('#edIn').type(wrongEd1, { delay: 100 })
			cy.screenshot();
			cy.get('#edIn').type('{enter}');
			cy.wait(2000);
		});
		i++;
		it(i + ' - Display error message "Wrong ED"', function () {
			cy.get('#swalTitle').should('contain', 'Wrong ED');
			cy.wait(1000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
			cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
			cy.get('#userIn').should('be.disabled');
			cy.get('#passIn').should('be.disabled');
			cy.get('#saveIn').should('be.disabled');
		});
		i++;
		it(i + ' - Enter correct ED', function () {
			cy.get('#edIn').clear();
			cy.get('#edIn').type(edCleaning, { delay: 100 })
			cy.get('#edIn').type('{enter}');
			cy.wait(2000);
			cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
			cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
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
			cy.wait(1000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.get('#userIn').should('not.be.disabled');
			cy.get('#passIn').should('be.disabled');
			cy.get('#saveIn').should('be.disabled');
		});
		i++;
		it(i + ' - Enter good user', function () {
			cy.get('#userIn').type(user1, { delay: 100 })
			cy.get('#userIn').type('{enter}');
			cy.wait(2000);
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
			cy.get('#saveIn').should('be.disabled');
		});
		i++;
		it(i + ' - Display error message "Password or user incorrect!"', function () {
			cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
			cy.wait(1000);
			cy.screenshot();
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
			cy.wait(1000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
		});
		i++;
		it(i + ' - Go to Lot log and verify that the In Process box it is populated', function () {
			cy.get('a').contains('Lot log/Receipt').click();
			cy.wait(1000);
			cy.get('#process' + lotNumber).should('be.checked');
			cy.screenshot();
		});
		i++;
		describe('Update Quantity on Lot Log/Recipe Interface', function () {

			it(i + ' - Choose the lot number in lot log history', function () {
				cy.get('#lot' + lotNumber).click();
				cy.wait(1000);
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Put smaller quantity', function () {
				cy.get('#qty').type('5', { dalay: 100 });
				cy.get('#qty').type('{enter}');
				cy.wait(1000);
				cy.get('#lubricity').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on lubricity', function () {
				cy.get('#lubricity').clear()
				cy.wait(1000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify lubricity quatity', function () {
				cy.get('#lubricity').should('be.empty');
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + " - Display error message 'Wrong Quantity!'", function () {
				cy.get('#swalTitle').contains('Wrong Quantity!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#lubricity').should('be.empty');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Insert a negative number on lubricity quatity', function () {
				cy.get('#lubricity').type('-2')
				cy.wait(2000)
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify lubricity quatity', function () {
				cy.get('#lubricity').should('be.empty');
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + " - Display error message 'Wrong Quantity!'", function () {
				cy.get('#swalTitle').contains('Wrong Quantity!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#lubricity').should('be.empty');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Insert lubricity quatity', function () {
				cy.get('#lubricity').type('1')
				cy.wait(2000)
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify lubricity quantity', function () {
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on user', function () {
				cy.screenshot();
				cy.get('#usr').type('{enter}')
				cy.wait(1000)
				cy.get('#usr').should('be.empty');
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Leave blank on password', function () {
				cy.screenshot();
				cy.get('#pwd').type('{enter}')
				cy.wait(2000)
				cy.get('#pwd').should('be.empty');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.screenshot();
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#usr').type(user1, { delay: 100 })
				cy.get('#usr').type('{enter}')
				cy.wait(1000);
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
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
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.screenshot();
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good password', function () {
				cy.get('#usr').type('{enter}')
				cy.get('#pwd').clear();
				cy.get('#pwd').type(pass1, { delay: 100 })
				cy.get('#pwd').type('{enter}')
				cy.wait(1000);
				cy.get('#saveBut').should('not.be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Click on update button', function () {
				cy.get('#saveBut').click();
				cy.wait(10000);
			});
			i++;
			it(i + ' - Display error message "You cannot update the quantity for less than what you have in process"', function () {
				cy.get('#swalTitle').should('contain', 'You cannot update the quantity for less than what you have in process');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.screenshot();
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Put higher quantity', function () {
				cy.get('#qty').clear();
				cy.get('#qty').type('50', { dalay: 100 });
				cy.get('#qty').type('{enter}');
				cy.wait(1000);
				cy.get('#lubricity').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on lubricity', function () {
				cy.get('#lubricity').clear()
				cy.wait(1000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify lubricity quatity', function () {
				cy.get('#lubricity').should('be.empty');
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + " - Display error message 'Wrong Quantity!'", function () {
				cy.get('#swalTitle').contains('Wrong Quantity!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#lubricity').should('be.empty');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Insert a negative number on lubricity quatity', function () {
				cy.get('#lubricity').type('-2')
				cy.wait(2000)
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify lubricity quatity', function () {
				cy.get('#lubricity').should('be.empty');
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + " - Display error message 'Wrong Quantity!'", function () {
				cy.get('#swalTitle').contains('Wrong Quantity!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#lubricity').should('be.empty');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Insert lubricity quatity', function () {
				cy.get('#lubricity').type('1')
				cy.wait(2000)
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify lubricity quantity', function () {
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on user', function () {
				cy.get('#usr').clear();
				cy.get('#usr').type('{enter}')
				cy.wait(1000)
				cy.get('#usr').should('be.empty');
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Leave blank on password', function () {
				cy.get('#pwd').clear();
				cy.screenshot();
				cy.get('#pwd').type('{enter}')
				cy.wait(2000)
				cy.get('#pwd').should('be.empty');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.screenshot();
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#usr').type(user1, { delay: 100 })
				cy.get('#usr').type('{enter}')
				cy.wait(1000);
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
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
			it(i + ' - Display error message "Password or user incorrect!"', function () {
				cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.screenshot();
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good password', function () {
				cy.get('#usr').type('{enter}')
				cy.get('#pwd').clear();
				cy.get('#pwd').type(pass1, { delay: 100 })
				cy.get('#pwd').type('{enter}')
				cy.wait(1000);
				cy.get('#saveBut').should('not.be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Click on update button', function () {
				cy.get('#saveBut').click();
				cy.wait(1000);
			});
			i++;
			it(i + ' - Display message "Data saved successfully!"', function () {
				cy.get('#swalTitle').should('contain', 'Data saved successfully!');
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.screenshot();
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
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
			describe('Enter the remaining 50 units', function () {
				it(i + ' - Enter a correct lot number', function () {
					cy.get('#lotNumber').type(lotNumber, { delay: 100 });
					cy.get('#lotNumber').type('{enter}');
					cy.get('#rack').should('not.be.disabled');
					cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
					cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#desc').should('contain', desciption);
					cy.screenshot();
				});
				i++;
				it(i + '- Enter a wrong holder', function () {
					cy.get('#rack').type(wrongRackIn, { delay: 100 })
					cy.screenshot();
					cy.get('#rack').type('{enter}');
					cy.wait(1000);
					cy.get('#rack').should('not.be.disabled');
				});
				i++;
				it(i + ' - Display error message "Holder not allowed!"', function () {
					cy.get('#swalTitle').should('contain', 'Holder not allowed!');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
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
				it(i + ' - Enter a good holder', function () {
					cy.get('#rack').clear();
					cy.get('#rack').type(treeIn2, { delay: 100 })
					cy.get('#rack').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyIn').should('not.be.disabled');
					cy.get('#edIn').should('be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot()
				});
				i++;
				it(i + ' - Try to enter 50 units in a one tree "Holder"', function () {
					cy.screenshot()
					cy.get('#qtyIn').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyIn').should('not.be.disabled');
					cy.get('#edIn').should('be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Display error message "Wrong Quantity"', function () {
					cy.get('#swalTitle').should('contain', 'Wrong Quantity');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-error has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.get('#edIn').should('be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Enter 30 units in one tree', function () {
					cy.get('#qtyIn').clear();
					cy.get('#qtyIn').type('30', { delay: 100 })
					cy.get('#qtyIn').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edIn').should('not.be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Enter wrong ED', function () {
					cy.get('#edIn').type(wrongEd1, { delay: 100 })
					cy.screenshot();
					cy.get('#edIn').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edIn').should('not.be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Display error message "Wrong ED"', function () {
					cy.get('#swalTitle').should('contain', 'Wrong ED');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
					cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Enter correct ED', function () {
					cy.get('#edIn').clear();
					cy.get('#edIn').type(edCleaning, { delay: 100 })
					cy.get('#edIn').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#userIn').should('not.be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on user', function () {
					cy.get('#userIn').clear();
					cy.screenshot();
					cy.get('#userIn').type('{enter}')
					cy.wait(1000)
					cy.get('#passIn').should('be.empty');
					cy.get('#passIn').should('not.be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Leave blank on password', function () {
					cy.get('#passIn').clear();
					cy.screenshot();
					cy.get('#passIn').type('{enter}')
					cy.wait(2000)
					cy.get('#passIn').should('be.empty');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Display error message "Password or user incorrect!"', function () {
					cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#userIn').should('not.be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Type a good user', function () {
					cy.get('#userIn').type(user1, { delay: 100 })
					cy.get('#userIn').type('{enter}')
					cy.wait(1000);
					cy.get('#passIn').should('not.be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a wrong password', function () {
					cy.get('#passIn').type('1004', { delay: 100 })
					cy.screenshot();
					cy.get('#passIn').type('{enter}')
					cy.wait(1000);
				});
				i++;
				it(i + ' - Display error message "Password or user incorrect!"', function () {
					cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#userIn').should('not.be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Type a good password', function () {
					cy.get('#userIn').type('{enter}')
					cy.get('#passIn').clear();
					cy.get('#passIn').type(pass1, { delay: 100 })
					cy.get('#passIn').type('{enter}')
					cy.wait(1000);
					cy.get('#saveIn').should('not.be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Click on update button', function () {
					cy.get('#saveIn').click();
					cy.wait(1000);
				});
				i++;
				it(i + ' - Display message "Data saved successfully!"', function () {
					cy.get('#swalTitle').should('contain', 'Data saved successfully!');
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
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
					cy.wait(10000);
				});
				i++;
			});
			describe('Enter the remaining 10 units', function () {
				it(i + ' - Enter a correct lot number', function () {
					cy.get('#lotNumber').type(lotNumber, { delay: 100 });
					cy.get('#lotNumber').type('{enter}');
					cy.get('#rack').should('not.be.disabled');
					cy.get('#lot').should('have.class', 'form-group has-success has-feedback');
					cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#desc').should('contain', desciption);
					cy.screenshot();
				});
				i++;
				it(i + '- Enter a wrong holder', function () {
					cy.get('#rack').type(wrongRackIn, { delay: 100 })
					cy.screenshot();
					cy.get('#rack').type('{enter}');
					cy.wait(1000);
					cy.get('#rack').should('not.be.disabled');
				});
				i++;
				it(i + ' - Display error message "Holder not allowed!"', function () {
					cy.get('#swalTitle').should('contain', 'Holder not allowed!');
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
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
				it(i + ' - Enter a good holder', function () {
					cy.get('#rack').clear();
					cy.get('#rack').type(treeIn3, { delay: 100 })
					cy.get('#rack').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyIn').should('not.be.disabled');
					cy.get('#edIn').should('be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Enter 10 units in one tree', function () {
					cy.get('#qtyIn').clear();
					cy.get('#qtyIn').type('10', { delay: 100 })
					cy.get('#qtyIn').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edIn').should('not.be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Enter wrong ED', function () {
					cy.get('#edIn').type(wrongEd1, { delay: 100 })
					cy.screenshot();
					cy.get('#edIn').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edIn').should('not.be.disabled');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Display error message "Wrong ED"', function () {
					cy.get('#swalTitle').should('contain', 'Wrong ED');
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edInput').should('have.class', 'form-group has-error has-feedback');
					cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Enter correct ED', function () {
					cy.get('#edIn').clear();
					cy.get('#edIn').type(edCleaning, { delay: 100 })
					cy.get('#edIn').type('{enter}');
					cy.wait(1000);
					cy.get('#rackInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#rackCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
					cy.get('#qtyInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#qtyInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#edInput').should('have.class', 'form-group has-success has-feedback');
					cy.get('#edInCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
					cy.get('#userIn').should('not.be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Leave blank on user', function () {
					cy.get('#userIn').clear();
					cy.screenshot();
					cy.get('#userIn').type('{enter}')
					cy.wait(1000)
					cy.get('#passIn').should('be.empty');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Leave blank on password', function () {
					cy.get('#passIn').clear();
					cy.screenshot();
					cy.get('#passIn').type('{enter}')
					cy.wait(2000)
					cy.get('#passIn').should('be.empty');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Display error message "Password or user incorrect!"', function () {
					cy.screenshot();
					cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#userIn').should('not.be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Type a good user', function () {
					cy.get('#userIn').type(user1, { delay: 100 })
					cy.get('#userIn').type('{enter}')
					cy.wait(1000);
					cy.get('#passIn').should('not.be.disabled');
					cy.get('#saveIn').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Type a wrong password', function () {
					cy.get('#passIn').type('1004', { delay: 100 })
					cy.screenshot();
					cy.get('#passIn').type('{enter}')
					cy.wait(1000);
				});
				i++;
				it(i + ' - Display error message "Password or user incorrect!"', function () {
					cy.get('#swalTitle').should('contain', 'Password or user incorrect!');
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#userIn').should('not.be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
				});
				i++;
				it(i + ' - Type a good password', function () {
					cy.get('#userIn').type('{enter}')
					cy.get('#passIn').clear();
					cy.get('#passIn').type(pass1, { delay: 100 })
					cy.get('#passIn').type('{enter}')
					cy.wait(1000);
					cy.get('#saveIn').should('not.be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + ' - Click on update button', function () {
					cy.get('#saveIn').click();
					cy.wait(1000);
				});
				i++;
				it(i + ' - Display message "Data saved successfully!"', function () {
					cy.get('#swalTitle').should('contain', 'Data saved successfully!');
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#userIn').should('be.disabled');
					cy.get('#passIn').should('be.disabled');
					cy.get('#saveIn').should('be.disabled');
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
		});*/
	});
	describe('Cleanning Out', function () {
		describe('Take out the first 10 units (' + treeIn + ')', function () {
			it(i + ' - Enter blank on lot number field', function () {
				cy.get('#lotNumber').type('{enter}');
				cy.wait(1000);
				cy.get('#rack').should('be.disabled');
				cy.get('#desc').should('contain', 'Lot not logged');
				cy.get('#lot').should('have.class', 'form-group has-error has-feedback');
				cy.get('#lotCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.screenshot();
			});
			i++;
			it(i + ' - Display error message "Lot not logged!"', function () {
				cy.get('#swalTitle').should('contain', 'Lot not logged!');
				cy.get('#desc').should('contain', 'Lot not logged');
				cy.screenshot();
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
			it(i + ' - Enter wrong holder', function () {
				cy.get('#rack').type(wrongRackIn, { delay: 100 });
				cy.screenshot();
				cy.get('#rack').type('{enter}');
			});

			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter "holder in" where we have the units (' + treeIn + ')', function () {
				cy.get('#rack').clear();
				cy.get('#rack').type(treeIn, { delay: 100 });
				cy.get('#rack').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong holder out', function () {
				cy.get('#rackOut').clear();
				cy.get('#rackOut').type(wrongRackIn, { delay: 100 });
				cy.screenshot();
				cy.get('#rackOut').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct holder out', function () {
				cy.get('#rackOut').clear();
				cy.get('#rackOut').type(treeIn, { delay: 100 });
				cy.get('#rackOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter higher quantity', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('11', { delay: 100 });
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity!"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity!');
				cy.get('#desc').should('contain', desciption);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct quantity', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('10', { delay: 100 });
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('not.be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
		});
		describe('Take out the second tree (' + treeIn2 + ')', function () {
			it(i + ' - Enter blank on lot number field', function () {
				cy.screenshot();
				cy.get('#lotNumber').type('{enter}');
				cy.wait(1000);
				cy.get('#rack').should('be.disabled');
				cy.get('#desc').should('contain', 'Lot not logged');
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
			it(i + ' - Enter wrong holder', function () {
				cy.get('#rack').type(wrongRackIn, { delay: 100 });
				cy.get('#rack').type('{enter}');

			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter "holder in" where we have the units (' + treeIn + ')', function () {
				cy.get('#rack').clear();
				cy.get('#rack').type(treeIn2, { delay: 100 });
				cy.get('#rack').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong holder out', function () {
				cy.get('#rackOut').clear();
				cy.get('#rackOut').type(wrongRackIn, { delay: 100 });
				cy.screenshot();
				cy.get('#rackOut').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct holder out', function () {
				cy.get('#rackOut').clear();
				cy.get('#rackOut').type(treeIn2, { delay: 100 });
				cy.get('#rackOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter higher quantity', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('31', { delay: 100 });
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity!"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct quantity', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('30', { delay: 100 });
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('not.be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
		describe('Take out the third tree (' + treeIn3 + ')', function () {
			it(i + ' - Enter blank on lot number field', function () {
				cy.screenshot();
				cy.get('#lotNumber').type('{enter}');
				cy.wait(1000);
				cy.get('#rack').should('be.disabled');
				cy.get('#desc').should('contain', 'Lot not logged');
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
			it(i + ' - Enter wrong holder', function () {
				cy.get('#rack').type(wrongRackIn, { delay: 100 });
				cy.screenshot();
				cy.get('#rack').type('{enter}');

			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.wait(1000);
				cy.get('button').contains('OK').click();
				cy.get('#ProcessIn').should('contain', 'Limpieza/Cleaning');
				cy.get('#qtyIn').should('be.disabled');
				cy.get('#edIn').should('be.disabled');
				cy.get('#userIn').should('be.disabled');
				cy.get('#passIn').should('be.disabled');
				cy.get('#saveIn').should('be.disabled');
			});
			i++;
			it(i + ' - Enter "holder in" where we have the units (' + treeIn + ')', function () {
				cy.get('#rack').clear();
				cy.get('#rack').type(treeIn3, { delay: 100 });
				cy.get('#rack').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter wrong holder out', function () {
				cy.get('#rackOut').clear();
				cy.get('#rackOut').type(wrongRackIn, { delay: 100 });
				cy.screenshot();
				cy.get('#rackOut').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Holder not allowed!"', function () {
				cy.get('#swalTitle').should('contain', 'Holder not allowed!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct holder out', function () {
				cy.get('#rackOut').clear();
				cy.get('#rackOut').type(treeIn3, { delay: 100 });
				cy.get('#rackOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Enter higher quantity', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('11', { delay: 100 });
				cy.screenshot();
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
			});
			i++;
			it(i + ' - Display error message "Wrong Quantity!"', function () {
				cy.get('#swalTitle').should('contain', 'Wrong Quantity!');
				cy.screenshot();
				cy.get('#desc').should('contain', desciption);
				cy.get('button').contains('OK').click();
				cy.wait(1000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('not.be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-error has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-remove form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
			});
			i++;
			it(i + ' - Enter correct quantity', function () {
				cy.get('#qtyOut').clear();
				cy.get('#qtyOut').type('10', { delay: 100 });
				cy.get('#qtyOut').type('{enter}');
				cy.wait(2000);
				cy.get('#ProcessOut').should('contain', 'Limpieza/Cleaning to Plasma')
				cy.get('#edOut').should('be.disabled');
				cy.get('#edOut').should('have.value', edCleaning);
				cy.get('#rackOut').should('not.be.disabled');
				cy.get('#rackOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#rackOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#qtyOut').should('be.disabled');
				cy.get('#qtyOutput').should('have.class', 'form-group has-success has-feedback');
				cy.get('#qtyOutCheck').should('have.class', 'glyphicon glyphicon-ok form-control-feedback');
				cy.get('#rejectOut').should('be.disabled');
				cy.get('#userOut').should('not.be.disabled');
				cy.get('#passOut').should('be.disabled');
				cy.get('#saveOut').should('be.disabled');
				cy.get('#rejectMin').should('be.disabled');
				cy.get('#rejectPlus').should('be.disabled');
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
			});
		});
	});
});