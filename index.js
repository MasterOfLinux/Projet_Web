var background = new Array("Images/villa_test.jpg","Images/villa2.jpg", "Images/villa3.jpg");
var nbrSlide = 0;
var Temp;
count = background.length

function NextSlide(sens) {
    nbrSlide += sens;
    if (nbrSlide < 0)
        nbrSlide = count - 1;
    if (nbrSlide > count - 1)
        nbrSlide = 0;
        console.log(nbrSlide);
    document.getElementById("slide").src = background[nbrSlide];
    Temp = setTimeout("NextSlide(1)", 5000);
}
function Stop(){
    clearTimeout(Temp)
}
NextSlide(1);
console.log("test");