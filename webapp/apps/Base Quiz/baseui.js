var number = 0;
var ques=0
var ans1 = 0;
var ans2 = 0;
function space(value){
    return value.slice(0,4) +" "+value.slice(4)
}
function randomize(){
    document.getElementById("label_t").innerHTML="?";
    document.getElementById("label_b").innerHTML="?";

    number = Math.floor(Math.random() * 256);
    var mode = Math.floor(Math.random() * 3);
    if (mode == 0){
        ques = "dec : " + number;
        ans1 = "hex : " +number.toString(16).toUpperCase();
        ans2 = "bin : " +space(number.toString(2).padStart(8,'0'));
    }else if (mode==1) {
        ans1 = "dec : " + number;
        ques = "hex : " + number.toString(16).toUpperCase();
        ans2 = "bin : " + space(number.toString(2).padStart(8,'0'));
    }else if (mode==2) {
        ans2 = "dec : " + number;
        ans1 = "hex : " + number.toString(16).toUpperCase();
        ques = "bin : " + space(number.toString(2).padStart(8,'0'));
    }
    document.getElementById("label").innerHTML=ques;
}

function answer(){
    document.getElementById("label_t").innerHTML=ans1;
    document.getElementById("label_b").innerHTML=ans2;
}