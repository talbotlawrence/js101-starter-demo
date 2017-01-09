console.log("Hello World")

var test = "value of the variable you idiot";
console.log("results", test);

var hoursInYear = 24 * 365;
console.log("hours in a year", hoursInYear);
console.log(hoursInYear);

//build on values
var minsInDecade = (hoursInYear * 60) * 10;
console.log("minutes in a decade", minsInDecade);

var age = 8;
var secondsInYear = (hoursInYear * 60) * 60;
var ageInSeconds = secondsInYear * age;
console.log("ageInSeconds", ageInSeconds);

var wiseValue = 35;
if (age > wiseValue) {
	console.log("You are very wise at " + age);
} else {
	console.log("Too young at " + age);
}

//toFixed example
var myNum = 2.1415927;
var shortNum = myNum.toFixed(3);
console.log("shortNum", shortNum, typeof(age));

/////////////////////////////////
//strings
/////////////////////////////////
var phrase = "The quick brown fox jumped over the lazy";
console.log("T", phrase.indexOf("T"));

var phrase2 = "How now brown cow?";
var position = phrase2.charAt(8);
console.log("Here is your letter", position);

var phrase3 = "The lazy dog";
var newPhrase3 = phrase3.replace("lazy", "silly");
console.log("newPhrase3", newPhrase3);

var phrase4 = "The lazy dog likes the weird fox";
var newPhrase4 = phrase4.replace(/o/g, "i");
console.log("newPhrase4", newPhrase4);

///////////////DOM
var phraseString = document.getElementById("phrase").innerHTML;
console.log("phraseString", phraseString);

var classStuff = document.getElementsByClassName("lots");
console.log("classStuff", classStuff);

console.log("the second one", classStuff[1]);

var addToDOM = document.getElementById("demo");
addToDOM.innerHTML = "Hi there you da man!!";

/////////////////////////////
//array
/////////////////////////////
var myJunkDrawer = [3, "dime", true, null, "28"];
console.log("myJunkDrawer", myJunkDrawer);
console.log("myJunkDrawer", myJunkDrawer[1]);

myJunkDrawer.push("baseball");
console.log("added", myJunkDrawer);
myJunkDrawer.unshift("What is this?");
console.log("unshift", myJunkDrawer);

var thing = myJunkDrawer.pop();
console.log("thing pop value: ", thing);

var thing2 = myJunkDrawer.shift();
console.log("thing2 shift off value: ", thing2);

//////////////////////////////////
//object
//////////////////////////////////
var songArray = [];
var myObject = {};

var song = {
	title: "Call Me Maybe",
	artist: "Carley Rae",
	album: "Greatest Hits",
	awards: "never",
	type: {
		style: "pop",
		listenability: "none",
		producers: {
			name: "Fred Jones",
			name2: "Nancy Jones"
		}
	},
	listAwards: function() {
		console.log("Show me the awards");
	}
};

songArray.push(song);
console.log("song", songArray[0]);

console.log("objects of the keys", Object.keys(song));