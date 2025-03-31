// const bikes = [
//     {
//         name: "Mario",
//         weight: 20,
//     },
//     {
//         name: "Ale",
//         weight: 22,
//     },
//     {
//         name: "Giulia",
//         weight: 19,
//     }
// ];

// let check = bikes[2].weight;
// for (let i = 0; i < bikes.length; i++) {
//     if (bikes[i].weight < check) {
//         check = bikes[i].weight;
//     }
// }

// console.log(check);

const football = [
        {
            name: "Mario",
            points: 0,
            fouls: 0,
        },
        {
            name: "Ale",
            points: 0,
            fouls: 0,
        },
        {
            name: "Giulia",
            points: 0,
            fouls: 0,
        }
];

for(let i=0;i<football.length;i++){
    football[i].points = Math.floor(Math.random()*10);
    football[i].fouls = Math.floor(Math.random()*10);
};

const newFootball = [];
for(let j=0;j<football.length;j++){
    newFootball.push({
        name: football[j].name,
        fouls: football[j].fouls,
    })
};

console.log(newFootball);

