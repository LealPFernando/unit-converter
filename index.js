/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/
const METER_FEET = 3.28084;
const LITER_GALLON = 0.264172;
const KILOGRAM_POUND = 2.20462;

let inputEl = document.getElementById("input-el");
let meterFeetEl = document.getElementById("meter-feet-el");
let litersGallonsEl = document.getElementById("liters-gallons-el");
let kgPoundsEl = document.getElementById("kg-pounds-el");

let convertButton = document.getElementById("convert-btn");

function getConversion(base, target) {
  return [(base / target).toFixed(3), (base * target).toFixed(3)];
}

convertButton.addEventListener("click", () => {
  let base = inputEl.value;
  if (Number(base)) {
    let [meters, feet] = getConversion(base, METER_FEET);
    let [liters, gallons] = getConversion(base, LITER_GALLON);
    let [kg, pounds] = getConversion(base, KILOGRAM_POUND);

    meterFeetEl.textContent = `${base} meters = ${feet} feet | ${base} feet = ${meters} meters`;
    litersGallonsEl.textContent = `${base} liters = ${gallons} gallons | ${base} gallons = ${liters} liters`;
    kgPoundsEl.textContent = `${base} kilos = ${pounds} pounds | ${base} pounds = ${kg} kilos`;
  } else {
    alert("Wrong Input");
  }
});
