

function selection_function (x) {

    console.log(x.value);

}

function FUN2 () {
    let y = myform.input_name0.value;  //named myform
	myform.input_name1.focus();

    console.log(y);

}

/// /// /// /// /// JS RECAP /// /// /// /// ///

/*
write
prompt
alert

parseInt
arrays

*/


/*
//alert ('Alert Text');

//let x = prompt('message', 'seeing text');
console.log(x);

let apples1 = 10;
let apples2 = 10;

apples1 = apples1 - x;
apples2 -= parseInt(x);

console.log(apples1);
console.log(apples2);
//document.write(x);

//Defining arrays
var a = ['item1', 'item2'];
var b = Array(7);
var c = [];

c.push(a[0]);
console.log(c[0]);


c[0] = c[0].toUpperCase();
console.log(c[0]);


byId
.style
.innerHTML
.value (button function call take input value)

*/

document.getElementById('divX').style.borderColor = 'blue'; 
document.getElementById('divX').style.color = 'white'; 

let x = "Hey";
document.getElementById('divX').innerHTML += 
" <h3> Header 3</h3>" + "<p> <mark> marked </mark> </p> " + x;



function FUN (myform1) {
    let y = document.getElementById("input_id1").value;
    console.log(y);

    if (y == "") {
        console.log("Test is empty");
    }
    else {
        console.log("Test is not empty");
    
    }
    
    //taking inputs from a form method 1
    let six_42 = document.forms["myform"]["input_name0"].value;
    console.log("six_42 " + six_42);

    //taking inputs from a form method 2
    let six_45 = myform.input_name0.value;
    myform.input_name1.focus();
    console.log("six_45 " + six_45);



}



//searching
let text = "brain";
let zz = text.search('ain');
let zz2 = text.substring(1,3);
console.log("string found starting "+ zz);


let six_42 = document.forms["myform"]["input_name0"].value;
console.log(six_42);


//errors array passing
let errors_array = [];
console.log(errors_array);
let output;

for (i=0; i<3; i++) {

    errors_array[i] = prompt ("enter error", "here");

    output += "\n" + errors_array[i] ;
}

console.log(errors_array);
console.log(output);

