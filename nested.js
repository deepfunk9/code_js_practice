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


bobsFollowers.find('Mike');