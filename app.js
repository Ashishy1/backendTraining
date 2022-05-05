/* function bankRobbery() {
    const  heroes =['Spiderman', 'Superman', 'Batman', 'Thor'];
    function cryForHelp(){
        for(let hero of heroes) {
            console.log(`PLEASE HELP ME ${hero.toUpperCase()}`);
        }    
    }
    cryForHelp();
}

bankRobbery();

// Function Expression Exercise
// Define a function that returns the square of a number.
const square = function (num) {
    return Math.pow(num,2);
};

square(4); // 16


// Higher order functions
// passsing a function as an argument
function callTenTimes (f) {
    for(let i =0; i <10; i++){
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() *6) +1 ;
    console.log(roll);
}

callTenTimes(rollDie);


// function returns a function
function makeBetweenFunc (min, max) {
    return function(num) {
        return num >= min && num<= max;
    }
}

 //const is_adult = makeBetweenFunc(10, 80);
 // is_adult(45);


 //Methods
 const myMath = {
     PI:3.14159,
     square(num) {
         return num*num;
     },
     cube(num) {
         return num**3;
     }
 }

 myMath.cube(4);
 myMath.square(9);


 // Define and object called hen which has properties like  name, eggCount and layAnEgg function
 // Use this keyword
 const hen ={
     name: 'Helen',
     eggCount: 0,
     layAnEgg(){
         this.eggCount ++;
         return 'EGG';
     }
 } */

 // Array methods and callbacks

 const number = [1,2,3,,4,5,6,7,8,9,11,12,13];
 number.forEach(function(el){
     console.log(el);
 })

 for (let el of number){
     console.log(el);
 }

 const movies = [
     {
         title: 'Titanic',
         score: 99
     },
     {
        title: 'Conjuring',
        score: 98    
     },
     {
         title:'2012',
         score:88
     },
     {
         title: 'Inception',
         score: 45
     }
 ]

 movies.forEach(function(movie){
     console.log(`${movie.title} : ${movie.score}/100`);
 })
 
  

 for(let movie of movies){
     console.log(`${movie.title}: ${movie.score}/100`)
 }


 // Map method
 const double = number.map(function(num){
                    return num*2;
                })


const titles = movies.map(function(movie){
                return movie.title.toUpperCase();
            })


// Map practice
const fullNames = [ {first: 'Albus', last: 'Dumbledore'},
                    {first: 'Harry', last: 'Potter'}, 
                    {first: 'Hermione', last: 'Granger'}, 
                    {first: 'Ron', last: 'Weasley'}, 
                    {first: 'Rubeus', last: 'Hagrid'}, 
                    {first: 'Minerva', last: 'McGonagall'},
                    {first: 'Severus', last: 'Snape'}
                  ];
const firstNames = fullNames.map(function (fName){
    return `${fName.first}`;
})


// Arrow function
const greet = (name) => {
    return `Hey ${name}!`;
}

const  newMovies = movies.map(movie =>(
    `${movie.title}: ${movie.score}/100`
))


  console.log("HELLO!!!!!...");
  setTimeout(() => {
      console.log("....are you still there?")
  },2000)
  console.log("GOODBYE");


  //array.filter

  const goodMovies = movies.map(m => m.title).filter(m =>m.score >80);
  
  const UserNames = ['mark','margaretunterdankan', 'Bob', 'Krishnareddy', 'Gopalswamy'];
   const validUserNames = UserNames.filter(m => m.length <10);



   const prices = [9.99,1.50,5.66,2,6.33];
    let total =0;
    for (let price of prices){
        total += price;
    }
    console.log(total);
    
    const total1 =prices.reduce((total, price) =>{
        return total + price 
    })

     const highestRated = movies.reduce((bestMovie, currentMovie) =>{
        if(currentMovie.score > bestMovie.score) {
            return currentMovie;
        }
        return bestMovie;
    })