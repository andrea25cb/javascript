// Get the img object using its Id
//img = document.getElementById("img1");

function agrandarImg() {
    let img = document.getElementById("img1");
    let anchoA = img.getAttribute('width');
    let anchoN = parseInt(anchoA) + 50;
    img.setAttribute('width', anchoN)
}

function disminuir() {
    let img = document.getElementById("img1");
    let anchoA = img.getAttribute('width');
    let anchoN = parseInt(anchoA) - 50;
    img.setAttribute('width', anchoN)

}
