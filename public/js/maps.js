(()=>{mapboxgl.accessToken="pk.eyJ1IjoiZWp2YXV4IiwiYSI6ImNsMGJ1aWMyNDA1MWkzaW1sb3h1dDl0am8ifQ.dMmwpREWdseAu2EET3v0AQ";var o=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[120.97533812288953,14.580732950639742],zoom:9}),e=new MapboxGeocoder({accessToken:mapboxgl.accessToken,marker:{color:"green"},mapboxgl});o.addControl(e),o.on("style.load",(function(){o.on("click",(function(e){var a;console.log("click"),a=e.lngLat,console.log("test: "+a),$.ajax({url:"//api.openweathermap.org/data/2.5/weather",type:"get",data:{lat:a.lat,lon:a.lng,appid:"b3d00e2235a7284d22ad58a39dec80fe",mode:"html"},success:function(e){console.log(e),(new mapboxgl.Popup).setLngLat(a).setHTML(e).addTo(o)}})}))})),o.on("load",(function(){console.log("A load event occurred."),Swal.fire({icon:"info",title:"Click on a location to view its current weather forecast"})}))})();