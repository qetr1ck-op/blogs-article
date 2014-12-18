var Person = {
        constructor: function (name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender || 'male';
            return this;
        },
        sayHi: function () {
            console.log(this.name + ' says Hi!');
        }
    },
    WebDeveloper = Object.create(Person);

WebDeveloper.constructor = function (name, age, gender, skils) {
    Person.constructor.apply(this, arguments);
    this.skils = ['js', 'ruby', 'd3'] || skils;

    return this;
};

WebDeveloper.sayHi = function () {
    console.log('I\'m working');
};

var webDeveloper = Object.create(WebDeveloper).constructor('John', 22);

//=====
function Person(options) {
    this.name = options.name;
    this.gender = options.gender || 'male';
}

Person.prototype.sayHi = function (greeting) {
    return this.name + ', says Hi!';
};

function Developer(options) {
    Person.apply(this, arguments);

    this.skils = options.skils || ['OOP', 'TCP', 'HTTP'];
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.sayHi = function (greeting) {
    return this.name + ', busy... I\'m codding!';
};

function WebDeveloper(options) {
    Developer.apply(this, arguments);

    this.skils = this.skils.concat(options.skils || ['JavaScript', 'NodeJS', 'Angular']);
}

WebDeveloper.prototype = Object.create(Developer.prototype);