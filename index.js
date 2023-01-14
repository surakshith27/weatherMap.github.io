



async function fetchData() {
    const url = 'https://api.ipgeolocation.io/ipgeo?apiKey=3a4badad5b3440d89d6c85cb934a8b6b'
    const response = await fetch(url)

    const data = await response.json();

   const lat = data.latitude;
   const long = data.longitude;

   document.getElementById("getUserData").style.display = "none";
   document.getElementById("cordinates").style.display = "block";
   document.getElementById("lati").innerText = "Lat:"+lat;
   document.getElementById("long").innerText = "Long:"+long;
   var x = document.createElement("IFRAME");
   x.setAttribute("src", "https://maps.google.com/maps?q="+lat,long+"&z=15&output=embed");
   document.body.appendChild(x);



   console.log(lat,long)
}



//https://api.ipgeolocation.io/ipgeo?apiKey=3a4badad5b3440d89d6c85cb934a8b6b