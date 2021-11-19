
// Create the divs
    // Get the node where to add the divs
const container = document.getElementById('container');
const pixels = document.querySelectorAll('.pixel'); // capture all pixel if already existing

console.log(container);
    // Create the divs
    // Wrap the grid creation into a function
function gridCreation(size){
    for(i=1; i<=size*size; i++){
        let pixel = document.createElement("div"); // create element
        pixel.id = `pixel-${i}` // add id
        pixel.classList = "pixel" // add class
            // define size based on the grid size
        pixel.style.width= parseInt(500/size)+'px';
        pixel.style.height=parseInt(500/size)+ 'px';
        container.appendChild(pixel); // add to html
            //add event listner
        pixel.addEventListener('mouseenter', (e)=>{
            console.log(`hover ${pixel.id}`);
            changeColorRamdom(pixel);
        });
    };
    console.log(`a total of ${i-1} div have been added`);
}


// Change color when hover
    // Function that change the color when requested
function changeColor(pixel){
    pixel.classList= "active"
    pixel.style.backgroundColor = 'black';

}

    // function can be called instead of the changeColor
function changeColorRamdom(pixel){
    // mark the pixel as active
    pixel.classList="active"
    // create ramdom color
    let ramdomColor= Math.floor(Math.random()*0xFFFFFF).toString(16);
    // get a ramdom 0->1 number, multiply by the max color value 0xFFFF, round it, convert to HEXA with `string(16)`
    console.log(`ramdom color: ${ramdomColor}`);
    //Now change the style of the pixel directly
    pixel.style.backgroundColor = `#${ramdomColor}`;
};

// Clear all div to default color
function clearGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel =>{
        pixel.classList.remove("active");
        pixel.style= `background-color: ${white}`;
    });
    console.log('grid cleared');
};

// Set size of the etching grid
    // promt the user to enter his grid size
function gridSizePrompt(){
    gridSize = prompt('What size would you like?');
    if (gridSize<100){
        console.log(`return:${gridSize}`);
        deleteGrid();
        console.log(`call function gridCreation: ${gridSize}`)
        gridCreation(gridSize);
    }else{
        alert('Incorect value, trie something less than 100.');
    }
}
    //function to delete all pixels
function deleteGrid(){
    console.log('function called to delete all pixels');
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel=>{
        pixel.parentNode.removeChild(pixel);
        console.log(`Delete ${pixel.id}`);
    })
    console.log('deleted all pixels');
}

// Add a ramdom efect to the color

// increase the intensity of the color slowly

// initialisation
gridCreation(16);