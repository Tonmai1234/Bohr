function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 13.736717, lng: 100.523186 },
    });
    const contentStringHorwang =
    '<center><h1>Horwang School</h1></center>' +
    '<center><p>"school for secondary grade students"</p></center>' +
    '<center><img src="Horwang.jpg" style="width: 200px; height: 200px; margin-top: 20px;"></center>'
    ;

    const contentStringKasetsart =
    '<center><h1>Kasetsart University</h1></center>' +
    '<center><p>"a popular university"</p></center>' +
    '<center><img src="Kasetsart.jpg" style="width: 200px; height: 200px; margin-top: 20px;"></center>'
    ;
    // Create an info window to share between markers.

    const infowindow = new google.maps.InfoWindow({
        content: contentStringHorwang,
        ariaLabel: "Horwang",
    });
    
    const infowindow2 = new google.maps.InfoWindow({
      content: contentStringKasetsart,
      ariaLabel: "Kasetsart University",
    });

    const marker = new google.maps.Marker({
        position: { lat: 13.8183179, lng: 100.5608473 },
        map,
        title: "Horwang",
    });

    const marker2 = new google.maps.Marker({
      position: { lat: 13.8479786, lng: 100.5722762 },
      map,
      title: "Kasetsart University",
    });
    
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });

      marker2.addListener("click", () => {
        infowindow2.open({
          anchor: marker2,
          map,
        });
      });
  }
  
  window.initMap = initMap;