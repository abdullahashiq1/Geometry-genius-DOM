// for get input value
function elementById(elementId){
    const elementName = document.getElementById(elementId);
    const eleValue = elementName.value;
    const newInput = parseFloat(eleValue).toFixed(2);
    return newInput;
}
// for get geometry name
function geometryName(nameId){
    const elementName = document.getElementById(nameId);
    const elementValue = elementName.innerText;
    return elementValue;
}
