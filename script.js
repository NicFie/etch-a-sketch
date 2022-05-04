const gridContainer = document.querySelector('#grid-container');

function createSquares() {
    let i = 0;
    for(i=0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        gridContainer.appendChild(square);
        const randomColor = 
        Math.floor(Math.random()*16777215).toString(16);
        square.addEventListener('mouseover', function(e) {
            square.style.backgroundColor = "#" + randomColor;
        })
    };

};
