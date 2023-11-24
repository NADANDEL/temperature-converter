// Attach the event listener to the convert button
convertButton.addEventListener('click', performConversion); 

function performConversion() {
  const temperatureValue = parseFloat(temperatureValueInput.value);
  const temperatureUnit = temperatureUnitSelect.value;

  // Check if the temperature value is a valid number
  if (isNaN(temperatureValue)) {
    conversionResultEl.textContent = 'Invalid temperature value. Please enter a valid number.';
    return;
  }

  let convertedTemperature;
  if (temperatureUnit === 'Celsius') {
    convertedTemperature = celsiusToFahrenheit(temperatureValue);
  } else {
    convertedTemperature = fahrenheitToCelsius(temperatureValue);
  }

  // Display the conversion result
  conversionResultEl.textContent = `${temperatureValue}${temperatureUnit} is equal to ${convertedTemperature.toFixed(2)}${temperatureUnit === 'Celsius' ? 'F' : 'C'}`;
}


