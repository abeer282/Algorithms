/***custom objects***/

//literal notation 
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


/***class***/

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

//assign properties and methods (with prototype)
Program.prototype.tabs = 1;
Program.prototype.users = 1;
Program.prototype.needsAdmin = false;
