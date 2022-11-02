
function myFunction(){
    var csere1 = document.getElementById("nev").value;
    document.getElementById("kerdojel1").innerHTML=csere1;

    var csere2 = document.getElementById("cim").value;
    document.getElementById("kerdojel2").innerHTML=csere2;

    var csere3 = document.getElementById("telefon").value;
    document.getElementById("kerdojel3").innerHTML=csere3;
}

function szinCsere(x){
    x.style.background = "rgb(108, 108, 254)";
}

function szinEltun(){
    var x = document.getElementById("cim");
    x.style = x.style.background = "white";
}