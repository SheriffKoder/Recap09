/*











*/

function Dog (p) {
    this.place = p;
}


function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
   }

   ShowDog.prototype = new Dog();   //or aDog;
   //ShowDog.prototype.constructor = ShowDog; explained below
   ShowDog.prototype.league = "Webville";
   ShowDog.prototype.stack = function() {
        console.log("Stack");
    };


let fido = new ShowDog("fido2", "german", "12", "admin");
console.log("hi");
fido.place = "nordic";
console.log(fido.place);
