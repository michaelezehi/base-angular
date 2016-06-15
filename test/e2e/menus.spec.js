describe('One mobile app', function () {
    var dashboard, visits, search, forms, trash;

    beforeEach(function () {
        browser.driver.manage().window().setSize(1280, 1024);
        browser.waitForAngular();
        dashboard = element(by.id('Dashboard'));
        visits = element(by.id('Visits'));
        search = element(by.id('Search'));
        forms = element(by.id('Forms'));
        trash = element(by.id('Trash'));
    });

    describe('Menus: ', function () {
        it('should have a menu item called "Dashboard"', function () {
            elementIsNotNullOrUndefined(dashboard);
        });
        it('should have a menu item called "Visits"', function () {
            elementIsNotNullOrUndefined(visits);
        });
        it('should have a menu item called "Search"', function () {
            elementIsNotNullOrUndefined(search);
        });
      
        it('should have a menu item called "Trash"', function () {
            elementIsNotNullOrUndefined(trash);
        });
    });

    function elementIsNotNullOrUndefined(element) {
        expect(element.getText()).not.toBe(undefined);
        expect(element.getText()).not.toBe(null);
    };

});
