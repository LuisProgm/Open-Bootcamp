function initMap() {
    const posicion_1 = {
        lat: -13.1631412,
        lng: -72.5449629
    } 

    const posicion_2 = {
        lat: -20.1337772,
        lng: -67.4891345
    }

    const posicion_3 = {
        lat: -39.81422,
        lng: -73.24589
    }
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion_1
    });

    const marker = new google.maps.Marker({
        position: posicion_1,
        map,
        title: "Machu Pichu"
    })

    const marker_2 = new google.maps.Marker({
        position: posicion_2,
        map,
        title: "Salar de Uyuni"
    })

    const marker_3 = new google.maps.Marker({
        position: posicion_3,
        map,
        title: "Valdivia"
    })

}