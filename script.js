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

// Change color when hover

// Clear all div to default color

// Set size of the etching grid

// Add a ramdom efect to the color

// increase the intensity of the color slowly