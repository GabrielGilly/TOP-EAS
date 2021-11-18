// Create the divs
    // Get the node where to add the divs
const container = document.getElementById('container');
console.log(container);
    // Create the divs
for(i=1; i<=256; i++){
    let pixel = document.createElement("div");
    pixel.id = `pixel${i}`
    pixel.classList = "pixel"
    container.appendChild(pixel);
    console.log(`div${i} was added to ${container}`)
};
console.log(`a total of ${i-1} div have been added`);

// Implement event listener in the divs
    // get all pixels into a nodelist
const pixels = document.querySelectorAll('.pixel');
    // loop for each and add an eventlisnter
pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', (e)=>{
        console.log(pixel);
        pixel.classList.add("active");
    });
    console.log(`eventlistener added for ${pixel}`)
});

// Change color when hover
    // Function that change the color when requested
function changeColor(pixel){
    pixel.classList= "active"
}

// Clear all div to default color
function clearGrid() {
    pixels.forEach(pixel =>{
        pixel.classList.remove("active");
    });
};

// Set size of the etching grid
    // promt the user to enter his grid size
function gridSizePrompt(){
    gridSize = prompt('What size would you like?');
    console.log(`return:${gridSize}`);
    deleteGrid();
}
    //function to delete all pixels
function deleteGrid(){
    pixels.forEach(pixel=>{
        pixel.remove();
        console.log(`remove ${pixel}`);
    })
}

// Add a ramdom efect to the color

// increase the intensity of the color slowly