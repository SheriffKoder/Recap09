
/*
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

/*
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

/*for (i=0; i<3; i++) {

    errors_array[i] = prompt ("enter error", "here");

    output += "\n" + errors_array[i] ;
}

console.log(errors_array);
console.log(output);
*/

////////////////////////////////////

/*
//playing with objects 

let object_choices = {
    'rock' : {'sci':1, 'rock':0.5, 'paper': 0},
};

console.log (object_choices.rock.paper);
console.log (object_choices['rock']['paper']);


function output_select (x) {

    let score_output = {
        '1': {message: 'you tied', color:'blue', color2:'red'},
    };

    return score_output[x];
}


let eight_04 = output_select(1);

console.log(eight_04['color']);


//image creation, set src/class, append to div

let imagex = document.createElement('img');
imagex.src = './mochi.jpg';
imagex.setAttribute('class', 'boxed_image');

let Image_div = document.querySelector('#divX2');
Image_div.appendChild(imagex);


//create a new div and by innerHTML add H1 with message/color of prev object

let newDiv = document.createElement('div');

newDiv.innerHTML = 
"<h1 style='color:" +eight_04['color']+ "'> "
    + eight_04['message'] +
"</h1>";


document.getElementById('divX2').appendChild(newDiv);


//create and append textnode to para to div, add color from object value

let textAnswer2 = document.createTextNode(eight_04['message']);
let textspace = document.createElement('p');

textspace.style.color = eight_04['color2'];

textspace.appendChild(textAnswer2);
document.getElementById('divX2').appendChild(textspace);



//take input from HTML selection onselect

function selection_function2 (input_selection) {

    let input_value = input_selection.value;
    console.log(input_value);
}



//gather buttons
let buttons = document.getElementsByTagName('button');
console.log(buttons);

//show its class
let old_class = buttons[1].classList[0];
console.log(old_class);


//save class in array
let current_classes = [];
current_classes.push(old_class);
console.log(current_classes);


//remove class from button classlist
buttons[1].classList.remove(old_class);
let nine_40 = buttons[1].classList[0];
console.log(nine_40);

//add new class to button classlist
let new_class = "bluebutton";
buttons[1].classList.add(new_class);

//

function queryFunction () {

    
    let yourImages2 = document.querySelectorAll('img');
    console.log(yourImages2[1]);

    for (i=0; i<yourImages2.length; i++) {
        yourImages2[i].src = './mochi2.jpg';
    }
    
}

queryFunction();


//Timer

function sleepfunc (TimeInMs) {
    return new Promise (resolve => setTimeout(resolve, TimeInMs ));
}


console.log("hey");
sleepfunc(2000);
console.log("hey");
console.log("hey");



//get two random numbers from 0->3

let Ten_01 = ( Math.random() * 3 ) + 1;
let Ten_02 = ( Math.random() * 3 ) + 1;

let testNu1 = Math.floor(Ten_01);
let testNu2 = Math.floor(Ten_02);

console.log(testNu1);
console.log(testNu2);

//store button class name then remove and add new class name


let class_backup_object = {

    'ButtonClass': document.getElementById('100').classList[0],
    
};

console.log(class_backup_object['ButtonClass']);
let backupcolor = class_backup_object['ButtonClass'];


function changeColor () {
    console.log("color changed to red");
    let color_new = "redbutton";
    document.getElementById('100').classList.remove(backupcolor);

    document.getElementById('100').setAttribute('class', color_new);
    //    document.getElementById('100').classList.add(color_new);


}

console.log('original color', backupcolor);

*/
/////////////////////////////////////////////////////////


function FUN () {
    console.log('FUN');
}

addEventListener(onload, 'FUN');

FUN();