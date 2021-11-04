describe('Log/Receipt Insert a new Lot number', function () {
	const lotNumber = '0000057824';
	const description = 'Catheter Shaft Sub-Assembly; Scepter C';
	const user = '6281';
	const pass = "6281";
	var i = 1;
	it('0' + i + ' - Login in the server', function () {
		cy.visit('http://sjo-testapp1/coatingtracker/index.php', {
			auth: {
				username: 'us\\wotracker',
				password: 'Microvention#44'
			}
		})
		cy.wait(2000);
	});
	i++;
	it('0' + i + ' - Go to Log/Receipt Interface', function () {
		cy.get('a').contains('Lot log/Receipt').click();
		cy.get('#lotNumber').should('be.empty');
		cy.get('#lotNumber').should('not.be.disabled');
		cy.get('#qty').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it('0' + i + ' - Leave blank on lot number', function () {
		cy.screenshot();
		cy.get('#lotNumber').type('{enter}')
		cy.wait(1000)
		cy.get('#swal2-title').should('contain', 'Blanks not allowed!');
		cy.get('#qty').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.get('button').contains('OK').click();
	});
	i++;
	it('0' + i + ' - Type a wrong Lot Number', function () {
		cy.get('#lotNumber').should('be.empty');
		cy.get('#lotNumber').should('not.be.disabled');
		cy.get('#lotNumber').type('200406JK1', { delay: 100 })
		cy.screenshot();
	});
	i++;
	it('0' + i + ' - Verify wrong lot number', function () {
		cy.get('#lotNumber').type('{enter}')
		cy.wait(1000)
		cy.get('#desc').should('contain', 'Lot does not exist');
		cy.get('#qty').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it('0' + i + ' - Type a good lot number', function () {
		cy.get('#lotNumber').should('not.be.disabled');
		cy.get('#lotNumber').clear()
		cy.get('#lotNumber').type(lotNumber, { delay: 100 })
		cy.screenshot();
	});
	i++;
	it('0' + i + ' - Verify Lot', function () {
		cy.get('#lotNumber').type('{enter}')
		cy.wait(2000)
		cy.get('#desc').should('contain', description);
		cy.get('#qty').should('not.be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it('0' + i + ' - Leave blank on quantity', function () {
		cy.get('#qty').clear()
		cy.wait(1000)
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.screenshot();
	});
	i++;
	it('0' + i + ' - Verify Quatity', function () {
		cy.get('#qty').should('be.empty');
		cy.get('#qty').type('{enter}')
		cy.wait(2000)
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#lubricity').should('be.disabled');
	});
	i++;
	it('0' + i + " - Display error message 'Wrong Quantity!'", function () {
		cy.get('#swal2-title').contains('Wrong Quantity!');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(1000);
		cy.get('#qty').should('be.empty');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#lubricity').should('be.disabled');
	});
	i++;
	it(i + ' - Insert Quantity', function () {
		cy.get('#qty').type('10')
		cy.wait(2000)
		cy.screenshot();
	});
	i++;
	it(i + ' - Verify Quantity', function () {
		cy.get('#qty').type('{enter}')
		cy.wait(2000)
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#lubricity').should('not.be.disabled');
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
		cy.get('#swal2-title').contains('Wrong Quantity!');
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
	it(i + ' - Verify lubricity quantity', function () {
		cy.get('#lubricity').should('be.empty');
		cy.get('#lubricity').type('{enter}')
		cy.wait(2000)
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + " - Display error message 'Wrong Quantity!'", function () {
		cy.get('#swal2-title').contains('Wrong Quantity!');
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
		cy.get('#lubricity').type('2')
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
	it(i + ' - Leave blank on pasword', function () {
		cy.screenshot();
		cy.get('#pwd').type('{enter}')
		cy.wait(2000)
		cy.get('#pwd').should('be.empty');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + " - Display error message 'Password or user incorrect!'", function () {
		cy.get('#swal2-title').contains('Password or user incorrect!');
		cy.screenshot();
		cy.wait(2000);
		cy.get('button').contains('OK').click();
		cy.wait(1000);
		cy.get('#usr').should('not.be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
	});
	i++;
	it(i + ' - Type a good user', function () {
		cy.get('#usr').type(user, { delay: 100 })
		cy.screenshot();
		cy.get('#usr').type('{enter}')
		cy.wait(1000);
		cy.get('#pwd').should('not.be.disabled');
		cy.get('#saveBut').should('be.disabled');
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
		cy.get('#usr').should('not.be.disabled');
		cy.get('#pwd').should('be.disabled');
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
	it(i + ' - Click on Save button', function () {
		cy.get('#saveBut').click();
	});
	i++;
	it(i + " - Display message 'Data saved successfully!'", function () {
		cy.get('#swal2-title').contains('Data saved successfully!');
		cy.wait(2000);
		cy.screenshot();
		cy.get('button').contains('OK').click();
		cy.wait(1000);
		cy.get('#lotNumber').should('be.empty');
		cy.get('#lotNumber').should('not.be.disabled');
		cy.get('#qty').should('be.disabled');
		cy.get('#usr').should('be.disabled');
		cy.get('#pwd').should('be.disabled');
		cy.get('#saveBut').should('be.disabled');
		cy.get('#process' + lotNumber).should('not.be.checked');
		cy.get('#che' + lotNumber).should('not.be.checked');
		cy.get('#ended' + lotNumber).should('not.be.checked');
		cy.get('#rm' + lotNumber).should('not.be.checked');
		cy.get('#report' + lotNumber).should('not.be.checked');
	});
	i++;

	describe('Put lot on hold', function () {
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
		it(i + " - Display error message 'Password or user incorrect!'", function () {
			cy.get('#swal2-title').contains('Password or user incorrect!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(1000);
			cy.get('#usrModal').should('not.be.disabled');
			cy.get('#pwdModal').should('not.be.disabled');
			cy.get('#btnComment').should('be.disabled');
		});
		i++;
		it(i + ' - Type a good user (Comments field with blank)', function () {
			cy.get('#usrModal').should('be.empty');
			cy.get('#usrModal').type(user, { delay: 100 })
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
		it(i + " - Display error message 'Password or user incorrect!'", function () {
			cy.get('#swal2-title').contains('Password or user incorrect!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(2000);
			cy.get('#usrModal').should('not.be.disabled');
			cy.get('#pwdModal').should('not.be.disabled');
			cy.get('#btnComment').should('be.disabled');
		})
		i++;
		it(i + ' - Type a good password', function () {
			cy.get('#pwdModal').clear();
			cy.get('#usrModal').type('{enter}');
			cy.get('#pwdModal').type(user, { delay: 100 });
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
		it(i + " - Display error message 'Blanks not allowed!'", function () {
			cy.get('#swal2-title').contains('Blanks not allowed!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(1000);
			cy.get('#usrModal').should('not.be.disabled');
			cy.get('#pwdModal').should('be.disabled');
			cy.get('#btnComment').should('be.disabled');
		})
		i++;
		it(i + " - Type Reason (on-hold)", function () {
			cy.get('#comment').type('Put on hold (First Time)', { delay: 100 })
			cy.screenshot();
			cy.wait(1000);
		});
		i++;
		it(i + '- Leave Blank on user input ', function () {
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
		it(i + " - Display error message 'Password or user incorrect!'", function () {
			cy.get('#swal2-title').contains('Password or user incorrect!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(1000);
		});
		i++;
		it(i + ' - Type a good user', function () {
			cy.get('#usrModal').type(user, { delay: 100 })
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
		it(i + " Display error message 'Password or user incorrect!'", function () {
			cy.get('#swal2-title').contains('Password or user incorrect!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(1000);
		});
		i++;
		it(i + ' - Type a good password', function () {
			cy.get('#pwdModal').clear();
			cy.get('#usrModal').type('{enter}');
			cy.get('#pwdModal').type(user, { delay: 100 });
			cy.get('#pwdModal').type('{enter}');
			cy.wait(2000);
			cy.screenshot();
		});
		i++;

		it(i + " - Click on Insert Comment", function () {
			cy.get('#btnComment').click();
			cy.wait(2000);
		});
		i++;
		it(i + " - Display message 'Data saved successfully!'", function () {
			cy.get('#swal2-title').contains('Data saved successfully!');
			cy.wait(2000);
			cy.screenshot();
			cy.get('button').contains('OK').click();
			cy.wait(1000);
			cy.get('#che' + lotNumber).should('be.checked');
		});
		i++;
		it(i + " - Click on View Button", function () {
			cy.get('#btn' + lotNumber).click();
			cy.wait(5000);
			cy.screenshot();
		});
		i++;
		it(i + " - Click on Close Button", function () {
			cy.get('button').contains('Close').click();
			cy.screenshot();
		});
		i++;
		describe('Update qty when the lot number is not in process yet (smaller number)', function () {
			it(i + " - Click on lot number that it is on the table section", function () {
				cy.get('td').contains('0000086366').click();
				cy.screenshot();
				cy.wait(1000);
				cy.get('#lotNumber').should('have.value', '0000086366');
				cy.get('#lotNumber').should('be.disabled');
				cy.get('#qty').should('not.be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + " - Type a smaller number", function () {
				cy.get('#qty').type('5', { delay: 100 });
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify a small qty', function () {
				cy.get('#qty').type('{enter}')
				cy.wait(2000)
				cy.get('#lubricity').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
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
			it(i + ' - Verify lubricity quantity', function () {
				cy.get('#lubricity').should('be.empty');
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + " - Display error message 'Wrong Quantity!'", function () {
				cy.get('#swal2-title').contains('Wrong Quantity!');
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
			it(i + ' - Insert a negative number on lubricity quantity', function () {
				cy.get('#lubricity').type('-2')
				cy.wait(2000)
				cy.screenshot();
			});
			i++;
			it(i + ' - Verify lubricity quantity', function () {
				cy.get('#lubricity').should('be.empty');
				cy.get('#lubricity').type('{enter}')
				cy.wait(2000)
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + " - Display error message 'Wrong Quantity!'", function () {
				cy.get('#swal2-title').contains('Wrong Quantity!');
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
			it(i + ' - Insert lubricity quantity', function () {
				cy.get('#lubricity').type('2')
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
			it(i + " - Display error message 'Password or user incorrect!'", function () {
				cy.get('#swal2-title').contains('Password or user incorrect!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#usr').type(user, { delay: 100 })
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
			it(i + " - Display error message 'Password or user incorrect!'", function () {
				cy.get('#swal2-title').contains('Password or user incorrect!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#usr').should('not.be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + ' - Type a good password', function () {
				cy.get('#usr').type('{enter}')
				cy.get('#pwd').clear();
				cy.get('#pwd').type(user, { delay: 100 })
				cy.get('#pwd').type('{enter}')
				cy.wait(1000);
				cy.get('#saveBut').should('not.be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + " - Click on Update button", function () {
				cy.get('#saveBut').click();
				cy.wait(2000);
			});
			i++;
			it(i + " - Display error message 'You cannot update the quantity for less than what you have in process'", function () {
				cy.get('#swal2-title').contains('You cannot update the quantity for less than what you have in process');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			it(i + " - Type a total quantity", function () {
				cy.get('#qty').type('55', { delay: 100 });
				cy.get('#qty').type('{enter}');
				cy.screenshot();
			});
			i++;
			it(i + ' - Insert lubricity quantity', function () {
				cy.get('#lubricity').type('2');
				cy.get('#lubricity').type('{enter}');
				cy.wait(2000)
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a good user', function () {
				cy.get('#usr').clear();
				cy.get('#usr').type(user, { delay: 100 })
				cy.get('#usr').type('{enter}')
				cy.wait(1000);
				cy.get('#pwd').should('not.be.disabled');
				cy.get('#saveBut').should('be.disabled');
				cy.screenshot();
			});
			i++;
			it(i + ' - Type a good password', function () {
				cy.get('#pwd').clear();
				cy.get('#pwd').type(user, { delay: 100 })
				cy.get('#pwd').type('{enter}')
				cy.wait(1000);
				cy.get('#saveBut').should('be.enabled');
				cy.screenshot();
			});
			i++;
			it(i + " - Click on Update button", function () {
				cy.get('#saveBut').click();
				cy.wait(2000);
			});
			i++;
			it(i + " - Display message 'Data saved successfully!'", function () {
				cy.get('#swal2-title').contains('Data saved successfully!');
				cy.wait(2000);
				cy.screenshot();
				cy.get('button').contains('OK').click();
				cy.wait(2000);
				cy.get('#lotNumber').should('be.empty');
				cy.get('#lotNumber').should('be.enabled');
				cy.get('#qty').should('be.disabled');
				cy.get('#usr').should('be.disabled');
				cy.get('#pwd').should('be.disabled');
				cy.get('#saveBut').should('be.disabled');
			});
			i++;
			describe('Update qty when the lot number is not in process yet (higher number)', function () {
				it(i + " - Click on lot number that it is on the table section", function () {
					cy.get('td').contains('0000086366').click();
					cy.screenshot();
					cy.wait(1000);
					cy.get('#lotNumber').should('have.value', '0000086366');
					cy.get('#lotNumber').should('be.disabled');
					cy.get('#qty').should('not.be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + " - Type a higher number", function () {
					cy.get('#qty').type('15', { delay: 100 });
					cy.screenshot();
				});
				i++;
				it(i + ' - Verify a higher qty', function () {
					cy.get('#qty').type('{enter}')
					cy.wait(2000)
					cy.get('#lubricity').should('not.be.disabled');
					cy.get('#pwd').should('be.disabled');
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
					cy.get('#swal2-title').contains('Wrong Quantity!');
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
					cy.get('#lubricity').type('{enter}')
					cy.wait(2000)
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
				});
				i++;
				it(i + " - Display error message 'Wrong Quantity!'", function () {
					cy.get('#swal2-title').contains('Wrong Quantity!');
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
					cy.get('#lubricity').type('2')
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
					cy.screenshot();
					cy.get('#usr').type('{enter}')
					cy.wait(1000)
					cy.get('#usr').should('be.empty');
					cy.get('#pwd').should('not.be.disabled');
					cy.get('#saveBut').should('be.disabled');
				});
				i++;
				it(i + ' - Leave blank on pasword', function () {
					cy.screenshot();
					cy.get('#pwd').type('{enter}')
					cy.wait(2000)
					cy.get('#pwd').should('be.empty');
					cy.get('#saveBut').should('be.disabled');
				});
				i++;
				it(i + " - Display error message 'Password or user incorrect!'", function () {
					cy.get('#swal2-title').contains('Password or user incorrect!');
					cy.screenshot();
					cy.wait(2000);
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#usr').should('not.be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
				});
				i++;
				it(i + ' - Type a good user', function () {
					cy.get('#qty').clear();
					cy.get('#qty').type(50);
					cy.get('#usr').type(user, { delay: 100 })
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
				it(i + " - Display error message 'Password or user incorrect!'", function () {
					cy.get('#swal2-title').contains('Password or user incorrect!');
					cy.screenshot();
					cy.wait(2000);
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#usr').should('not.be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
				});
				i++;
				it(i + ' - Type a good password', function () {
					cy.get('#usr').type('{enter}')
					cy.get('#pwd').clear();
					cy.get('#pwd').type(user, { delay: 100 })
					cy.get('#pwd').type('{enter}')
					cy.wait(1000);
					cy.get('#saveBut').should('not.be.disabled');
					cy.screenshot();
				});
				i++;
				it(i + " - Click on Update button", function () {
					cy.get('#saveBut').click();
					cy.wait(2000);
				});
				i++;
				it(i + " - Display message 'Data saved successfully!'", function () {
					cy.get('#swal2-title').contains('Data saved successfully!');
					cy.wait(2000);
					cy.screenshot();
					cy.get('button').contains('OK').click();
					cy.wait(2000);
					cy.get('#lotNumber').should('be.empty');
					cy.get('#lotNumber').should('be.disabled');
					cy.get('#qty').should('be.disabled');
					cy.get('#usr').should('be.disabled');
					cy.get('#pwd').should('be.disabled');
					cy.get('#saveBut').should('be.disabled');
				});
				i++;
				it(i + " - View the report", function () {
					cy.get(`#btnViewReport${lotNumber}`).click();
					cy.wait(1000);
					cy.window().then((win) => {
						win.location.href = `http://sjo-testapp1/coatingtracker/report_catheter.php?id=${lotNumber}`;
						cy.url().should('match', /report_catheter/)
						cy.wait(1000);
					})
				});
				i++;
				it(i + " - View comments", function () {
					cy.get(`#tooltipNotes`).click();
					cy.wait(1000);
					cy.window().then((win) => {
						win.location.href = `http://sjo-testapp1/coatingtracker/report_notes.php?id=${lotNumber}`;
						cy.url().should('match', /report_notes/)
						cy.wait(1000);
					})
				});
			});
		});
	});
});