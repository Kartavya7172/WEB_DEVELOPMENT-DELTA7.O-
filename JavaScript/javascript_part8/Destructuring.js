let players = ["Kartavya","shaurya","alice","bob","Bachan","shantanu","gig","bitres"];
// winner = players[0];
// runnerup = players[1];
// secondrunnerup = players[2];

// //Its is same like doing above
// let [winner,runnerup,secondrunnerup] = players;
// console.log(winner,runnerup,secondrunnerup);

//If we have to store remaning value in an array we do it is as using rest
let [winner,runnerup,secondrunnerup,...others] = players;
console.log(others);

