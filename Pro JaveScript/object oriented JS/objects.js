/***custom objects 1 ***/

//literal notation 2
var system = {
    users: 3,
    sharedFiles: false,
    boot: function() {},
    shutdown: function() {}
};

//reading val
system.users
//calling func
system.boot()
//updating val
system.users = 4
//adding property
system.admins = 2


/***class 2 ***/

//constructor
function Program() {};
//creating obj
var chrome = new Program();
//check const:
chrome.constructor === Program; //true
chrome instanceof Program; //true
//const maps to func directly
var firefox = new chrome.constructor(); 
firefox instanceof Program; //true

//assign properties and methods (with prototype) 4
Program.prototype.tabs = 1;
Program.prototype.users = 1;
Program.prototype.needsAdmin = false;
Program.prototype.verify = function() {};

//assign properties and methods (with scope) 6
var globalVar = {
    key1: "Stam"
}
    var localVar = 9;
    globalVar.key1 = "Changed inside function stam";
    
    function innerStam() {
        localVar = 2;
    }
     innerStam();
    console.log(localVar); //2
}
stam();
console.log(globalVar); //"Changed inside function stam"
console.log(localVar); //Error: localVar is not defined

//context of a function := the object encapsulating the function when it’s run. 7
this === window //true

var stam = { amistam: function() {
                                return this === stam 
                       }
           }
stam.amistam() //true


var funny = {
    isfunny: false,
    joke: function() {
        var that = this;
        this.isfunny = true;
        function stam() {//function within object take on the global window
            alert(this === funny) //false
            alert(this === window) //true
            alert(that === funny) //true
            that.isfunny = false;//overwrites funny.isfunny
        }
        stam();
    }//joke end
};//funny end


funny.joke(); // false true true


// assigning methods and properties via prototype and this
function Animal() {
    this.legs = 4;
    this.roar = false;
}
Animal.prototype.sound = function() {
    this.roar = true;
}
Animal.prototype.mute = function() {
    this.roar = false;
}

//instantiate Animal 
var lion =  new Animal(); // Animal {legs:4, roar:false}
lion.sound() // roar = true
lion.roar // true

// parametrized cons

function Vehicle(wheels, color, chairs) {
    this.wheels = wheels || 2;
    this.color = color || "red";
    this.chairs = chairs || 1;
}
var van = new Vehicle(4, "blue", 6);
