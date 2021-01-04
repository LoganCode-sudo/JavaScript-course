//Object orientated programming 

//objects are used to model real-word objects. e.g. dogs,cats,people
let person = {
  Name:"logan",
  Surname:"Coghill",
  Age:18,
  Walking: function(){ return person.Name +" is Walking."}
};
//properties can be accessed using dot notation 
//properties that hold functions are known as methods, they add behaviour to objects
console.log(person.Name);
console.log(person.Walking());

//constuctors are functions that create new objects, a blueprint for objects 
function Dog(DogName,DogColor){
  this.Name = DogName;
  this.Color = DogColor;
};
//below we create a new object using the dog constructor
var Pup = new Dog("Raven","Black");
console.log(Pup);
//when a constuctor is used to create an object that object is known as a instance of its constuctor
//you can test to see if a object was create by a class using instanceof
console.log(Pup instanceof Dog);

//when properties are defined within the constuctor its mean that each object has a copy of that properties
//the below stores all the properties of Pup in an array
var hasProperties = [];
for(let property in Pup){
  if(Pup.hasOwnProperty(property)){
    hasProperties.push(property);
  };
};
//it proves that Pup has a copy of all Dog properties
console.log(hasProperties);

//it dont make sense having values that stay the same from object to object
//thats were prototype comes in. it works as a default value if you will
//you can add a prototype to a constructor so that every object created will have the default value
Dog.prototype.Legs = 4;
console.log(Pup.Legs);

//.constructor is used to find the constuctorn that made the object. returns a boolean
var blueprint = Pup.constructor === Dog;
console.log(blueprint);

//you can add multiple prototypes with the following syntax
Dog.prototype = {
  //you can also assign the constructor name for protoypes that are used to create an object
  constructor: Dog,
  Eat:function (){
    console.log("yummy");
  },
  Run:function (){
    return "i am speed";
  }
};
var Hound = new Dog("Doggo","brown");
console.log(Hound.Run());

//you can check to see if an object is using the prototypes from a constructor
//it returns a boolean
//it asks the question "was dog's prototype used to create hound?"
var isPrototype = Dog.prototype.isPrototypeOf(Hound);
console.log(isPrototype);

//all objects have a prototype. which means that dog's prototype is object
//this means that HasOwnProperty() is defined in object, which is inherited by dog and then finally inherited by hound


//you can lessen repeat code by creating a supertype/parent that subtypes can inherit from

//subtype
function Lion (Name){
  this._Name = Name; 
};
Lion.prototype={
  constructor:Lion
};

//subtype
function Tiger(Name){
  this._Name = Name;
};
Tiger.prototype={
  constructor:Tiger
};

//supertype
function Life(){};

Life.prototype={
  constructor:Life,
  Eat:function (){
  return "Chew Chew";
}
};
//NOTE:you can also create subtypes in one line 
let Cat = Object.create(Life.prototype);

//assign the subtypes to the supertype
Lion.prototype = Object.create(Life.prototype);
Tiger.prototype = Object.create(Life.prototype);

//you can now use the subtypes to create objects
var NewKing = new Lion();
console.log(NewKing.Eat());
//because lion inherits from Life you can use Eat() 
//but the Constuctor was also changed so dont forget to change it back
console.log(NewKing.constructor);
NewKing.constructor = Lion;
console.log(NewKing.constructor);

//subtypes that inherit from superclasses can also have unique methods and properties 
Lion.prototype.Hunt= function(){
  return "dead deer";
};
console.log(NewKing.Hunt());
//so hunt can only be used by lion and NewKing is an object created by lion

//you can also override inherited methods and properties. that can be done by referencing it in the child object
Lion.prototype.Eat = function (){
  return "chrunch";
};
console.log(NewKing.Eat());

//you can also use mixins to add comman behaviour between unrelated objects
let jumpMixin = function(obj){
  obj.jump = function (){
    return "up, down";
  };
};
var logan = person;
jumpMixin(logan);
jumpMixin(NewKing);
console.log(logan.jump());
console.log(NewKing.jump());
//person and lion are not related but there objects can now share the method jump

//so far we've only had public properties. meaning they can be changed anywhere within the modual
//we need to change this by creating private variables in the constructor
//we can then access and modify the variable within the constructor
function Car(){
  //this acts as the setter
  let color = "black";
  //you can then access a copy from the below getter
  this.getColor= function(){
    return color;
  };
};
var Vroom = new Car;
console.log(Vroom.getColor());

//Immediately Invoked function expression
//theses are functions with no name and not stored in a variable
(function (){
  console.log("WHAT?");
})();
//The () at the end is to say that the function should be immediately invoked

//you can use the above method to create a module
let Module = (function(){
  return{
    talk: function(obj){
      obj.talk = function (){
        return "blah blah blah";
      };
    },
    sing: function(obj){
      obj.sing= function(){
        return "song words";
      };
    }
  }
})();

//you can now give objects methods from a module 
Module.talk(logan);
console.log(logan.talk());
