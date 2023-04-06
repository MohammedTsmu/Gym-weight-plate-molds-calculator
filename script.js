// For Iron
// function calculate() {
// 	// Define the density of the material (in g/cm^3)
// 	const density = 7.85;

// 	// Get the weight of the plate in kg
// 	const weight = document.getElementById("weight").value;

// 	// Get the diameter of the plate in cm
// 	const diameter = document.getElementById("diameter").value;

// 	// Calculate the volume of the weight plate in cm^3
// 	const volume = weight / density;

// 	// Calculate the thickness of the weight plate in cm
// 	const thickness = volume / (Math.PI * Math.pow(diameter / 2, 2));

// 	// Display the thickness of the weight plate in cm
// 	document.getElementById("result").innerHTML = `The thickness of a ${weight}kg weight plate with a diameter of ${diameter}cm is ${thickness.toFixed(2)}cm.`;
// }

// For concrete
function calculate() {
    // Define the density of the material (in g/cm^3)
    const density = 2.4;

    // Get the weight of the plate in kg
    const weight = document.getElementById("weight").value;

    // Get the diameter of the plate in cm
    const diameter = document.getElementById("diameter").value;


    // Calculate the volume of the weight plate in cm^3
    const volume = (weight / density) * 1000; // convert to g before dividing by density

    // Calculate the thickness of the weight plate in cm
    // const thickness = volume / (Math.PI * Math.pow(diameter / 2, 2));
    const thickness = volume / (Math.PI * Math.pow(diameter / 2, 2)) * 1.2;//(evaporated water 1.2)
    const radius = diameter / 2;
    const pipeDiementions = thickness;

    // Calculate circumference
    const circumference = 2 * Math.PI * radius;
    // Display the thickness of the weight plate in cm
    document.getElementById(
        "result"
    ).innerHTML = `<p>Weight plate: ${weight}kg </p>
    <p>Diameter: ${diameter}cm</p>
    <p> Thickness: ${thickness.toFixed(2)}cm</p>
    <p>Radius: ${radius} cm</p>
    <p>Pipe thickness: ${pipeDiementions}cm </p>
    <p>Circumference(Mold Length): ${circumference.toFixed(2)}cm </p>`;
}


// Get the input fields for weight and diameter
const weightInput = document.getElementById("weight");
const diameterInput = document.getElementById("diameter");

// Add an event listener to each input field to listen for the "keydown" event
weightInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    }
});

diameterInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    }
});
