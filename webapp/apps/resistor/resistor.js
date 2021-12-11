let OHM=[0,0,0,0,0];
let colors = [
    'Black', '#761d1d','#cc0000','#ff9900','#ffff00','#008000',
    '#0000cc', '#550055', '#505050','White', '#9c6600','#c0c0c0'
    ];
let color_name=[
    'BLACK','BROWN','RED','ORANGE','YELLOW','GREEN',
    'BLUE','VIOLET','GREY','WHITE','GOLD','SILVER','[NOT SPECIFIED]',
];
let MODE=4;
function changeColor(idname,value){
    document.getElementById(idname).style.fill= value;
}

function setIndicator(){
    if (MODE==3){
        var text = color_name[OHM[0]]+' '+color_name[OHM[1]]+' '+color_name[OHM[2]]+'      '+color_name[OHM[4]];
    }else{
        var text = color_name[OHM[0]]+' '+ color_name[OHM[1]]+' '+color_name[OHM[2]]+' '+color_name[OHM[3]]+' '+color_name[OHM[4]];
    }
    document.getElementById('color-ind').innerHTML=text;
}

function randomizeColor(){
    document.getElementById("info").innerHTML = "?Ω";
    OHM=[]
    let stripe1= Math.floor(Math.random()*10);
    let stripe2= Math.floor(Math.random()*10);
    let stripe3= Math.floor(Math.random()*10);
    let multiplier= Math.floor(Math.random()*12);
    let tolerance= Math.floor(Math.random() * (13 - 1))+1;
    OHM.push(stripe1);
    OHM.push(stripe2);
    OHM.push(stripe3);
    OHM.push(multiplier);
    OHM.push(tolerance);
    changeColor("res-stripe1",colors[stripe1]);
    changeColor("res-stripe2",colors[stripe2]);
    changeColor("res-stripe3",colors[stripe3]);
    changeColor("res-stripe4",colors[multiplier]);
    if (tolerance==12){
        document.getElementById('res-stripe5').style.visibility='hidden';
    }else{
        document.getElementById('res-stripe5').style.visibility='visible';
        changeColor("res-stripe5",colors[tolerance]);
    }
    setIndicator();
}
function getMultiplier(value){
    if (value == 10){
        return 0.1;
    }else if (value == 11) {
        return 0.01;
    } else {
        return Math.pow(10,value);
    }
}
function getBaseOhm(){
    let [stripe1,stripe2, stripe3, multiplier, tolerance] = OHM;
    if (MODE == 3){
        return [((stripe1*10) + stripe2),getMultiplier(stripe3)];
    } else {
        return [(((stripe1*10) + stripe2)*10+stripe3),getMultiplier(multiplier)];
    }
}

function answer(){
    var [baseOhm,multiplier] = getBaseOhm();
    var ohmvalue = baseOhm * multiplier;
    ohmvalue = Math.round((ohmvalue + Number.EPSILON) * 100) / 100
    if (ohmvalue>=1000000000){
        var placeholder = String(ohmvalue/1000000000)+"GΩ";
    }else if (ohmvalue>=1000000){
        var placeholder = String(ohmvalue/1000000)+"MΩ";
    }else if (ohmvalue>=1000){
        var placeholder = String(ohmvalue/1000)+"KΩ";
    }else{
        var placeholder = String(ohmvalue)+"Ω";
    }
    document.getElementById('info').innerHTML=placeholder +' ±'+getTolerance()+"%";
}

function getTolerance(){
    let tolerance = OHM[4];
    let tole_value=[0,1.0,2.0,0.05,0.02,0.5,0.25,0.1,0.01,0,5,10,20];
    if (tolerance==9){
        return "";
    }else{
        return String(tole_value[tolerance]);
    }
}

