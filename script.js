const gridContainer = document.querySelector('#grid-container');
const numButton = document.getElementById('change-number');


let numberOfSquares = 16;

numButton.addEventListener('click', () => {
    numberOfSquares = prompt("Choose a number between 1 adn 100");
    width = 640 / numberOfSquares;
    height = 640 / numberOfSquares;
    removeDivs();
    createSquares();
    return numberOfSquares;
})



let width = 640 / numberOfSquares;
let height = 640 / numberOfSquares;


const input = document.getElementById('color-choice');
input.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        validate(e);
    }
});

function validate(e) {
    let userInput = document.getElementById("color-choice").value;
    userInput = userInput.toLowerCase();
    if (isColor(userInput) == true) {
        removeDivs();
        let i = 0;
        for(i=0; i < numberOfSquares**2; i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            square.style.width = `${width}px`
            square.style.height = `${height}px`
            gridContainer.appendChild(square);
            square.addEventListener('mouseover', function(e) {
                square.style.backgroundColor = `${userInput}`;
            })
        }
    } else {
        alert("Please choose a valid colour");
    }
    input.value = "";
}

function createSquares() {
    let i = 0;
    for(i=0; i < numberOfSquares**2; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.style.width = `${width}px`
        square.style.height = `${height}px`
        gridContainer.appendChild(square);      
        square.addEventListener('mouseover', function(e) {
            square.style.backgroundColor = "black";
        })
        
    };

};

function multicolor() {
    removeDivs();
    //createSquares
    let i = 0;
    for(i=0; i < numberOfSquares**2; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        gridContainer.appendChild(square);
        square.style.width = `${width}px`
        square.style.height = `${height}px`      
        const randomColor = 
        Math.floor(Math.random()*16777215).toString(16);
        square.addEventListener('mouseover', function(e) {
            square.style.backgroundColor = "#" + randomColor;
        })
        
    };
}




function reset() {
    removeDivs();
    createSquares();
}

function removeDivs() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    };
}

function isColor(strColor) {
    let s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}
