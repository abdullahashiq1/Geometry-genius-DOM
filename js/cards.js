// three prameters geometry 
document.querySelector('#triangle-btn').addEventListener('click', function(){
    threeParams('triangle-input-b', 'triangle-input-h', 'triangle-name')
})

document.querySelector('#rhombus-btn').addEventListener('click', function(){
    threeParams('rhombus-d1', 'rhombus-d2', 'rhombus-name');
})

document.querySelector('#pentagon-btn').addEventListener('click', function(){
    threeParams('pentagon-p', 'pentagon-b', 'pentagon-name')
})

// two parameter geometry 
document.querySelector('#rectangle-btn').addEventListener('click', function(){
    twoParams('rectangle-w', 'rectangle-i', 'rectangle-name')
    
});
document.querySelector('#parallelogram-btn').addEventListener('click', function(){
    twoParams('para-b', 'para-h', 'para-name');
});
// PI geometry
document.querySelector('#ellipse-btn').addEventListener('click', function(){
    ellipses('ellipse-a', 'ellipse-b', 'ellipse-name')
})
