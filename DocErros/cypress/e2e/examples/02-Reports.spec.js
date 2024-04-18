describe('Report Viewer', function () {
    function leadingZeroes(num, zeroes = 2) {
        return '0'.repeat(zeroes - Math.ceil(Math.log10(num + 1))) + num;
    }
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const f = new Date();
    const past = new Date();
    const future = new Date();
    past.setDate(f.getDate() - 2);
    future.setDate(f.getDate() + 2);
    const currentDate = (f.getFullYear() + "-" + leadingZeroes(f.getMonth() + 1) + "-" + f.getDate());
    const currentDisplayDate = (f.getDate() + "-" + monthNames[f.getMonth()] + "-" + f.getFullYear());
    const pastDate = (past.getFullYear() + "-" + leadingZeroes(past.getMonth() + 1) + "-" + past.getDate());
    const futureDate = (future.getFullYear() + "-" + leadingZeroes(future.getMonth() + 1) + "-" + future.getDate());
    let i = 0;
    it(leadingZeroes(++i) + ' - Go to Documentation Errors App Reports Section', function () {
        cy.visit('http://sjo-testapp1/docErrors/reports.php', {})
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + ' - Log in (Wrong)', function () {
        cy.get('#email').type("wrong", { delay: 100 });
        cy.get('#password').type("wrong", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.get('#error').should('contain', 'Error, verifique usuario y contraseña!');
        cy.get('#password').clear();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + ' - Log in (Good) User Not Allowed', function () {
        cy.get('#email').clear();
        cy.get('#email').type("coatingtr", { delay: 100 });
        cy.get('#password').type("Cuacoro#44", { delay: 100 });
        cy.get('button').contains('Iniciar sesión').click();
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + " - Display error message 'User Not Allowed'", function () {
        cy.get('#swal2-title').contains("You don't have permissions to use this app");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.clearCookies();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + ' - Log in (Good) User Allowed', function () {
        cy.visit('http://sjo-testapp1/docErrors/reports.php', {});
        cy.wait(1000);
        cy.get('#email').type("wotracker", { delay: 100 });
        cy.wait(1000);
        cy.get('#password').type("Microvention#44", { delay: 100 });
        cy.wait(1000);
        cy.get('button').contains('Iniciar sesión').click();
    });
    it(leadingZeroes(++i) + ' - Load the Report Filter', function () {
        cy.wait(1000);
        cy.get('#selectAreaReport').should('contain', '');
        cy.get('#selectProductLineReport').should('contain', '');
        cy.get('#selectShiftReport').should('contain', '');
        cy.get('#selectPrdctLineReportDiv').should('be.hidden');
        cy.get('#inputDateReportS').should('have.value', currentDate);
        cy.get('#inputDateReportE').should('have.value', currentDate);
        cy.wait(2000);
    });
    it(leadingZeroes(++i) + ' - Try to Generate a Report Without Data', function () {
        cy.wait(1000);
        cy.get('#btnReport').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Display error message 'Check blanks!'", function () {
        cy.get('#swal2-title').contains("Check blanks!");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Choose an Area", function () {
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('a#bs-select-2-0').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Display Product Line Selection", function () {
        cy.get('#selectPrdctLineReportDiv').should('be.visible');
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Choose Coils Area", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('a#bs-select-2-0').should('contain', 'Coils');
        cy.get('a#bs-select-2-0').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Display Only Coils Product Lines Selection", function () {
        cy.get('#selectPrdctLineReportDiv').should('be.visible');
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('a#bs-select-3-0').should('contain', 'Coils');
        cy.get('a#bs-select-3-1').should('contain', 'V-Trak');
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Choose Access Devices Area", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('a#bs-select-2-1').should('contain', 'Access Devices');
        cy.get('a#bs-select-2-1').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Display Only Access Devices Product Lines Selection", function () {
        cy.get('#selectPrdctLineReportDiv').should('be.visible');
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('a#bs-select-3-0').should('contain', 'Balloons');
        cy.get('a#bs-select-3-1').should('contain', 'Headway Regular');
        cy.get('a#bs-select-3-2').should('contain', 'Headway Duo');
        cy.get('a#bs-select-3-3').should('contain', 'Headway Duo Long');
        cy.get('a#bs-select-3-4').should('contain', 'Headway 27');
        cy.get('a#bs-select-3-5').should('contain', 'Headway 27 Plus');
        cy.get('a#bs-select-3-6').should('contain', 'Headway Plus');
        cy.get('a#bs-select-3-7').should('contain', 'Sofia 5F');
        cy.get('a#bs-select-3-8').should('contain', 'Sofia 6F');
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Choose Stents Area", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('a#bs-select-2-2').should('contain', 'Stents');
        cy.get('a#bs-select-2-2').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Display Only Stents Product Lines Selection", function () {
        cy.get('#selectPrdctLineReportDiv').should('be.visible');
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('a#bs-select-3-0').should('contain', 'Stents');
        cy.get('a#bs-select-3-1').should('contain', 'Carotida');
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Choose All Areas", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(0).click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Display All Product Lines Selection", function () {
        cy.get('#selectPrdctLineReportDiv').should('be.visible');
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('a#bs-select-3-0').should('contain', 'Coils');
        cy.get('a#bs-select-3-1').should('contain', 'V-Trak');
        cy.get('a#bs-select-3-2').should('contain', 'Stents');
        cy.get('a#bs-select-3-3').should('contain', 'Carotida');
        cy.get('a#bs-select-3-4').should('contain', 'Balloons');
        cy.get('a#bs-select-3-5').should('contain', 'Headway Regular');
        cy.get('a#bs-select-3-6').should('contain', 'Headway Duo');
        cy.get('a#bs-select-3-7').should('contain', 'Headway Duo Long');
        cy.get('a#bs-select-3-8').should('contain', 'Headway 27');
        cy.get('a#bs-select-3-9').should('contain', 'Headway 27 Plus');
        cy.get('a#bs-select-3-10').should('contain', 'Headway Plus');
        cy.get('a#bs-select-3-11').should('contain', 'Sofia 5F');
        cy.get('a#bs-select-3-12').should('contain', 'Sofia 6F');
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Try Report With a Wrong Future date on Start Date", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(0).click();
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(1).click();
        cy.get('.btn[aria-owns=bs-select-1]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(2).click();
        cy.get('#inputDateReportS').type(futureDate, { delay: 100 });
        cy.wait(1000);
        cy.get('#btnReport').click();
    });
    it(leadingZeroes(++i) + " - Display error message 'Incorrect Date'", function () {
        cy.get('#swal2-title').contains("Incorrect Date");
        cy.get('#swal2-html-container').contains("No puede escoger una fecha mayor a la de hoy");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Try Report With a Wrong Future date on End Date", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(0).click();
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(1).click();
        cy.get('.btn[aria-owns=bs-select-1]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(2).click();
        cy.get('#inputDateReportE').type(futureDate, { delay: 100 });
        cy.wait(1000);
        cy.get('#btnReport').click();
    });
    it(leadingZeroes(++i) + " - Display error message 'Incorrect Date'", function () {
        cy.get('#swal2-title').contains("Incorrect Date");
        cy.get('#swal2-html-container').contains("No puede escoger una fecha mayor a la de hoy");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Try Report With an Start Date Bigger Than End Date", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(0).click();
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(1).click();
        cy.get('.btn[aria-owns=bs-select-1]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(2).click();
        cy.get('#inputDateReportE').type(pastDate, { delay: 100 });
        cy.wait(1000);
        cy.get('#btnReport').click();
    });
    it(leadingZeroes(++i) + " - Display error message 'Incorrect Start Date'", function () {
        cy.get('#swal2-title').contains("Incorrect Start Date");
        cy.get('#swal2-html-container').contains("No puede escoger una fecha mayor a la fecha final");
        cy.wait(2000);
        cy.get('button').contains('OK').click();
        cy.wait(1000);
    });
    it(leadingZeroes(++i) + " - Show Report With Valid Data and Dates", function () {
        cy.reload();
        cy.get('.btn[aria-owns=bs-select-2]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(0).click();
        cy.get('.btn[aria-owns=bs-select-3]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(1).click();
        cy.get('.btn[aria-owns=bs-select-1]').click();
        cy.get('button.actions-btn.bs-select-all.btn.btn-light').eq(2).click();
        cy.get('#inputDateReportS').type('2021-09-14', { delay: 100 });
        cy.wait(1000);
        cy.get('#btnReport').click();
    });
    it(leadingZeroes(++i) + " - Verify the Graphics Are Present", function () {
        cy.get('text').contains('Top 5 Documentation Errors from 14-Sep-2021 to ' + currentDisplayDate);
        cy.get('text').contains('Daily Document Errors from 14-Sep-2021 to ' + currentDisplayDate);
    });
    it(leadingZeroes(++i) + " - Show Pareto Data Table After Press Data Button", function () {
        cy.get('#btnDataPareto').click();
        cy.wait(1000);
        cy.get('text').contains('Documentation Errors from 14-Sep-2021 to ' + currentDisplayDate);
    });
    it(leadingZeroes(++i) + " - Show History Data Table After Press History Data Button", function () {
        cy.get('#btnHdataPareto').click();
        cy.wait(1000);
        cy.get('h4').contains('History Documentation Errors');
    });
    it(leadingZeroes(++i) + " - Show Trend Data Table After Press Data Button", function () {
        cy.get('#btnDataTrend').click();
        cy.wait(1000);
        cy.get('text').contains('Daily Document Errors from 14-Sep-2021 to ' + currentDisplayDate);
    });
});