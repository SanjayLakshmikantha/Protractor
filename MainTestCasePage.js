const { browser } = require("protractor");

describe('CafeTownSendWebSiteAutomation',function() {
    var loginPage = require("./LoginPageLocatorElements.js");
    var loggedInPage = require("./LoggedInPageLocatorElements.js");
    var testData = require("./TestCaseData.js")
    
    it('Login Page',function() {
        loginPage.loginPageURL();
        loginPage.UserName.sendKeys(testData.datadrive.username);
        loginPage.Password.sendKeys(testData.datadrive.password);
        loginPage.buttonSubmit.click();
        loggedInPage.LoggedInUserGreetings.getText().then(function(text)  {
        expect(text).toBe(testData.datadrive.greetingsMsg);
      })
    })

    it('Create a new user',function() {
        loggedInPage.CreateButton.click();
        loggedInPage.FirstNameTextBox.sendKeys(testData.datadrive.firstname);
        loggedInPage.LastNameTextBox.sendKeys(testData.datadrive.lastname);
        loggedInPage.EmailIdTextBox.sendKeys(testData.datadrive.emailid);
        loggedInPage.StartDateTextBox.sendKeys(testData.datadrive.startdate);
        loggedInPage.SubmitAddButton.click();
        loggedInPage.EmployeeListContainer.each(function(item) {
            item.element(by.id("employee-list")).getText().then(function(value) {
                expect(value).toMatch(testData.datadrive.firstname+" "+testData.datadrive.lastname);
            })
        })
    })

    it('Edit the user details',function() {
        element(by.cssContainingText('li.ng-scope.ng-binding',testData.datadrive.firstname+" "+testData.datadrive.lastname)).click();
        loggedInPage.EditButton.click();
        loggedInPage.FirstNameTextBox.clear();
        loggedInPage.FirstNameTextBox.sendKeys(testData.datadrive.updateFirstName);
        loggedInPage.SubmitUpdateButton.click();
        loggedInPage.EmployeeListContainer.each(function(item) {
            item.element(by.id("employee-list")).getText().then(function(value) {
                expect(value).toMatch(testData.datadrive.updateFirstName+" "+testData.datadrive.lastname);
            })
        })
    })

    it('Delete user',function() {
        element(by.cssContainingText('li.ng-scope.ng-binding',testData.datadrive.updateFirstName+" "+testData.datadrive.lastname)).click();
        loggedInPage.DeleteButton.click();
        browser.switchTo().alert().accept();
    })

    it('Logout From account', function(){
        loggedInPage.LogoutButton.click();
        loginPage.buttonSubmit.getText().then(function(text) {
            expect(text).toBe(testData.datadrive.loginButtonText);
        })
    })
})