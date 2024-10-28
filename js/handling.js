// JavaScript Assessment 1: Task 2 - Event Handling

//No need for globals here



function ShowBoxes(type) {
    // Esconde todas as caixas primeiro
    var blueboxOn = document.getElementById('blueIn');
    var blueboxUnder = document.getElementById('blueBottom');
    var blueboxRight = document.getElementById('blueRight');
    var blueboxLeft = document.getElementById('blueLeft');

    blueboxOn.style.display = 'none';
    blueboxUnder.style.display = 'none';
    blueboxRight.style.display = 'none';
    blueboxLeft.style.display = 'none';

    // Mostra a caixa correspondente
    if (type === 'on') {
        blueboxOn.style.display = 'block';
    } else if (type === 'under') {
        blueboxUnder.style.display = 'block';
    } else if (type === 'right') {
        blueboxRight.style.display = 'block';
    } else if (type === 'left') {
        blueboxLeft.style.display = 'block';
    }
}


// function() {//Fisrt button function here alert("Don't forget to use strict in Function Name here");}

function init(){
alert("Don't forget to use strict in init function");


// All event listeners here


}


window.onload = init;

