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


/******* inheritance ********/

//class
function Accommodation() {}
//methods of Accom class:
Accommodation.prototype.lock = function() {};
Accommodation.prototype.unlock = function() {};

//constructor that will be a subclass
function House(defaults) {
    defaults = defaults || {};
    this.floors = 2;
    this.rooms = defaults.rooms || 7;
}
//house class will inherit everything from Accom
House.prototype = new Accommodation();
//setting House to be the constructor of House else each init of House class will be considered instance of Accom
House.prototype.constructor = House; 

var myHouse = new House(); 
var myNeighborsHouse = new House({
    rooms: 8
});

myHouse.rooms // 7
myNeighborsHouse.rooms // 8

myHouse.lock();
myNeighborsHouse.unlock();
myHouse.constructor === House // true 
myHouse.constructor === Accommodation // false
myNeighborsHouse instanceof House // true
myNeighborsHouse instanceof Accommodation // true
