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



