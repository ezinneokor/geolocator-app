const imageBtn = document.querySelector(".image-btn");
const display = document.querySelector(".display");


imageBtn.addEventListener("click", findLocation)

 function findLocation(){
    navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(position){
    display.innerHTML = `
    Latitude: ${position.coords.latitude} <br>
    Longitude: ${position.coords.longitude}
    `;
}



// after getting the longitude and latitude, open this site https://www.gps-coordinates.net/ then input ur
//country name, the latitude u got and the longitude to know your exact location

//u can also use google api to get the exact location.

//https://imageresizer.com/color-picker