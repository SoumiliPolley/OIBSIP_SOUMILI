let cell=document.querySelector('.celInput > input');
let res1=document.querySelector('.result1');
let res2=document.querySelector('.result2');
let res=document.querySelector('.reset');
let con=document.querySelector('.convert');
let unitValue=document.querySelector('.celInput select');

function roundNumber(number){
    return Math.round(number*100)/100;
}

function handleButton(event) {
    let cTemp, fTemp, kTemp;
    let unit = unitValue.value;
    if (unit === "Celsius") {
        cTemp = parseFloat(cell.value);
        if (!isNaN(cTemp)) {
            res1.innerHTML = `${roundNumber(cTemp)} °C =  ${roundNumber((cTemp * (9 / 5)) + 32)}  °F`; 
            res2.innerHTML = `${roundNumber(cTemp)} °C =  ${roundNumber(cTemp + 273.15)}  K`; 
        }
    } else if (unit === "Fahrenheit") {
        fTemp = parseFloat(cell.value);
        if (!isNaN(fTemp)) {
            res1.innerHTML= `${roundNumber(fTemp)} °F =  ${roundNumber((fTemp - 32) * (5 / 9))}  °C`; 
            res2.innerHTML= `${roundNumber(fTemp)} °F =  ${roundNumber((fTemp - 32) * (5 / 9) + 273.15)}  K`; 
        }
    } else if (unit === "Kelvin") {
        kTemp = parseFloat(cell.value);
        if (!isNaN(kTemp)) {
            res1.innerHTML = `${roundNumber(kTemp)} K =  ${roundNumber(kTemp - 273.15)}  °C`; 
            res2.innerHTML = `${roundNumber(kTemp)} K =  ${roundNumber((kTemp - 273.15) * (9 / 5) + 32)} °F`; 
        }
    }
}

function handleReset(event) {
    cell.value = "";
    res1.innerHTML = "";
    res2.innerHTML = "";
}

con.addEventListener('click', handleButton);
res.addEventListener('click', handleReset);
