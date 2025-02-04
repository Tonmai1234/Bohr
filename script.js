function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: { lat: 13.736717, lng: 100.523186 },
    });
    const contentStringKimleng =
    '<center><h1>แม่กิมลั้ง สาขาฝั่งล่องใต้</h1></center>' +
    '<h3>ลายละเอียด</h3>' +
    '<div style="font-size: 12px;">- ร้านซื้อของฝาก</div>' +
    '<div style="font-size: 12px;">- ที่จอดรถสะดวก</div>' +
    '<div style="font-size: 16px; font-weight: 500;">ร้านค้าของฝาก</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<div style="font-size: 16px; font-weight: 500;">ห้องน้ำ</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<center><img src="Kimleng.jpg" style="width: 300px; height: 200px; margin-top: 20px;"></center>' +
    '<center><button type="button" style="border-radius: 15px; border: none; background-color: black; color: white; padding: 5px 30px; cursor: pointer;" onclick="function formatTime(number) {return number < 10 ? `0` + number : number;} let now = new Date(); let hours = formatTime(now.getHours()); let minutes = formatTime(now.getMinutes()); let seconds = formatTime(now.getSeconds()); window.alert(`Arrived at ${hours}:${minutes}:${seconds}`)">ถึงที่หมาย</button></center>'
    ;

    const contentStringKasetsart =
    '<center><h1>Kasetsart University</h1></center>' +
    '<center><p>"a popular university"</p></center>' +
    '<center><img src="Kasetsart.jpg" style="width: 200px; height: 200px; margin-top: 20px;"></center>' +
    '<center><button type="button" style="border-radius: 15px; border: none; background-color: black; color: white; padding: 5px 30px; cursor: pointer;" onclick="function formatTime(number) {return number < 10 ? `0` + number : number;} let now = new Date(); let hours = formatTime(now.getHours()); let minutes = formatTime(now.getMinutes()); let seconds = formatTime(now.getSeconds()); window.alert(`Arrived at ${hours}:${minutes}:${seconds}`)">ถึงที่หมาย</button></center>'
    ;

    const contentStringPttRat =
    '<center><h1>ปตท.ราชบุรี-เพชรเกษม(ขาออก)</h1></center>' +
    '<h3>ลายละเอียด</h3>' +
    '<div style="font-size: 12px;">- ร้านกาแฟอเมซอน</div>' +
    '<div style="font-size: 12px;">- ร้านสะดวกซื้อ Jiffy</div>' +
    '<div style="font-size: 16px; font-weight: 500;">ร้านอาหาร</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<div style="font-size: 16px; font-weight: 500;">ห้องน้ำ</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<center><img src="PttRat.jpg" style="width: 300px; height: 200px; margin-top: 20px;"></center>' +
    '<center><button type="button" style="border-radius: 15px; border: none; background-color: black; color: white; padding: 5px 30px; cursor: pointer;" onclick="function formatTime(number) {return number < 10 ? `0` + number : number;} let now = new Date(); let hours = formatTime(now.getHours()); let minutes = formatTime(now.getMinutes()); let seconds = formatTime(now.getSeconds()); window.alert(`Arrived at ${hours}:${minutes}:${seconds}`)">ถึงที่หมาย</button></center>'
    ;

    const contentStringEV =
    '<center><h1>EA Anywhere สถานีชาร์จรถ <br> ซอยหัวหิน 94/3</h1></center>' +
    '<h3>ลายละเอียด</h3>' +
    '<div style="font-size: 12px;">- ห้องน้ำสะอาดมีโถนั่ง</div>' +
    '<div style="font-size: 12px;">- ที่จอดรถสะดวก</div>' +
    '<div style="font-size: 16px; font-weight: 500;">สถานีชาร์จรถ</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<div style="font-size: 16px; font-weight: 500;">ห้องน้ำ</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<center><img src="EV.jpg" style="width: 300px; height: 200px; margin-top: 20px;"></center>' +
    '<center><button type="button" style="border-radius: 15px; border: none; background-color: black; color: white; padding: 5px 30px; cursor: pointer;" onclick="function formatTime(number) {return number < 10 ? `0` + number : number;} let now = new Date(); let hours = formatTime(now.getHours()); let minutes = formatTime(now.getMinutes()); let seconds = formatTime(now.getSeconds()); window.alert(`Arrived at ${hours}:${minutes}:${seconds}`)">ถึงที่หมาย</button></center>'
    ;

    const contentStringPTTCharging =
    '<center><h1>PTT Charging Station สถานีชาร์จรถ</h1></center>' +
    '<h3>ลายละเอียด</h3>' +
    '<div style="font-size: 12px;">- ห้องน้ำสะอาดมีโถนั่ง</div>' +
    '<div style="font-size: 12px;">- ร้านอาหารเจียงลูกชิ้นปลา</div>' +
    '<div style="font-size: 16px; font-weight: 500;">สถานีชาร์จรถ</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<div style="font-size: 16px; font-weight: 500;">ห้องน้ำ</div>' +
    '<div><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"><img src="Star.png" style="width: 12px; height: 12px;"></div>' +
    '<center><img src="PTTCharging.jpg" style="width: 300px; height: 200px; margin-top: 20px;"></center>' +
    '<center><button type="button" style="border-radius: 15px; border: none; background-color: black; color: white; padding: 5px 30px; cursor: pointer;" onclick="function formatTime(number) {return number < 10 ? `0` + number : number;} let now = new Date(); let hours = formatTime(now.getHours()); let minutes = formatTime(now.getMinutes()); let seconds = formatTime(now.getSeconds()); window.alert(`Arrived at ${hours}:${minutes}:${seconds}`)">ถึงที่หมาย</button></center>'
    ;
    // Create an info window to share between markers.

    const infowindow = new google.maps.InfoWindow({
        content: contentStringKimleng,
        ariaLabel: "แม่กิมลั้ง สาขาฝั่งล่องใต้",
    });
    
    const infowindow2 = new google.maps.InfoWindow({
      content: contentStringKasetsart,
      ariaLabel: "Kasetsart University",
    });

    const infowindow3 = new google.maps.InfoWindow({
      content: contentStringPttRat,
      ariaLabel: "ปตท.ราชบุรี-เพชรเกษม(ขาออก)",
    });

    const infowindow4 = new google.maps.InfoWindow({
      content: contentStringEV,
      ariaLabel: "EA Anywhere สถานีชาร์จรถ ซอยหัวหิน 94/3",
    });

    const infowindow5 = new google.maps.InfoWindow({
      content: contentStringPTTCharging,
      ariaLabel: "PTT Charging Station สถานีชาร์จรถ",
    });


    const marker = new google.maps.Marker({
        position: { lat: 12.927260561692894,  lng: 99.90635573852367 },
        map,
        title: "แม่กิมลั้ง สาขาฝั่งล่องใต้",
    });

    const marker2 = new google.maps.Marker({
      position: { lat: 13.8479786, lng: 100.5722762 },
      map,
      title: "Kasetsart University",
    });
    
    const marker3 = new google.maps.Marker({
      position: { lat: 13.587504035488996, lng: 99.83088021012261 },
      map,
      title: "ปตท.ราชบุรี-เพชรเกษม(ขาออก)",
    });

    const marker4 = new google.maps.Marker({
      position: { lat: 12.551806,  lng: 99.961078 },
      map,
      title: "EA Anywhere สถานีชาร์จรถ ซอยหัวหิน 94/3",
    });

    const marker5 = new google.maps.Marker({
      position: { lat: 12.987540245312276,  lng: 99.900902035713 },
      map,
      title: "PTT Charging Station สถานีชาร์จรถ",
    });

    const historyList = document.getElementById('history-list');
    function logClick(title) {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        const listItem = document.createElement('li');
        listItem.textContent = `กำลังไปที่: ${title} เวลา: ${hours}:${minutes}:${seconds}`;
        historyList.appendChild(listItem);
    }
    
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
        logClick(marker.getTitle());
      });

      marker2.addListener("click", () => {
        infowindow2.open({
          anchor: marker2,
          map,
        });
        logClick(marker2.getTitle());
      });

      marker3.addListener("click", () => {
        infowindow3.open({
          anchor: marker3,
          map,
        });
        logClick(marker3.getTitle());
      });

      marker4.addListener("click", () => {
        infowindow4.open({
          anchor: marker4,
          map,
        });
        logClick(marker4.getTitle());
      });

      marker5.addListener("click", () => {
        infowindow5.open({
          anchor: marker5,
          map,
        });
        logClick(marker5.getTitle());
      });
  }
  
  window.initMap = initMap;