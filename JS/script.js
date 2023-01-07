const form = document.querySelector('#form');
form.addEventListener('submit' , handleSubmit);

let status = document.getElementById('status');
let  attempt = document.getElementById('attemp');
let result = document.getElementById('result');

const Guess = {
    max:10,
    attemptNumber:0,
    NumberDrawn:function randomValue(){
        return Math.round(Math.random() * this.max);
    }

};

let numberDrawn = Guess.numberDrawn();



function handleSubmit(e){}

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';

}

function restar(){
    document.location.reload(true)
}


function clear(){
    document.querySelector('#kick').value = '';
}

function updateAttempt()