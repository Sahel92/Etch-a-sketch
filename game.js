const divContainer = document.querySelector('.container');


document.addEventListener("DOMContentLoaded",createGrid);

function createGrid(){
for(let i = 0; i <16; i++){
    for(let j = 0; j < 16; j++){

        const divGrid = document.createElement('div');
        
        divGrid.className = 'square';

        divContainer.appendChild(divGrid);
    }
}

}