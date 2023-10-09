function setBackgroundColor() {
    const userColor = prompt("Enter a color (e.g., red, blue, #00ff00):");
    if (userColor !== null && userColor !== "") {
        document.body.style.backgroundColor = userColor;
    }
}
setBackgroundColor();
