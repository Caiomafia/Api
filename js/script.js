const tiles = document.querySelector(".tile-container");
const backpaceAndEnterRow = document.querySelector("#backspaceAndEnterRow");
 const keyboardFirstRow  = document.querySelector("# keyboardFirstRow  ")
const keyboardSecondRow = document.querySelector("#keyboardSecondRow");
const keyboardThirdRow  = document.querySelector("#keyboardThirdRow");


const keysFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keysSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keysThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];



const rows = 6; 
const columns = 5 ; 

for (let rowindex = 0; rowindex < rows; rowindex++) {
    const tileRow = document.createElement("div")
    tileRow.setAttribute("id" , "rowindex")
    tileRow.setAttribute("class" , "tile-row")
    for (let columnsIndex = 0; columnsIndex < columns; columnsIndex++) {
        const TileColumns = document.createElement("div")
        TileColumns.setAttribute("id" , "row"+ rowindex + "columns"+columnsIndex )
        TileColumns.setAttribute("class" , "tile-column")
        
        tileRow.appendChild(TileColumns)
    }
    tiles.append(tileRow)
    
}

const createKeyboardRow = (keys, keysboardRow) =>{
  keys.forEach((key) => {
    var buttonElement = document.createElement("button")
    buttonElement.textContent = key
    buttonElement.setAttribute("id" , key)
buttonElement.addEventListener("click" , () => {console.log("TECLA: ")columnske })
})

