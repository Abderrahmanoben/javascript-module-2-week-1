/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */
     
    let pNodes = document.querySelectorAll("p");
    if(pNodes.length === 6){
     console.log(pNodes);
    };

/*    2. the first div element node
    --> should log the ".site-header" node*/

    let firstDiv = document.querySelector(".site-header");
    console.log(firstDiv);

/*    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*/

    let jumboText = document.querySelector("#jumbotron-text");
    console.log(jumboText);

/*    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3*/

    let primaryElements = document.querySelectorAll(".primary-content p");
    console.log(primaryElements); 

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", () => alert("Thanks for visiting Bikes for Refugees!"));


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let bodyColor = document.querySelector("body");
let changeColorButton = document.querySelector("#bgrChangeBtn");
changeColorButton.addEventListener("click", () => bodyColor.style.backgroundColor = "#F0F8FF"); 


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

let addSomeTextButton = document.querySelector('#addTextBtn');
let mainArticles = document.querySelector('#mainArticles');
addSomeTextButton.addEventListener("click", ()=>{
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello there I'm new here!"
    mainArticles.appendChild(newParagraph);
});


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let linksSize = document.querySelectorAll('a');
let largerLinksButton = document.querySelector('#largerLinksBtn');
largerLinksButton.addEventListener("click", () =>{
    linksSize.forEach((link) => link.style.fontSize = "10px");
});


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

let addArticleButton = document.querySelector('#addArticleBtn');
let inputText = document.querySelector("input");
addArticleButton.addEventListener('click', () =>{
    let newParagraph = document.createElement("p");
    newParagraph.textContent = inputText.value;
    mainArticles.appendChild(newParagraph);
    inputText.value = '';
});

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let bodyColor = document.querySelector("body");
let changeColorButton = document.querySelector("#bgrChangeBtn");
let arrayOfColors = ['lightgray', 'ivory', 'mintcream', 'lavender'];
let colorIndex = 0;
changeColorButton.addEventListener('click', () =>{
    bodyColor.style.backgroundColor = arrayOfColors[colorIndex];
    colorIndex = (colorIndex + 1) % arrayOfColors.length;
});