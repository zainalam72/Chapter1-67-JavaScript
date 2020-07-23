function setNewImage(){
    document.getElementById("img1").src = "shandar polo festival.jpg"

}
function setOldImage() {
    document.getElementById("img1").src = "sibi_mela.jpg" 
}



var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};
