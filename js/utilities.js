// for get geometry name
function geometryName(nameId){
    const elementName = document.getElementById(nameId);
    const elementValue = elementName.innerText;
    return elementValue;
}

// cm to m 
function convertToMetre(geometryDigit){
    const cm = geometryDigit;
    const m = (cm / 100).toFixed(2);
    return m;
}

function threeParams(firstValue, secondValue, nameId){
    const firstId = parseFloat(document.getElementById(firstValue).value);
    const secondId = parseFloat(document.getElementById(secondValue).value);
    // calculation 
    const parameters = 0.5 * firstId * secondId;
    if(!isNaN(firstId)&& !isNaN(secondId)){
        const paramsCm = parameters + 'cm<sup>2</sup>';
        const geoName = geometryName(nameId);

        const btnMetre = document.createElement('button');
        btnMetre.textContent = 'Convert m²';
        btnMetre.classList.add('convertM');

        const li = document.createElement('li');
        li.innerHTML = `${geoName} ${paramsCm}`;
        li.appendChild(btnMetre);
        const olId = document.getElementById('calculation-list');
        olId.appendChild(li);
        btnMetre.addEventListener('click', function(){
            const cmToMetre = convertToMetre(parameters);
            JSAlert.alert("Metre: ", cmToMetre);
        })
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

        const btnMetre = document.createElement('button');
        btnMetre.textContent = 'Convert m²';
        btnMetre.classList.add('convertM');

        const li = document.createElement('li');
        li.innerHTML =`${geoName} ${paramsCm}`;
        li.appendChild(btnMetre);

        const olId = document.getElementById('calculation-list');
        olId.appendChild(li);
        btnMetre.addEventListener('click', function(){
            const cmToMetre = convertToMetre( parameters);
            JSAlert.alert("Metre: ", cmToMetre);

        })
    }
    else{
        JSAlert.alert("Please enter numeric value or valid!");
    }
}

function ellipses(firstValue, secondValue, nameId){
    const firstId = parseFloat(document.getElementById(firstValue).value);
    const secondId = parseFloat(document.getElementById(secondValue).value);

    if(!isNaN(firstId) && !isNaN(secondId)){
        const parameters = (3.14 * firstId * secondId).toFixed(2);
        const paramsCm = parameters + ' cm<sup>2</sup>';
        // create btn 
        const btnMetre = document.createElement('button');
        btnMetre.textContent = 'Convert m²';
        btnMetre.classList.add('convertM');

        const geoName = geometryName(nameId);

        const li = document.createElement('li');
        li.innerHTML = `${geoName} ${paramsCm}`;

        li.appendChild(btnMetre);

        const olId = document.getElementById('calculation-list');
        olId.appendChild(li);
        btnMetre.addEventListener('click', function(){
            const cmToMetre = convertToMetre(parameters);
            JSAlert.alert("Centemetre to Metre: ", cmToMetre);
        })

    }else{
        JSAlert.alert("Please enter numeric value or valid!");
    }
}

/* const penIcon = document.getElementById('tri-penIcon');
    penIcon.onclick = function() {
        const formula = document.getElementById('triangle-formula');
        formula.style.fontWeight = 700;

};   
*/  
// toggle part 
function setBoldToggle(penIconId, formulaId){
    const penIcon = document.getElementById(penIconId);
    const formula = document.getElementById(formulaId);
    let fontWeightBold = false; // initial state 
    penIcon.onclick = function(){
        if(fontWeightBold){
            formula.style.fontWeight = 'normal';
        } else{
            formula.style.fontWeight = 'bold'
        }
        fontWeightBold = !fontWeightBold;   // toggle situation
    }
}

// Toggle checkbox
function toggleCheckbox(checkboxId, firstInputId, secondInputId){
    const checkbox = document.getElementById(checkboxId);
    const firstInput = document.getElementById(firstInputId);
    const secondInput = document.getElementById(secondInputId);
    
    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            firstInput.disabled = true;
            secondInput.disabled = true;
        }
        else{
            firstInput.disabled = false
            secondInput.disabled = false;
        }
    })
}







