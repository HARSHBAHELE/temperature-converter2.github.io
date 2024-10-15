let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

let computeTemp = (event) => {
    let cureentVal = +event.target.value;
    
    switch(event.target.name) {
        case "celsius":
            kelvin.value = (cureentVal + 273.15).toFixed(2);
            fahrenheit.value = (1.8 * cureentVal + 32).toFixed(2);
        break;

        case "fahrenheit":
            celsius.value = ((cureentVal - 32 )/ 1.8).toFixed(2);
            kelvin.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (currentValue - 273.32).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
            default:
            break;
        }
    }
