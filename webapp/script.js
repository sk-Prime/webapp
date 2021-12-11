function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function changeColor(){
    let mode = getCookie("mode");
    if (mode === "False" || mode === "day"){
        document.documentElement.style.setProperty('--blue', '#334');
        document.documentElement.style.setProperty('--grey', '#eee');
        document.documentElement.style.setProperty('--text-color', '#5a5963');
        document.documentElement.style.setProperty('--border', '#ccd');
        document.getElementById("button").innerHTML="Night";
    }
    else{
        document.documentElement.style.setProperty('--blue', '#889');
        document.documentElement.style.setProperty('--grey', '#223');
        document.documentElement.style.setProperty('--text-color', '#aab');
        document.documentElement.style.setProperty('--border', '#445');
        document.getElementById("button").innerHTML="Day";
    }
}

function toggle(){
    let mode = getCookie("mode");
    if (mode === "" || mode === "day"){
        setCookie("mode","night");
    }
    else{
        setCookie("mode","day");
    }
    changeColor();
}