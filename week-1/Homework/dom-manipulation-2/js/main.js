// Part 1
let blueButton = document.querySelector('#blueBtn');
let orangeButton = document.querySelector('#orangeBtn');
let greenButton = document.querySelector('#greenBtn');

let jumbotron = document.querySelector('.jumbotron');
let donateButton = document.querySelector('.btn.btn-primary.btn-lrg');
let volunteerButton = document.querySelector('.btn.btn-secondary.btn-lrg');

blueButton.addEventListener('click', () =>{
    jumbotron.style.backgroundColor = '#588fbd';
    donateButton.style.backgroundColor = '#ffa500';
    volunteerButton.style.backgroundColor = 'black';
    volunteerButton.style.color = 'white';
});

orangeButton.addEventListener('click', () =>{
    jumbotron.style.backgroundColor = '#f0ad4e';
    donateButton.style.backgroundColor = '#5751fd';
    volunteerButton.style.backgroundColor = '#31b0d5';
    volunteerButton.style.color = 'white';
});

greenButton.addEventListener('click', () =>{
    jumbotron.style.backgroundColor = '#87ca8a';
    donateButton.style.backgroundColor = 'black';
    volunteerButton.style.backgroundColor = '#8c9c08';
});


// Part 2
let submitButton = document.querySelector('form button');
let emailAddress = document.querySelector('#exampleInputEmail1');
let userName = document.querySelector('#example-text-input');
let userDescription = document.querySelector('#exampleTextarea');

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    if ( emailAddress.value.trim().length === 0 || emailAddress.value.trim().includes("@") === false){
        emailAddress.style.backgroundColor = "red";
    } else if ( userName.value.trim().length === 0){
        userName.style.backgroundColor = "red";
    } else if ( userDescription.value.trim().length === 0){
        userDescription.style.backgroundColor = "red";
    } else {
        alert("thank you for filling out the form");
        emailAddress.value = "";
        userName.value = "";
        userDescription.value = "";
    };
});
