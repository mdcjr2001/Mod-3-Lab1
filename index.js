// Part 1 Complete
// console.log(" "  + 1 + 0) // 10
// console.log(" " - 1 + 0) // -1
// console.log(true + false) // 1
// console.log(!true) // false
// console.log(6 / "3") // 2
// console.log(    "2" * "3") // 6
// console.log(    4 + 5 + "px") // 9px 5
// console.log(    "$" + 4 + "px") // $4px
// console.log(    "4" - 2) //  2
// console.log(    "   -9   " + 5) // -9 5
// console.log(    "   -9   " - 5) // -14
// console.log(    null + 1) // 1
// console.log(    undefined + 1) // NaN
// console.log(    undefined == null) // true
// console.log(    undefined === null) // false 
// console.log(   " \t \n" - 2) // -2
    
   // Part 2 Complete
    // let three = "3";
    // let four = "4";
    // let thirty = "30";
    
    // // Part 2.2
    // let addition = three + four
    // let multiplication = three * four
    // let division = three / four
    // let subtraction = three - four
    
    // let lessThan1 = three < four
    // let lessThan2 = thirty < four
    // console.log(lessThan1)
  
    // Part 3 Complete
    // if (0) console.log('#1 zero is true') // false
    // if ("0") console.log('#2 zero is true') // true
    // if (null) console.log('null is true') // false
    // if (-1) console.log('negaative is true') // true
    // if (1) console.log('positive is true') // true
    
    // Part 4 Complete
//     let a = 2, b = 3;
//     let result = `${a} + ${b} is  `;
    
//     if (a + b < 10) {
//         result += 10 ? 'less than 10' : 'greater than 10';
//     }
    
// console.log(result)

    // Part 5 Complete
    // function getGreeting(name) {
    //     return 'Hello' + name + '!';
    // }
    // console.log(getGreeting('Marcus'))

    // const getGreeting2 = function (name) {
    //     return 'Hello ' + name + '!';
    // }
    // console.log(getGreeting2('Marcus'))

    // const getGreetingArrow = (name) => {
    //     return 'Hello ' + name + '!';
    // }
    // console.log(getGreetingArrow('Marcus'))

    // Part 6 Complete
    // const westley = {
    //     name: 'Westley',
    //     numFingers: 5,
    // }
    // const rugen = {
    //     name: 'Count Rugen',
    //     numFingers: 6
    // }
    // const inigo = {
    //     firstName: 'Inigo',
    //     lastName: 'Montoya',
    //     greeting(person) {
    //         let greeting = `Hello ${person.name}, my name is ${this.firstname} ${this.lastname}. `;
    //         console.log(greeting + this.getCatchPhrase(person));
    //     },
    //     getCatchPhrase(person) {
    //         if (person.numFingers === 6){
    //             return 'You killed my father. Prepare to die';
    //         }
    //         return 'Nice to meet you. ';
    //     },
    //     getCatchPhrase: (person) =>
    //     person.numFingers === 6 ? 'You killed my father. Prepare to die' : 'Nice to meet you.'
    //     };

    // inigo.greeting(westley)
    // inigo.greeting(rugen)

    // Part 7 Complete
// const basketballGame = {
//     score: 0, fouls: 0,
//     freeThrow() {
//         this.score++;
//         return this; 
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     halfTime() {
//         console.log('Haltime score is '+this.score +
//         ', and there have been '+this.fouls+' committed. ');
//         return this
//     },
//     foul() {
//         this.fouls++;
//         return this;
//     },

//     fullTime() {
//         console.log('The final score is '+this.score+
//         ', and there have been '+this.fouls+' fouls during the whole game.');
//             return this
//     }
// }
// basketballGame.basket().freeThrow().basket().threePointer().halfTime();
// basketballGame.foul().basket().threePointer().foul().halfTime().freeThrow().foul().threePointer().basket().fullTime()
    
// Part 8 complete
    // const sydney = {
    //     name: 'Sydney',
    //     population: 5_121_000,
    //     state: 'NSW',
    //     founded: '26 January 1788',
    //     timezone: 'Australia/Sydney'
    // };
    // for (let property in sydney) {
    //     console.log('sydney: ', property, sydney[property])
    // }

    // const houston = {
    //     name: 'Houston',
    //     population: 2304508,
    //     state: 'Texas',
    //     founded: '5 June 1837',
    //     timezone: 'Central Daylight Time'
    // };
    // for (let property in houston) {
    //     console.log('Houston: ', property, houston[property])
    // }

    // Part 9 Complete
    // let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    // let moreSports = teamSports.push('Basketball', 'Football', 'Baseball')
    // let dog1 = 'Bingo';
    // let dog2 = dog1
    // dog2 = 'Rider'
    // let cat1 = { name: 'Fluffy', breed: 'Siberian'};
    // let cat2 = cat1
    // cat2 = { name: 'Simba', breed: 'Siamese'}
    // console.log(teamSports)
    // console.log(cat1)
    // console.log(dog1)

    // Part 10 Complete
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     this.human = true;
    //     this.canDrive = () => age > 18
    //     }
    // person1 = new Person("King", 4)
    // person2 = new Person("Marcus", 22)
    // class PersonClass{
    //     constructor(name, age){
    //         this.name = name;
    //         this.age = age;
    //         this.human = true;
    //     }
    //     canDrive() {
    //         return (this.age >= 18)
    //     }
    // }
    // person3 = new PersonClass("Robby", 45)
    // console.log(person1, person2, person3)
    // console.log(person1.canDrive(), person2.canDrive(), person3.canDrive())