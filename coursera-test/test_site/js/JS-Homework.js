// Function to validate the email address
function check() {
	if (document.getElementById('email_addr')!=document.getElementById('email_repeat')) {
		alert ("The two emails must match!");
		return false;
	}
}

function nicknameFunction() {
	if(document.getElementById("yesNick").checked){
		nick.style.display="inline";
		nickname.setAttribute("required", true);
	}
	else{
		nickname.removeAttribute("required");
		nick.style.display="none";
	}
}
function billingFunction() {
	if (document.getElementById("same").checked) {
		document.getElementById("billingName").value=document.getElementById("shippingName").value;
		document.getElementById("billingZip").value=document.getElementById("shippingZip").value;
	}
	else{
		document.getElementById("billingName").value=null;
		document.getElementById("billingZip").value=null;
	}

}

//fuctions are first-class data types
 // fuctions are objects

//function factory
function makeMultiplier(multiplier) {
	var myFunc = function(x){
		return multiplier*x;
	};

	return myFunc;
}

var multiplierBy3= makeMultiplier(3);
console.log(multiplierBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//Passing functions as arguments

function doOperationOn(x, operation){
	return operation(x);
}

var result = doOperationOn(5,multiplierBy3);
console.log(result);
result=doOperationOn(100, doubleAll);
console.log(result);

// Declaring object variable using new keyword

// One way
var company = new Object();
company.name="mycompany";
company.ceo = new Object();
company.ceo.firstName = "Param";
company.ceo.favColor = "blue";

// second way

company["stock of company"]= 110;
company["anything in double quotes"]="try this";
console.log(company["anything in double quotes"]);

// third way

var myCompany2 = {
	name: "mycompany1",
	ceo: {
		firstName: "Param",
		favColor: "blue"
	},
	"stock of company":110
}

console.log(myCompany2);


//Function constructors 
//(1. first letter of function constructor should be capital letter)
//(2. constructor should not return anything)
//It really should be just created once, and all the circles, 
//all the instances of a Circle, should share it. And the way we could do that is by 
//using a special property called prototype. 
//So let's go ahead and cut this out of here. And we'll say Circle.prototype.getArea. 

function Circle (radius) {
	this.radius = radius;
}

Circle.prototype.getArea =
		function() {
			return Math.PI*Math.pow(this.radius,2);
		};

var myCircle = new Circle (10);
console.log(myCircle);
console.log(myCircle.getArea());

var myOtherCircle = new Circle (20);
console.log (myOtherCircle);

// Object literals and "this"

var literalCircle = {
	radius: 10,

	getArea: function(){
		console.log(this);
		return Math.PI*Math.pow(this.radius,2);
	}

};

console.log(literalCircle.getArea());

//when you have an inner function within another function, 
//this keyword starts pointing to the global object.
//work around is declare self = this;


var literalCircle = {
	radius: 10,

	getArea: function(){
		var self =this; 
		console.log(this);

		var increasedRadius = function () {
			self.radius=20;
		};
		increasedRadius();
		console.log(this.radius);

		return Math.PI*Math.pow(this.radius,2);
	}

};


