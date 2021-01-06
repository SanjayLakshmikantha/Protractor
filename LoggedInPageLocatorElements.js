function LoggedInPageLocatorElements() {
    this.CreateButton = element(by.id("bAdd"));
    this.EditButton = element(by.id("bEdit"));
    this.DeleteButton = element(by.id("bDelete"));
    this.LogoutButton = element(by.cssContainingText("p.main-button","Logout"));
    this.FirstNameTextBox = element(by.model("selectedEmployee.firstName"));
    this.LastNameTextBox = element(by.model("selectedEmployee.lastName"));
    this.StartDateTextBox = element(by.model("selectedEmployee.startDate"));
    this.EmailIdTextBox = element(by.model("selectedEmployee.email"));
    this.SubmitAddButton = element(by.cssContainingText("[type='submit']","Add"));
    this.SubmitUpdateButton = element(by.cssContainingText("[type='submit']","Update"));
    this.SubmitDeleteButton = element(by.cssContainingText("p.main-button","Delete"));
    this.EditPageBackButton = element(by.css("a[class*='bBack']"));
    this.CreatePageCancelButton = element(by.css("a[class*='bCancel']"));
    this.LoggedInUserGreetings = element(by.id("greetings"));
    this.EmployeeListContainer = element.all(by.id("employee-list-container"));
}
module.exports = new LoggedInPageLocatorElements();