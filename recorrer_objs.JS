//FOR_IN
const spiderman = {
    name: "Spidey",
    universe: 42,
    powers: ["web", "invisibility", "spider-sense"],
};

for (const property in spiderman) {
    console.log(`${property}: ${spiderman[property]}`);
}
// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense

//OBJECT.KEY
const spiderman2 = {
    name: "Spidey",
    universe: 42,
    powers: ["web", "invisibility", "spider-sense"],
};

const properties = Object.keys(spiderman2);

console.log(properties.length); // 3

properties.forEach((property) => {
    console.log(property);
});
// -> name
// -> universe
// -> powers

//OBJECT.VALUES
const values = Object.values(spiderman);

values.forEach((value) => {
    console.log(value);
});
// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]

//OBJECT.ENTRIES
const entries = Object.entries(spiderman);

entries.forEach((entry) => {
    console.log(entry);
});
// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]

entries.forEach((entry) => {
    const property = entry[0];
    const value = entry[1];

    console.log(`${property}: ${value}`);
});