function toggle(){
    if (MODE == 4){
        document.getElementById('res-stripe4').style.visibility='hidden';
        MODE=3;
    }else {
        document.getElementById('res-stripe4').style.visibility='visible';
        MODE=4;
    }
}
let prev_color = '';
function colorclick(number){
    var color=colors[number];
    if (prev_color=="stripe1"){
        changeColor('res-stripe1',color);
        OHM[0]=number;
    }else if (prev_color=="stripe2"){
        changeColor('res-stripe2',color);
        OHM[1]=number;
    }else if (prev_color=="stripe3"){
        changeColor('res-stripe3',color);
        OHM[2]=number;
    }else if (prev_color=="stripe4"){
        changeColor('res-stripe4',color);
        OHM[3]=number;
    }else if (prev_color=="stripe5"){
        changeColor('res-stripe5',color);
        OHM[4]=number;
    }
    document.getElementById('popup').style.visibility='hidden';
    document.getElementById('hide').style.visibility="hidden";
    document.getElementById('hide2').style.visibility="hidden";
    prev_color='';
    setIndicator();
}
function popupfn(value){
    if (value === prev_color){
        document.getElementById('popup').style.visibility='hidden';
        document.getElementById('hide').style.visibility="hidden";
        document.getElementById('hide2').style.visibility="hidden";
        prev_color='';
    }else if (value==="stripe1"){
        prev_color="stripe1";
        document.getElementById('hide').style.visibility="hidden";
        document.getElementById('hide2').style.visibility="hidden";
        document.getElementById('popup').style.gridTemplateColumns ='repeat(12,1fr)';
        document.getElementById('popup').style.visibility='visible';
    }else if (value==="stripe2"){
        prev_color="stripe2";
        document.getElementById('hide').style.visibility="hidden";
        document.getElementById('hide2').style.visibility="hidden";
        document.getElementById('popup').style.gridTemplateColumns ='repeat(12,1fr)';
        document.getElementById('popup').style.visibility='visible';
    }else if (value==="stripe3"){
        prev_color="stripe3";
        if (MODE==3){
            document.getElementById('hide').style.visibility="visible";
            document.getElementById('hide2').style.visibility="visible";
            document.getElementById('popup').style.gridTemplateColumns ='repeat(12,1fr)';
            document.getElementById('popup').style.visibility='visible';
        }else{
            document.getElementById('hide').style.visibility="hidden";
            document.getElementById('hide2').style.visibility="hidden";
            document.getElementById('popup').style.gridTemplateColumns ='repeat(12,1fr)';
            document.getElementById('popup').style.visibility='visible';
        }
    }else if (value==="stripe4"){
        prev_color="stripe4";
        document.getElementById('hide').style.visibility="visible";
        document.getElementById('hide2').style.visibility="visible";
        document.getElementById('popup').style.gridTemplateColumns ='repeat(12,1fr)';
        document.getElementById('popup').style.visibility='visible';
    }else if (value==="stripe5"){
        prev_color="stripe5";
        document.getElementById('hide').style.visibility="visible";
        document.getElementById('hide2').style.visibility="visible";
        document.getElementById('popup').style.gridTemplateColumns ='repeat(12,1fr)';
        document.getElementById('popup').style.visibility='visible';
    }
}
let current_mode = "day"
function night(){
    if (current_mode==="day"){
        document.getElementById('night').innerHTML="Day";
        document.documentElement.style.setProperty('--body-color', '#223');
        document.documentElement.style.setProperty('--font-color', '#838928');
        document.documentElement.style.setProperty('--control-color', '#123');
        document.documentElement.style.setProperty('--bottom-border', '#334');
        current_mode='night'
    }else{
        document.getElementById('night').innerHTML="Night";
        document.documentElement.style.setProperty('--body-color', '#f3f2f2');
        document.documentElement.style.setProperty('--font-color', '#235');
        document.documentElement.style.setProperty('--control-color', '#f8f7f7');
        document.documentElement.style.setProperty('--bottom-border', '#ccd');
        current_mode='day'
    }
}