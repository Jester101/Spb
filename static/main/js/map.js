 var mymap = L.map('mapid').setView([59.946573, 30.329109], 15);

var images = ["/media/DvorSq.jpg","/media/Hermitage.jpg","/media/PiterHouse.jpg",
             "/media/Kunstkamera.jpg","/media/Garden.jpg","/media/Petropavl.jpg",
             "/media/Museum.jpg", "/media/botanical-garden.jpg","/media/t_zoomuseum.png",
             "/media/393492.jpg", "/media/341454.jpg", "/media/Aurora_Cruiser_Museum.jpg"];
var names = ["Дворцовая площадь","Эрмитаж","Домик Петра I", "Кунскамера","Летний сад","Петропавловская крепость",
            "Музей обороны Ленинграда", "Ботанический сад", "Зоологический музей",
            "Военно-исторический музей артиллерии, инженерных войск и войск связи ","Этнографический музей",
            "Крейсер Аврора"];

var pop_up_container = "";


function create_container(index) {
    pop_up_container = `<h4>`+names[index]+`</h4>`;
    pop_up_container += `<img src="` +images[index] +`" class="responsive" style="max-width: 100%; max-height: 80%">`;
}

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    var Icon0 = L.icon({

        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var Icon1 = L.icon({

  iconUrl: '/media/Hermitage.jpg',

        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var Icon2 = L.icon({

  iconUrl: '/media/PiterHouse.jpg',

        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var Icon3 = L.icon({

  iconUrl: '/media/Kunstkamera.jpg',

        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var Icon4 = L.icon({

  iconUrl: '/media/Garden.jpg',

        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var Icon5 = L.icon({

  iconUrl: '/media/Petropavl.jpg',

        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var Icon6 = L.icon({

  iconUrl: '/media/Museum.jpg',

        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var Icon7 = L.icon({

        iconUrl:       '/media/botanical-garden.jpg',
        iconSize:     [60, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

    });

    var marker0 = L.marker([59.938895, 30.315892]);
    marker0.on('click', function (e) {
        document.location.href = '/info/1';
    });

    var marker1 = L.marker([59.940454, 30.313414]);
    marker1.on('click', function (e) {
        document.location.href = '/info/2';
    });

    var marker2 = L.marker([59.953218, 30.330971]);
    marker2.on('click', function (e) {
        document.location.href = '/info/3';
    });

    var marker3 = L.marker([59.941462, 30.304415]);
    marker3.on('click', function (e) {
        document.location.href = '/info/4';
    });

    var marker4 = L.marker([59.945126, 30.333916]);
    marker4.on('click', function (e) {
        document.location.href = '/info/5';
    });
    var marker5 = L.marker([59.949481, 30.316742]);
    marker5.on('click', function (e) {
        document.location.href = '/info/6';
    });
    var marker6 = L.marker([59.944283, 30.340848]);
    marker6.on('click', function (e) {
        document.location.href = '/info/7';
    });

    var marker7 = L.marker([59.971243, 30.323412])
        .on('click', (event) => {
           document.location.href= '/info/8';
        });

    var marker8 = L.marker([59.941706, 30.304865])
        .on('click', (event) => {
            document.location.href= '/info/9';
        });

    var marker9 = L.marker([59.954584, 30.313424])
        .on('click', (event) => {
            document.location.href= '/info/10';
        });

    var marker10 = L.marker([59.937689, 30.334723])
        .on('click', (event) => {
            document.location.href= '/info/11';
        });

    var marker11 = L.marker([59.955342, 30.337955])
        .on('click', (event) => {
            document.location.href= '/info/12';
        });

    marker0.on("mouseover",(eventObject) => {
        create_container(0);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });
    marker1.on("mouseover",(eventObject) => {
        create_container(1);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });
    marker2.on("mouseover",(eventObject) => {
        create_container(2);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });
    marker3.on("mouseover",(eventObject) => {
        create_container(3);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });
    marker4.on("mouseover",(eventObject) => {
        create_container(4);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5,
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });
    marker5.on("mouseover",(eventObject) => {
        create_container(5);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });
    marker6.on("mouseover",(eventObject) => {
        create_container(6);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });

      marker7.on("mouseover",(eventObject) => {
        create_container(7);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });

      marker8.on("mouseover",(eventObject) => {
        create_container(8);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });

      marker9.on("mouseover",(eventObject) => {
        create_container(9);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });

      marker10.on("mouseover",(eventObject) => {
        create_container(10);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });

      marker11.on("mouseover",(eventObject) => {
        create_container(11);
        console.log("hover");
        var e = window.event;
        $("#tooltip").html(pop_up_container).css({
            "top": e.clientY + 5,
            "left": e.clientX + 5
        })
            .show();
    }).on("mouseout",() => {
        $("#tooltip").hide()
            .html("")
            .css({
                "top":0,
                "left":0
            })
    });

    marker0.addTo(mymap);
    marker1.addTo(mymap);
    marker2.addTo(mymap);
    marker3.addTo(mymap);
    marker4.addTo(mymap);
    marker5.addTo(mymap);
    marker6.addTo(mymap);
    marker7.addTo(mymap);
    marker8.addTo(mymap);
    marker9.addTo(mymap);
    marker10.addTo(mymap);
    marker11.addTo(mymap);