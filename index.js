// Given Parameters
const initialVelocityKmHr = 10000; // velocity (km/h)
const accelerationMSq = 3; // acceleration (m/s^2)
const timeSec = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgSec = 0.5; // fuel burn rate (kg/s)

const validateInput = (value, unit, name) => {
  if (typeof value !== 'number' || value < 0) {
    throw new Error(`${name} must be a non-negative number. Received: ${value} ${unit}`);
  }
}


// Validate inputs-  passes in a value to be validated, along with its corresponding unit and a descriptive name.
validateInput(initialVelocityKmHr, 'km/h', 'Initial Velocity');
validateInput(accelerationMSq, 'm/s²', 'Acceleration');
validateInput(timeSec, 's', 'Time');
validateInput(initialDistanceKm, 'km', 'Initial Distance');
validateInput(initialFuelKg, 'kg', 'Initial Fuel');
validateInput(fuelBurnRateKgSec, 'kg/s', 'Fuel Burn Rate');

// Conversion from m/s² to km/h²
const accelerationKmHrSq = accelerationMSq * 3600 * 3600 / 1000;
//there are 3600 seconds in an hour, and 1000 meters in a kilometer.

// Function to calculate new velocity
const calculateNewVelocity = (initialVelocity, acceleration, time) => {
  return initialVelocity + acceleration * time / 3600;
}

// Function to calculate new distance
const calculateNewDistance = (initialDistance, initialVelocity, acceleration, time) => {
  return initialDistance + initialVelocity * time / 3600;
}

// Function to calculate remaining fuel
const calculateRemainingFuel = (initialFuel, fuelBurnRate, time) => {
  const remainingFuel = initialFuel - fuelBurnRate * time;
  if (remainingFuel < 0) {
    throw new Error('Fuel exhausted during the journey!');
  }
  return remainingFuel;
}

// Calculate new velocity, distance, and remaining fuel
const newVelocity = calculateNewVelocity(initialVelocityKmHr, accelerationKmHrSq, timeSec);
const newDistance = calculateNewDistance(initialDistanceKm, initialVelocityKmHr, accelerationKmHrSq, timeSec);
const remainingFuel = calculateRemainingFuel(initialFuelKg, fuelBurnRateKgSec, timeSec);

console.log(`New Velocity: ${newVelocity} km/h`);
console.log(`New Distance: ${newDistance} km`);
console.log(`Remaining Fuel: ${remainingFuel} kg`);

//These lines print out the calculated values of the new velocity, 
//new distance, and remaining fuel to the console, each with an appropriate label.