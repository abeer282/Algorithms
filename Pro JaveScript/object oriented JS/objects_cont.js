//chaining methods

function Corona() {}
Corona.prototype.infection = function() {
    this.isSick = true;
    return this;
}
Corona.prototype.vaccine = function() {
    this.isSick = false;
    return this;
}
var cor = new Corona();
cor.infection().vaccine().isSick //false

