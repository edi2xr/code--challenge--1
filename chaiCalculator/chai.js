// Chai Bora Ingredient Calculator
function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; // ml
    const milkPerCup = 50;   // ml
    const teaLeavesPerCup = 1; // tbsp
    const sugarPerCup = 2; // tsp

    const water = waterPerCup * numberOfCups;
    const milk = milkPerCup * numberOfCups;
    const teaLeaves = teaLeavesPerCup * numberOfCups;
    const sugar = sugarPerCup * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}

// Ask user for number of cups (works in browser environments)
const input = prompt("How many cups of Chai would you like to make?");
const numberOfCups = parseInt(input);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid number of cups.");
}
