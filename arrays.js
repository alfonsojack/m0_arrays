var people = ["Joe", "Jason", "Jack", "Jonathan"]
var ages = [21, 22, 23, 24, 25]
var fancy = [true, true, false, true]
people.pop();
console.log(people)
// This array method takes out the last element in the array
ages.shift();
console.log(ages)
// This array method takes out the first element in the array
fancy.push(true);
console.log(fancy)
// This array method adds a new element to the end of the array


//Index positions count by 1 starting from 0. The following code should print "Jason" because it is in index position 1
console.log(people[1])

//The following code should print "24" because that is index position 2 after the array method removed the first element. It was originally in index position 3
console.log(ages[2])

//The code "console.log(ages[*number of index position*])" would print whatever element is in that index position.


