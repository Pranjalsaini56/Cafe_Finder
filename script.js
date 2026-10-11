let map; //let allows us to create a variable whose value can change.
//const used as we don't planning to reassign thses variables to different elements
const locationInput=document.getElementById("inputlocation");
const searchButton = document.getElementById("searchButton");
const result=document.getElementById("result");
searchButton.addEventListener("click",searchCafe);
function searchCafe(){
    const location=locationInput.value.trim();
    if(location ===""){
        alert("Please enter a location");
        return;
    }
    result.innerHTML="<h2>Searching for cafes...<\h2>";
    console.log(location);
}
function initMap(){ //its task is to create our map.
    map=L.map("map").setView([34.0837,74.7973],13) //L=The Leaflet library map("map")=Creates a map inside the HTML element whose ID is "map" setView()=Sets the map's initial location([latitude,longitude],initial zoom)
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(map);//A map needs map images, called tiles, to display streets, buildings, and other geographical features.The URL tells Leaflet where to get the map tiles.{z}, {x}, and {y} are placeholders used to request the appropriate tiles for the current zoom level and map position.attribution credits OpenStreetMap..addTo(map) adds the tile layer to our map.
}
initMap();