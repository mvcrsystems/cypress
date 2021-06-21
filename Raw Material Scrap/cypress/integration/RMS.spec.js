describe('Insert Material Scrap', function () {

    const lotNumber = '1704275G5';
    const dowLot = "101010";
    const user = '1005';
    const f = new Date();
    const currentDate = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
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

    const pastDate = sumDate(-8, currentDateMonth);
    const futureDate = sumDate(2, currentDateMonth);

    var i = 1;
    it('0' + i + ' - Go to Raw Material Scrap App', function () {
        cy.visit('http://localhost/scrapplus/index.php', {});
    });
    i++;
    it('0' + i + ' - Log in (Wrong)', function () {
        cy.get('#email').type("wrong", { delay: 100 });
        cy.get('#password').type("wrong", { delay: 100 });
        cy.get('button').contains('Iniciar Sesión').click();
        cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        cy.get('#password').clear();
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Log in (Good) User Not Allowed', function () {
        cy.get('#email').clear();
        cy.get('#email').type("wotracker", { delay: 100 });
        cy.get('#password').type("Microvention#44", { delay: 100 });
        cy.get('button').contains('Iniciar Sesión').click();
        cy.get('#swal2-title').contains('User not allowed');
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it('0' + i + " - Display error message 'User Not Allowed'", function () {
        cy.get('#swal2-title').contains('User not allowed');
        cy.wait(2000);
        cy.screenshot();
        cy.get('button').contains('OK').click();
        cy.wait(1000);
    });
    i++;
    it('0' + i + ' - Log in (Good) User Allowed', function () {
        cy.visit('http://localhost/scrapplus/index.php', {});
        cy.get('#email').type("rodolfo.vargas", { delay: 100 });
        cy.get('#password').type("Gelymbnf$17", { delay: 100 });
        cy.get('button').contains('Iniciar Sesión').click();
        cy.wait(1000);
        cy.screenshot();
        cy.get('#date').should('not.be.disabled');
        cy.get('#date').should('have.value', currentDateMonth);
        cy.get('#usrlookup').should('not.be.disabled');
        cy.get('#user').should('not.be.disabled');
        cy.get('#lotNumber').should('not.be.disabled');
        cy.get('#area').should('not.be.disabled');
        cy.get('#product').should('be.disabled');
        cy.get('#doc').should('be.disabled');
        cy.get('#br').should('be.disabled');
        cy.get('#pdname').should('be.disabled');
        cy.get('#qty').should('be.disabled');
        cy.get('#reason').should('be.disabled');
        cy.get('#comment').should('be.disabled');
        cy.get('#btnCalc').should('be.disabled');
        cy.get('#btnSafe').should('be.disabled');
        cy.get('#demo').should('have.class', 'collapse');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - User Look-Up by number', function () {
        cy.get('#usrlookup').type("459", { delay: 100 });
        cy.get('#user').should('contain', '459|Vargas Viquez Rodolfo');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - User Look-Up by name', function () {
        cy.get('#usrlookup').clear();
        cy.get('#usrlookup').type("Rodolfo", { delay: 100 });
        cy.get('#user').should('contain', '459|Vargas Viquez Rodolfo');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Choose an employee', function () {
        cy.get('#user').select('459|Vargas Viquez Rodolfo');
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it('0' + i + ' - Write a lot Number', function () {
        cy.get('#lotNumber').type(lotNumber, { delay: 100 });
        cy.wait(1000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Select an Area', function () {
        cy.get('#area').select('Advanced Pushers');
        cy.get('#product').should('not.be.disabled');
        cy.get('#doc').should('be.disabled');
        cy.get('#br').should('be.disabled');
        cy.get('#pdname').should('be.disabled');
        cy.get('#qty').should('be.disabled');
        cy.get('#reason').should('be.disabled');
        cy.get('#comment').should('be.disabled');
        cy.get('#btnCalc').should('be.disabled');
        cy.get('#btnSafe').should('be.disabled');
        cy.get('#demo').should('have.class', 'collapse');
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Select a Product', function () {
        cy.get('#product').select('V-Trak Advanced Long');
        cy.get('#doc').should('not.be.disabled');
        cy.get('#br').should('be.disabled');
        cy.get('#pdname').should('be.disabled');
        cy.get('#qty').should('be.disabled');
        cy.get('#reason').should('be.disabled');
        cy.get('#comment').should('be.disabled');
        cy.get('#btnCalc').should('be.disabled');
        cy.get('#btnSafe').should('be.disabled');
        cy.get('#demo').should('have.class', 'collapse');
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Select a MP/QS', function () {
        cy.get('#doc').select('02. Laser Weld of Body coils');
        cy.get('#br').should('not.be.disabled');
        cy.get('#pdname').should('be.disabled');
        cy.get('#qty').should('be.disabled');
        cy.get('#reason').should('be.disabled');
        cy.get('#comment').should('be.disabled');
        cy.get('#btnCalc').should('be.disabled');
        cy.get('#btnSafe').should('be.disabled');
        cy.get('#demo').should('have.class', 'collapse');
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Select a Build Record', function () {
        cy.get('#br').select('BR020157-02');
        cy.get('#pdname').should('not.be.disabled');
        cy.get('#qty').should('be.disabled');
        cy.get('#reason').should('be.disabled');
        cy.get('#comment').should('be.disabled');
        cy.get('#btnCalc').should('be.disabled');
        cy.get('#btnSafe').should('be.disabled');
        cy.get('#demo').should('have.class', 'collapse');
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Select a PD', function () {
        cy.get('#pdname').select('PD110659|Body Coil Stainless Steel; V-Trak Advanced|each|1|');
        cy.get('#qty').should('not.be.disabled');
        cy.get('#reason').should('be.disabled');
        cy.get('#comment').should('be.disabled');
        cy.get('#btnCalc').should('not.be.disabled');
        cy.get('#btnSafe').should('be.disabled');
        cy.get('#demo').should('have.class', 'collapse');
        cy.get('#tipouom').should('contain', 'each');
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Type a wrong quantity', function () {
        cy.get('#qty').type('0', { delay: 100 });
        cy.screenshot();
        cy.wait(1000);
        cy.get('#qty').type('{enter}');
    });
    i++;
    it(i + " - Display error message 'Quantity not allowed'", function () {
        cy.get('#swal2-title').contains('Quantity not allowed');
        cy.wait(1000);
        cy.screenshot();
        cy.get('button').contains('OK').click();
        cy.wait(1000);
        cy.get('#qty').should('contain', '');
    });
    i++;
    it(i + ' - Click on Calculate Button', function () {
        cy.get('#btnCalc').click();
        cy.get('#calculator').should('not.be.hidden');
        cy.get('#unit').should('not.be.disabled');
        cy.get('#unitQty').should('not.be.disabled');
        cy.get('#unitRF').should('be.disabled');
        cy.get('button').contains('Calc').should('not.be.disabled');
        cy.get('button').contains('Close').should('not.be.disabled');
        cy.screenshot();
        cy.wait(1000);
    });
    i++;
    it(i + ' - Calculate Units Quantity', function () {
        cy.get('#unit').select('cm -> ea');
        cy.get('#unitQty').type('10', { delay: 100 });
        cy.get('#unitRF').type('5', { delay: 100 });
        cy.wait(2000);
        cy.screenshot();
        cy.get('.modal button').contains("Calc").click();
        cy.get('#qty').should('have.value', '2');
        cy.get('#costopd').should('contain', '2');
        cy.get('#reason').should('not.be.disabled');
        cy.get('#comment').should('be.disabled');
        cy.get('#btnSafe').should('be.disabled');
        cy.get('#demo').should('have.class', 'collapse');
    });
    i++;
    it(i + ' - Select a Reason', function () {
        cy.get('#reason').select('Process');
        cy.get('#comment').should('not.be.disabled');
        cy.get('#btnSafe').should('not.be.disabled');
        cy.get('#demo').should('have.class', 'collapse in');
        cy.get('#reject').should('not.be.disabled');
        cy.wait(2000);
        cy.screenshot();
    });
    i++;
    it(i + ' - Click on Save Button with wrong past date', function () {
        cy.get('#date').clear();
        cy.get('#date').type(pastDate, { delay: 50 });
        cy.wait(1000);
        cy.get('#btnSafe').click();
        cy.get('#swal2-title').contains('Wrong Date!');
        cy.screenshot();
        cy.wait(1000);
        cy.get('button').contains('OK').click();
    });
    i++;
    it(i + ' - Click on Save Button with wrong future date', function () {
        cy.get('#date').clear();
        cy.get('#date').type(futureDate, { delay: 50 });
        cy.wait(1000);
        cy.get('#btnSafe').click();
        cy.get('#swal2-title').contains('Wrong Date!');
        cy.screenshot();
        cy.wait(1000);
        cy.get('button').contains('OK').click();
    });
    i++;
    it(i + ' - Click on Save Button with good date', function () {
        cy.get('#date').clear();
        cy.get('#date').type(currentDateMonth, { delay: 50 });
        cy.wait(1000);
        cy.get('#btnSafe').click();
        cy.get('#swal2-title').contains('Data saved successfully!');
        cy.screenshot();
        cy.wait(1000);
    });
});