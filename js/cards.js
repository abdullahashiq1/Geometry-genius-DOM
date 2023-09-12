function threeInput(){

}


document.querySelector('#triangle-btn').addEventListener('click', function(){
    const firstId = elementById('triangle-input-b');
    const secondId = elementById('triangle-input-h');
    // triangle calculation 
    if(!isNaN(firstId) && !isNaN(secondId)){
        const triangle = 0.5 * firstId * secondId;
        const triangleCm = triangle + 'cm<sup>2</sup>';
        console.log(triangleCm)
    
        const li = document.createElement('li');
        li.innerHTML = triangle;
        const olId = document.getElementById('calculation-list');
        olId.appendChild(li);
    
    }
    else{
        JSAlert.alert("Please enter numeric value or valid!");
    }
})


