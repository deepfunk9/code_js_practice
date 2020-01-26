//Create an object. The object is ObjectName. key1 is the property. Which can be a value or method/function.
const objectName = {
    key1: 'value1',
    key2: 'value2',
}

//Create array's within an object with empty values to be filled later
const object2 = {
    key3: [],
    key4: [],
}

//Create array's within an object with values
const object3 = {
    key5: ['blue','red','white'],
    key6: [],
    'key 7': []
}

//Create an object within an object.
//I think the first line should be a const as it needs to define something.
const object4 = {
    embedObject: {
        key7: 'value4',
    }
}

console.log(objectName);
//Prints { key1: 'value1', key2: 'value2' }

//console.log(objectName[0];
//Prints undefined

//console.log(objectName(0));
//Prints 'objectName is not a function'

let fruits = ['Apple', 'Banana']

console.log(fruits.length);
//2

console.log(objectName.key1);
//value1

console.log(object3.key5[0]);
//blue

//You can use "." or ['']. This is useful when working with functions
console.log(objectName['key1']);
//value1

const spaceship = {type: 'shuttle'};
//spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

delete objectName['Property Name'];
delete objectName.propName;

/////Functions###########
/////Functions###########

const obj1 = {
    foo: function() {
      // ...
    },
    bar: function() {
      // ...
    }
  }
//Can now be shortened to....
const obj2 = {
    foo() {
      // ...
    },
    bar() {
      // ...
    }
  }
  

const alienShip = {
    invade: function () { 
      console.log('Hello!')
    }
  };

alienShip.invade(); // Prints 'Hello!' The brackets are included because it's a function


let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip1 = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip1.retreat();
alienShip1.takeOff();

//add array: 
spaceship.passengers = [{name: 'Stuart'}]


//Pass By Reference
const spaceship1 = {
    homePlanet : 'Earth',
    color : 'silver'
  };
  
  let paintIt = obj => {
    obj.color = 'glorious gold'
  };
  
  paintIt(spaceship1);
  
  spaceship1.color // Returns 'glorious gold'

  //Compared to this
  let spaceship2 = {
    homePlanet : 'Earth',
    color : 'red'
  };
  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
  
  };
  tryReassignment(spaceship2) // The attempt at reassignment does not work.
  spaceship2 // Still returns {homePlanet : 'Earth', color : 'red'};
  
  spaceship2 = {
    identified : false, 
    'transport type': 'flying'
  }; // Regular reassignment still works.



  /////"for...in" will execute a given block of code for each property in an object.

  let spaceship3 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
  }; 
  // for...in
  for (let crewMember in spaceship3.crew) {
  console.log(`${crewMember}: ${spaceship3.crew[crewMember].name}`)
  };


const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    }
  };

goat.makeSound(); // Prints baaa


///

const goat1 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(dietType);
    }
  };
//  goat1.diet(); 
  // Output will be "ReferenceError: dietType is not defined"

  ///
  const goat2 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };
  
  goat2.diet(); 
  // Output: herbivore

  ///
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  
  console.log(robot.provideInfo());
  
//avoid using arrow functions when using "this" in a method!
const goat3 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
  };
  
  goat3.diet(); // Prints undefined


  //Getters are methods that get and return the internal properties of an object. 
  //This could just be without the if statement
  
//   const person = {
//     _firstName: 'John',
//     _lastName: 'Doe',
//     get fullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }
//   }
  

  const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }

// To call the getter method: 
person.fullName; // 'John Doe'

  ///Setters reassign values of existing properties within an object

  const person1 = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
  };
  
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

//Factory Functions
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const tinCan = robotFactory('P-500', true);
  
  tinCan.beep();
  
  