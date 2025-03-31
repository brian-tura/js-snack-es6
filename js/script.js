const bikes = [
    {
        name: "Mario",
        weight: 20,
    },
    {
        name: "Ale",
        weight: 22,
    },
    {
        name: "Giulia",
        weight: 19,
    }
];

let check = bikes[2].weight;
for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].weight < check) {
        check = bikes[i].weight;
    }
}

console.log(check);