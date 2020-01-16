// Write your code below
const bobsFollowers = ['Steve', 'Mike', 'Barry', 'Brian'];
const tinasFollowers = [ 'Barry', 'Stu', 'Brian'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i]===tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
};
<<<<<<< HEAD


bobsFollowers.find('Mike');
=======
>>>>>>> 442a81a2996e035e5b14c83bc5e0482cba2b406b
