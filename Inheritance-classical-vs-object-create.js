var Person = {
	constructor: function(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender || 'male';
		return this;
	},
	sayHi: function() {
		console.log(this.name + ' says Hi!');
	}
}, WebDeveloper = Object.create(Person);

WebDeveloper.constructor = function(name, age, gender, skils) {
	Person.constructor.apply(this, arguments);
	this.skils = ['js','ruby','d3'] || skils;

    return this;
};

WebDeveloper.sayHi = function() {
	console.log('I\'m working');
};

var webDeveloper = Object.create(WebDeveloper).constructor('John', 22);

//=====
function Person (name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender || 'male';
}

Person.prototype.sayHi = function() {
	console.log(this.name + ' says Hi!');
};

var WebDeveloper = function(skils) {
	Person.apply(this, arguments);
	this.skils = ['js','ruby','d3'] || skils;
};

WebDeveloper.prototype = Object.create(Person.prototype);

var webDeveloper = new WebDeveloper();
