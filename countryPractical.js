// 1
// Declaring Variables
let country = "India";
let continent = "Asia";
let population = 2;

console.log("Country = " + country);
console.log("Continent = " + continent);
console.log("Population = " + population + " million");

// 2
let isIsland = false;
let language;

console.log(typeof(isIsland));
console.log(typeof(country));
console.log(typeof(population));
console.log(typeof(language));

//3
language = "Hindi";
// const country = "India";
// const continent = "Asia";
// const isIsland = false;
// isIsland = true;


//4
console.log(population/2);
console.log(population++);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

console.log(population<33);

const description = country +" is in " +continent+ ", and its population is "+population+" million, people speak "+language;
console.log(description);

//5
const literal_description = `${country} is in ${continent}, and its population is ${population}  million, people speak ${language}`;
console.log(literal_description);

//6
let average_population = 33;
if(population > average_population){
    console.log(country +" population is above average");
}else{
    let below_average = average_population - population;
    console.log(country + " population is " + below_average +"million below average");
}

//7

console.log('9' - '5'); //14
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

//8
// const numNeigbhours = prompt("How many neigbhour countries does your country have?");
// //if(numNeigbhours == 1){

// if(Number(numNeigbhours) === 1){
//     console.log("Only 1 border");
// }else if(numNeigbhours > 1){
//     console.log("More than 1 border");
// }else {
//     console.log("No borders");
// }

//9
if(language == 'English' && population > 50 && !isIsland){
    console.log("Sarah should stay in this country");
}else{
    console.log("This is not the country of sarah's preference");
}

//10
switch(language){
    case "chinese":
    case "manadrin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("MOST number of native speakers!");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

//11
    console.log(`${country}'s population is ${population > 33 ?'above':'below'} average`);

