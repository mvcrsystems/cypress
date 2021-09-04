describe('Insert Documentation Error', function () {

    /*const lotNumber = '1704275G5';
    const dowLot = "101010";
    const user = '1005';
    const f = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDateMonth = (f.getDate() + "/" + monthNames[f.getMonth()] + "/" + f.getFullYear());
    function sumDate(d, oldDate) {
        var newDate = new Date();
        var sDate = today || (newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear());
        var sep = sDate.indexOf('/') != -1 ? '/' : '-';
        var today = new Date(oldDate);
        today.setDate(today.getDate() + parseInt(d));
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        var finishDate = day + sep + monthNames[parseInt(month) - 1] + sep + year;
        return finishDate;
    }
    */

    /*function getCookieName(cookieName) {
        var list = document.cookie.split(";");
        for (i in list) {
            var search = list[i].search(cookieName);
            if (search > -1) { cookie = list[i] }
        }
        var equalsSym = cookie.indexOf("=");
        var value = cookie.substring(equalsSym + 1);
        return value;
    }*/
    /*
    const pastDate = sumDate(-8, currentDateMonth);
    const futureDate = sumDate(2, currentDateMonth);
    */

    var i = 1;
    it('0' + i + ' - Go to Documentation Errors App', function () {
        cy.visit('http://sjo-testapp1/docErrors/index.php', {
			// auth: {
			// 	username: 'us\\wotracker',
			// 	password: 'Microvention#44'
			// }
		})
		cy.wait(2000);
    });
    i++;
    it('0' + i + ' - Log in (Wrong)', function () {
        cy.get('#email').type("wrong", { delay: 100 });
        cy.get('#password').type("wrong", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        cy.get('#password').clear();
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Log in (Good) User Not Allowed', function () {
        cy.get('#email').clear();
        cy.get('#email').type("coatingtr", { delay: 100 });
        cy.get('#password').type("Cuacoro#44", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.get('#swal2-title').contains("You don't have permissions to use this app");
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it('0' + i + " - Display error message 'User Not Allowed'", function () {
        cy.get('#swal2-title').contains("You don't have permissions to use this app");
        cy.wait(2000);
        cy.screenshot();
        cy.get('button').contains('OK').click();
        cy.clearCookies();
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Log in (Good) User Allowed', function () {
        cy.visit('http://sjo-testapp1/docErrors/index.php', {});
        cy.wait(1000);
        cy.get('#email').type("wotracker", { delay: 100 });
        cy.get('#password').type("Microvention#44", { delay: 100 });
        cy.wait(1000);
        cy.get('button').contains('Iniciar sesión').click();
    });
});