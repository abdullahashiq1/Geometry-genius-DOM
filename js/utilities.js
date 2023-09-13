// for get geometry name
function geometryName(nameId){
    const elementName = document.getElementById(nameId);
    const elementValue = elementName.innerText;
    return elementValue;
}

function threeParams(firstValue, secondValue, nameId){
    const firstId = parseFloat(document.getElementById(firstValue).value);
    const secondId = parseFloat(document.getElementById(secondValue).value);
    // calculation 
    const parameters = 0.5 * firstId * secondId;
    if(!isNaN(firstId)&& !isNaN(secondId)){
        const paramsCm = parameters + 'cm<sup>2</sup>';
        const geoName = geometryName(nameId);
        const li = document.createElement('li');
        li.innerHTML = geoName + " " + paramsCm;
        const olId = document.getElementById('calculation-list');
        olId.appendChild(li);
    }
    else{
        JSAlert.alert("Please enter numeric value or valid!");
    }
}

function twoParams(firstValue, secondValue, nameId){
    const firstId = parseFloat(document.getElementById(firstValue).value);
    const secondId = parseFloat(document.getElementById(secondValue).value);
    // calculation 
    const parameters = firstId * secondId;
    if(!isNaN(firstId)&& !isNaN(secondId)){
        const paramsCm = parameters + 'cm<sup>2</sup>';
        const geoName = geometryName(nameId);
        const li = document.createElement('li');
        li.innerHTML = geoName + " " + paramsCm;
        const olId = document.getElementById('calculation-list');
        olId.appendChild(li);
    }
    else{
        JSAlert.alert("Please enter numeric value or valid!");
    }
}

function ellipses(firstValue, secondValue, nameId){
    const firstId = parseFloat(document.getElementById(firstValue).value);
    const secondId = parseFloat(document.getElementById(secondValue).value);
    // calculation 
    const parameters = 3.14 * firstId * secondId;
    if(!isNaN(firstId)&& !isNaN(secondId)){
        const paramsCm = parameters + 'cm<sup>2</sup>';
        const geoName = geometryName(nameId);
        const li = document.createElement('li');
        li.innerHTML = geoName + " " + paramsCm;
        const olId = document.getElementById('calculation-list');
        olId.appendChild(li);
    }
    else{
        JSAlert.alert("Please enter numeric value or valid!");
    }
}

// cm to m 
function convertToMetre(geometryDigit){
    const cm = geometryDigit;
    const m = cm / 100;
    return m;
}

   


