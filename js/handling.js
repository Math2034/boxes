// JavaScript Assessment 1: Task 2 - Event Handling

function ShowBoxes(type) {
    var redbox = document.getElementById('red');
    var redboxLeft = document.getElementById('redLeft');
    var blueboxOn = document.getElementById('blueIn');
    var blueboxUnder = document.getElementById('blueBottom');
    var blueboxRight = document.getElementById('blueRight');
    var blueboxLeft = document.getElementById('blueLeft');

    // Esconder todas as caixas
    redbox.style.display = 'none';
    redboxLeft.style.display = 'none';
    blueboxOn.style.display = 'none';
    blueboxUnder.style.display = 'none';
    blueboxRight.style.display = 'none';
    blueboxLeft.style.display = 'none';
    if (type === 'on') {
        redbox.style.display = 'block';
        blueboxOn.style.display = 'block';
    } else if (type === 'under') {
        redbox.style.display = 'block';
        blueboxUnder.style.display = 'block';
    } else if (type === 'right') {
        redbox.style.display = 'block';
        blueboxRight.style.display = 'block';
    } else if (type === 'left') {
        redboxLeft.style.display = 'block';
        blueboxLeft.style.display = 'block'; 
        redbox.style.display = 'none'; // O vermelho deve ser escondido aqui
    } else if (type === 'offset') {
        redbox.style.display = 'block';
        blueboxOn.style.display = 'block';
        blueboxOn.style.position = 'absolute';
        blueboxOn.style.top = '20px';
        blueboxOn.style.left = '45px'; 
    } 
}

function init() {
    alert("Don't forget to use strict in init function");

    // All event listeners here
    document.getElementById('btn1').onclick = function() { ShowBoxes('on'); };
    document.getElementById('btn2').onclick = function() { ShowBoxes('under'); };
    document.getElementById('btn3').onclick = function() { ShowBoxes('right'); };
    document.getElementById('btn4').onclick = function() { ShowBoxes('left'); };
    document.getElementById('btn5').onclick = function() { ShowBoxes('offset'); };
}

window.onload = init;
