function change(){
    var img=document.getElementById("bulb");

    if(img.src.match("on"))
    {
        img.src="asset/bulb off.jpg";
    }
    else{
        img.src="asset/bulb on.jpg";
    }
}