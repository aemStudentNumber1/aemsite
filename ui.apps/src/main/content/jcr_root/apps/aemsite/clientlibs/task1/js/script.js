function checkImageSize() {
    let image = document.getElementById("logo");
    let width = image.width;
    let height = image.height;
    let sum = width + height;

    if (sum > 800) {
        let title = document.getElementById("title");
        title.innerHTML += " big image";
    }
}
