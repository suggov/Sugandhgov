var open = true;

function expand(){
    if (open === true){
    document.getElementById("exp").style.height = "900px";
    open = false;
    }
    else{
        document.getElementById("exp").style.height = "500px";
        open=true;
    }


}



function expanddel(){
    if (open === true){
    document.getElementById("exp").style.height = "1000px";
    open = false;
    }
    else{
        document.getElementById("exp").style.height = "500px";
        open=true;
    }


}

function expandntt(){
    if (open === true){
    document.getElementById("exp").style.height = "1200px";
    open = false;
    }
    else{
        document.getElementById("exp").style.height = "500px";
        open=true;
    }


}

