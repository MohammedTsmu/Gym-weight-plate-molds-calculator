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
    const thickness = volume / (Math.PI * Math.pow(diameter / 2, 2));
    const radius = diameter / 2;
    const pipeDiementions = thickness;

    // Calculate circumference
    const circumference = 2 * Math.PI * radius;
    // Display the thickness of the weight plate in cm
    document.getElementById(
        "result"
    ).innerHTML = `<p>Weight plate: <span>${weight} (kg) </span></p>
    <p>Diameter:<span>${diameter} (cm)</span></p>
    <p> Thickness: <span>${thickness.toFixed(2)} (cm)</span></p>
    <p>Radius: <span>${radius} (cm)</span></p>
    <p>Pipe thickness: <span>${pipeDiementions} (cm)</span></p>
    <p>Circumference(plate mold length): <span>${circumference.toFixed(2)} (cm)</span></p>`;
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
