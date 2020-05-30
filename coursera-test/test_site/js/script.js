//DOM manipulation
//console.log(document.getElementById ("title"));
//alert ("Hello outputing alert");
//var name = prompt("What is your name");
//document.getElementById("button1").value ='testing Text';


var textcontent = document
					.getElementById("toppanel");
var textpart = textcontent.textContent;

function imagepanel(arg) {
	textcontent.style.backgroundImage = "url(" + arg.src + ")";
	textcontent.innerHTML = arg.alt;			
}

function msg() {
	textcontent.style.backgroundImage="url()";
	textcontent.innerHTML=textpart;
}






function opentext(){
	
	document	
		.getElementById('changebutton')
		.className ="open";
}

function closetext(){
	x=document	
		.getElementById('changebutton');
	x.className ="closed";
	
}
		

function message(msg){
	document
		.getElementById('title')
		.innerHTML = msg + "   Event";
}
var loc = window.location;
//document.write("<h1>" + name  + "</h1>" + "<h1>Time to learn JavaScript</h1>");
document.write(document.baseURI+"<br>");
document.write(document.title+"<br>");
document.write(loc);
var width=window.innerWidth;
document.write("<br> Current window size is "+ width);

function displayDate() {
	document
		.getElementById('demo')
		.innerHTML = Date();
}
function sayHello () {
	var name =
		document.getElementById("name").value;
		var message = "<h2> Hello    " + name + "!</h2>";

	document
		.getElementById("content")
		//.textContent = message;
		.innerHTML = message;

	if (name === "student") {
		var title = 
			document
				.querySelector("#title")
				.textContent;
		title +="& Loving it !";
	
		document
			.querySelector("#title")
			.textContent=title;
	}
}
