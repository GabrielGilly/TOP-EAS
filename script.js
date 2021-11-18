// Default

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
            pixel.classList.add("active");
        });
    };
        // select all pixel into anodelist for use in other functions
    const pixels = document.querySelectorAll('.pixel');
    console.log(`a total of ${i-1} div have been added`);
}


// Change color when hover
    // Function that change the color when requested
function changeColor(pixel){
    pixel.classList= "active"
}

// Clear all div to default color
function clearGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel =>{
        pixel.classList.remove("active");
    });
    console.log('grid cleared');
};

// Set size of the etching grid
    // promt the user to enter his grid size
function gridSizePrompt(){
    gridSize = prompt('What size would you like?');
    if (prompt)
    console.log(`return:${gridSize}`);
    deleteGrid();
    gridCreation(gridSize);
}
    //function to delete all pixels
function deleteGrid(){
    pixels.forEach(pixel=>{
        pixel.remove;
    })
    console.log('deleted all pixels');
}

// Add a ramdom efect to the color

// increase the intensity of the color slowly

// initialisation
gridCreation(16);