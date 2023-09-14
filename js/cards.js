// three prameters geometry 
document.querySelector('#triangle-btn').addEventListener('click', function(){
    threeParams('triangle-input-b', 'triangle-input-h', 'triangle-name');
    
})
// toggle bold 
document.addEventListener('DOMContentLoaded', function(){
    setBoldToggle('tri-penIcon', 'triangle-formula')
})


document.querySelector('#rhombus-btn').addEventListener('click', function(){
    threeParams('rhombus-d1', 'rhombus-d2', 'rhombus-name');
})
// toggle bold
document.addEventListener('DOMContentLoaded', function(){
    setBoldToggle('rec-penIcon', 'rec-formula')
})


document.querySelector('#pentagon-btn').addEventListener('click', function(){
    threeParams('pentagon-p', 'pentagon-b', 'pentagon-name')
})

// two parameter geometry 
document.querySelector('#rectangle-btn').addEventListener('click', function(){
    twoParams('rectangle-w', 'rectangle-i', 'rectangle-name')
    
});
// checkbox toggle 
toggleCheckbox('rhombus-check', 'rhombus-d1', 'rhombus-d2');


document.querySelector('#parallelogram-btn').addEventListener('click', function(){
    twoParams('para-b', 'para-h', 'para-name');
});
// checkbox toggle
toggleCheckbox('para-check', 'para-b', 'para-h');

// PI geometry
document.querySelector('#ellipse-btn').addEventListener('click', function(){
    ellipses('ellipse-a', 'ellipse-b', 'ellipse-name')
})


// random background color change when mouse over on a card 
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    // console.log(color)
    return color;
}

const divs = document.querySelectorAll('.randomColor');
divs.forEach(function(card){
    card.addEventListener('mouseover', function(){
        card.style.backgroundColor = getRandomColor()
    })
})
divs.forEach(function(clear){
    clear.addEventListener('mouseout', function(){
        // clear.style.backgroundColor = '';
        clear.style.backgroundColor = 'transparent'
    })
})


// page redirect to another page 
document.querySelector('#redirect').addEventListener('click', function(){
    // window.location.href = 'questions.html';
    window.open('questions.html', '_blank')
})
