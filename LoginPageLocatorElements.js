function loginPageLocatorElements() {
    this.UserName = element(by.model("user.name"));
    this.Password = element(by.model("user.password"));
    this.buttonSubmit = element(by.css("button[type='submit']"));
    this.loginPageURL = function() {
        browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
    }
}
module.exports = new loginPageLocatorElements();