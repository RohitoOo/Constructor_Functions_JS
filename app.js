(function test(){

console.log('Self Called Function')
} () );


var apple = new Object();

apple.color = 'red';
apple.shape = 'round';

apple.describe = function (){

return "The color of the apple is " + this.color + ". And the shape of the apple is " + this.shape;

}

apple.describe();

// Constructor Functions


function Fruit(name, color, shape){

  this.name = name;
  this.color = color;
  this.shape = shape;

  this.describe = function(){

    return  "This " + this.name + " is " + this.color + ", " +  this.shape + " and delicious!"
  }
};


var apple = new Fruit('apple' , 'red' , 'round', )

var orange = new Fruit('orange' , 'orange' , 'round')

console.log("This fruit is " + apple.color)
console.log(orange)

console.log(apple.describe())
console.log(orange.describe())

console.log('Array of Objects')



var friends = [{

name: "Rachael",
lover: "Ross"

},
{
name: "Phoebe",
lover: "Joey"

},
{
name: "Monika",
lover: "Chandler"

}]

console.log(friends[0])

Date();
