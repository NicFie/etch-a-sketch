const gridContainer = document.querySelector('#grid-container');
const numButton = document.getElementById('change-number');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


let numberOfSquares = 16;

numButton.addEventListener('click', () => {
    let userInput = prompt("Choose a number between 1 and 100");
    if (isNaN(userInput) === true) {
        alert("Enter a number pls not a word");
        numberOfSquares = 16;
    } else if (userInput <= 0 || userInput > 100) {
        alert("Choose a number between 1 and 100, stop trying to break my etch-a-sketch");
        numberOfSquares = 16;
    } else {
        numberOfSquares = userInput;
    }
    width = 500 / numberOfSquares;
    height = 500 / numberOfSquares;
    removeDivs();
    createSquares();
    return numberOfSquares;
})



let width = 500 / numberOfSquares;
let height = 500 / numberOfSquares;


const input = document.getElementById('color-choice');
input.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        validate(e);
    }
});

function validate(e) {
    let userInput = document.getElementById("color-choice").value;
    userInput = userInput.toLowerCase();
    userInput = userInput.replace(/\s/g, '');
    input.style.visibility = 'hidden';
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
                if (e.type === 'mouseover' && !mouseDown) return;
                square.style.backgroundColor = `${userInput}`;
            });
            square.addEventListener('mousedown', function(e) {
                if (e.type === 'mouseover' && !mouseDown) return;
                square.style.backgroundColor = `${userInput}`;
            });
            
        }
    } else {
        alert("That is not a real colour you noob");
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
        square.addEventListener('mouseover', blackColor);
        square.addEventListener('mousedown', blackColor);
        
        
    };

};

function blackColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
}

function multicolor() {
    removeDivs();
    //createSquares
    let i = 0;
    for(i=0; i < numberOfSquares**2; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        gridContainer.appendChild(square);
        square.style.width = `${width}px`;
        square.style.height = `${height}px`;    
        square.addEventListener('mouseover', multiColor);
        square.addEventListener('mousedown', multiColor);
        
    };
}

function multiColor(e) {
    if (e.type === 'mouseover' &&!mouseDown) return;
    const randomColor = 
        Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}

const changeColorButton = document.querySelector('#change-color-button');
changeColorButton.addEventListener('click', (e) => {
    input.style.visibility = 'visible';
})

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
