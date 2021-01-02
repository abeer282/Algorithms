//design patterns - ways of programming and structuring code (tried&tested&proven ones).
//the goal - code that is easy to: understand, maintain and scale.
//by - favoring clarity, removing unnecessay complication, decoupling connections between defferent parts.


//creational design pattern - class/method that creates objects (rather that devloper doing it manually)

/*
    *Factory Pattern
    *create object without specifying the 'class' to use to create it with
    *complex object behind simple interface
    *no new keyword
*/

function TextField(displayText) {
    this.displayText = displayText;
}

function EmailField(displayText) {
    this.displayText = displayText;
}

function ButtonField(displayText) {
    this.displayText = displayText;
}

var FormFieldsFactory = {
    makeField: function(options) {
        var options = options || {},
            type = options.type || "text",
            displayText = options.displayText || "",
            field;
        switch (type) {
            case "text":
                field = new TextField(displayText);
                 break;
            case "email":
                field = new EmailField(displayText);
                break;
            case "button":
                field = new ButtonField(displayText);
                break;
             default:
                field = new TextField(displayText);
                break;
        }//switch
        return field;
    }//makeField
};

TextField.prototype.getElement = function() {
    var textField = document.createElement("input");
    textField.setAttribute("type", "text");
    textField.setAttribute("placeholder", this.displayText);
    return textField;
};

EmailField.prototype.getElement = function() {
    var emailField = document.createElement("input");
    emailField.setAttribute("type", "email");
    emailField.setAttribute("placeholder", this.displayText);
    return emailField;
};

ButtonField.prototype.getElement = function() {
    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = this.displayText;
    return button;
};
