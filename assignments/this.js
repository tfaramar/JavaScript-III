/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The "this" keyword always attempts to reference the window object, unless it's bound to something more specific by applying the rules of implicit, explicit or new binding. This default behavior can also be stopped if you "use strict", which generates an error rather than pointing to the entire window object.

* 2. Implicit Binding - The "this" keyword refers to whatever object is to the left of the dot when our function is invoked.

* 3. New Binding - When we create a new object by invoking a function with the "new" keyword, the "this" keyword is bound to the new object.

* 4. Explicit Binding - We use .call, .apply, or .bind to tell the function being invoked what the context of the "this" keyword is. In the case below, the "this" refers to the object passed to the function as an argument. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const sayHi = function(){
  // 'use strict';
  console.log(`${this.name} says hi!`);
};

const mary = {
  name: "Mary"
};

sayHi();

// Principle 2

// code example for Implicit Binding
const saysHelloToObj = function(obj){
  obj.sayHelloTo = function(){
    console.log( `Hello ${this.name}`);
  };
};

const me = {
  name: 'Tatiana'
};

const you = {
  name: 'Sean'
};

saysHelloToObj(me);
saysHelloToObj(you);

me.sayHelloTo();
you.sayHelloTo();

// Principle 3

// code example for New Binding
const Fruit = function(name, color){
  this.name = name;
  this.color = color;
};

const strawberry = new Fruit('strawberry', 'red');
const banana = new Fruit('banana', 'yellow');
console.log(strawberry);
console.log(banana);

// Principle 4

// code example for Explicit Binding
const intro = function(){
  console.log(`This is my friend, ${this.name}.`);
};

const friend1 = {
  name: 'Caroline'
};

intro.call(friend1);
