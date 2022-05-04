const gridContainer = document.querySelector('#grid-container');

let numberOfSquares = 16
let width = 640 / numberOfSquares;
let height = 640 / numberOfSquares;
const numberInput = document.getElementById('number-choice')
numberInput.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        numberValidate(ev);
    }
})

function numberValidate(ev) {
    let userNumberInput = document.getElementById('number-choice').value;
    if (userNumberInput < 1 || userNumberInput > 100) {
        alert('Choose a number between 1 and 100')
    }
    else {
        return userNumberInput;
    }
}





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
