
const generateBtn = document.getElementById("generateBtn");

const singleHexColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
      let random = Math.floor(Math.random() * hex.length);
      hexColor += hex[random];
    }

    return hexColor;
    
};

const colorPaletteGenerator = () => {
    const colorPalette = [];
     for(let i = 0; i <4; i++){
     colorPalette.push(singleHexColorGenerator());
    }
    return colorPalette;
};


const renderColorPalette = () =>{
    const colorsContainer = document.querySelector(".colors_container");

    colorsContainer.innerHTML = "";

    const colorPalette = colorPaletteGenerator();

    colorPalette.forEach((color) => {
        const colorDiv = document.createElement("div");
        colorDiv.id = 'color${i = 1}';
        colorDiv.style.background = color;

        colorsContainer.append(colorDiv);
    });
    console.log({colorPalette});
    console.log("btn pressed");
}

generateBtn.addEventListener("click", renderColorPalette);