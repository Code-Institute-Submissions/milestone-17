/* global google */
        
        // global variable definitions
        var mapOptions;
        var map;
        var infoWindow;
        var mapMarkers = [];

        function initMap() { // called by Google map and runs on startup
            // define map
            defineMap();

            // get marker Data
            var markerData = defineMarkerData();

            // add markers
            addMarkers(markerData);

            // add button event handlers
            addEventHandlers();

            // add text / submit event handlers
            addTextEventHandlers();
        }



        function defineMap() {
            mapOptions = {
                center: new google.maps.LatLng(51.508034, -0.126798),
                zoom: 11
            }

            // New Map
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            // New Empty Info Window So only one window can open at a time---------------------------------------------
            infoWindow = new google.maps.InfoWindow({});
        }


        function addMarkers(markerData) {
            // Loop through marker objects and create markers----------------------------
            for (var i = 0; i < markerData.length; i++) {
                var newMarker = createMarker(markerData[i]);
                mapMarkers.push(newMarker);
            }
        }


        // Create Marker---------------------------------------------
        function createMarker(markerData) {
            var marker = new google.maps.Marker({
                map: map,
                position: markerData.coordinates,
                area: markerData.area,
                type: markerData.type,
                names: markerData.names
            });

            // Spot Name Set & Open Info Window ClickEvent-----------------------------------------------

            if (markerData.content) {
                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                    infoWindow.setContent(markerData.content);
                });
            }

            return marker;
        }


        function addEventHandlers() {
            // Buttons---------------------------------------------------
            document.getElementById("central").addEventListener("click", function() { selectByArea('central') });
            document.getElementById("north").addEventListener("click", function() { selectByArea('north') });
            document.getElementById("east").addEventListener("click", function() { selectByArea('east') });
            document.getElementById("south").addEventListener("click", function() { selectByArea('south') });
            document.getElementById("west").addEventListener("click", function() { selectByArea('west') });
            document.getElementById("reset").addEventListener("click", function() { selectAllMarkers() });
            document.getElementById("park").addEventListener("click", function() { selectByType('park') });
            document.getElementById("street").addEventListener("click", function() { selectByType('street') });
        }

        function selectAllMarkers() {
            for (var i = 0; i < mapMarkers.length; i++) {
                var marker = mapMarkers[i];
                marker.setMap(map);
            }
        }

        function selectByArea(areaName) {
            for (var i = 0; i < mapMarkers.length; i++) {
                var marker = mapMarkers[i];
                if (marker.area === areaName) {
                    marker.setMap(map);
                }
                else {
                    marker.setMap(null);
                }
            }
        }

        function selectByType(areaType) {
            for (var i = 0; i < mapMarkers.length; i++) {
                var marker = mapMarkers[i];
                if (marker.type === areaType) {
                    marker.setMap(map);
                }
                else {
                    marker.setMap(null);
                }
            }
        }

        function addTextEventHandlers() {
            document.getElementById("submit").addEventListener("click", onSubmit);

            document.getElementById("spot").addEventListener('keyup', function(k) {
                if (k.keyCode === 13) {
                    onSubmit();
                }
            });

            document.getElementById("resetForm").addEventListener("click", selectAllMarkers);
        }


        function onSubmit() {

            var spotName = document.getElementById("spot").value;

            if (!spotName) {
                selectAllMarkers();
            }
            else {
                spotName = spotName.toLowerCase().trim();
                var isSpotFound = false;

                for (var i = 0; i < mapMarkers.length; i++) {
                    var marker = mapMarkers[i];
                     if (marker.names && marker.names.find(function(name) { return name === spotName; })) {
                        marker.setMap(map);
                        isSpotFound = true;
                    }
                    else {
                        marker.setMap(null);
                    }
                }

                if (!isSpotFound) {
                    selectAllMarkers();
                }
            };
        }

        function defineMarkerData() {

            return [{
                    coordinates: { lat: 51.506852, lng: -0.116627 },
                    content: '<h3>Southbank</h3>',
                    names: ['southbank'],
                    area: 'central',
                    type: 'street'

                },
                {
                    coordinates: { lat: 51.520780, lng: -0.205026 },
                    content: '<h3>BaySixty6</h3>',
                    names: ['baysixty6', 'bay 66', 'bay', 'bay66'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.506513, lng: -0.088138 },
                    content: '<h3>London Bridge 10</h3>',
                    names: ['london bridge 10', 'central'],
                    area: 'central',
                    type: 'street'

                },
                {
                    coordinates: { lat: 51.411380, lng: -0.313468 },
                    content: '<h3>Kingston Skatepark</h3>',
                    names: ['kingston', 'kingston skatepark'],
                    area: 'west',
                    type: 'park'

                },
                {
                    coordinates: { lat: 51.457279, lng: -0.355880 },
                    content: '<h3>Murray Skatepark</h3>',
                    names: ['murray', 'murray skatepark'],
                    area: 'west',
                    type: 'park'

                },
                {
                    coordinates: { lat: 51.460933, lng: -0.143693 },
                    content: '<h3>Clapham Common Skatepark</h3>',
                    names: ['clapham common skatepark', 'clapham common'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.458066, lng: -0.056977 },
                    content: '<h3>Peckham Rye Skatepark</h3>',
                    names: ['peckham rye skatepark', 'peckham rye'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.529521, lng: -0.330011 },
                    content: '<h3>Ealing Skatepark</h3>',
                    names: ['ealing skatepark', 'ealing'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.513242, lng: -0.097139 },
                    content: "<h3>St Pauls Festival Gardens</h3>",
                    names: ['st pauls festival gardens', 'st pauls'],
                    area: 'central',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.512501, lng: -0.097593 },
                    content: '<h3>St Pauls 3 Set</h3>',
                    names: ['st pauls 3 set', 'st pauls'],
                    area: 'central',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.512665, lng: -0.098294 },
                    content: '<h3>Knightrider Stairs</h3>',
                    names: ['knightrider stairs', 'knightrider'],
                    area: 'central',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.538274, lng: -0.034833 },
                    content: '<h3>Victoria Park Skatepark</h3>',
                    names: ['victoria park skatepark', 'victoria park'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.546679, lng: -0.133186 },
                    content: '<h3>Cantelowes Skatepark</h3>',
                    names: ['cantelowes skatepark', 'cantelowes'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.502263, lng: -0.080481 },
                    content: '<h3>Whitegrounds Skatepark</h3>',
                    names: ['whitegrounds skatepark', 'whitegrounds'],
                    area: 'central',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.466092, lng: -0.116342 },
                    content: '<h3>Stockwell Skatepark</h3>',
                    names: ['stockwell skatepark', 'stockwell'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.522693, lng: -0.202882 },
                    content: '<h3>Meanwhile Bowl</h3>',
                    names: ['meanwhile bowl', 'meanwhile'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.520021, lng: -0.191735 },
                    content: '<h3>Royal Oak Skatepark</h3>',
                    names: ['royal oak skatepark', 'royal oak'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.517470, lng: -0.031643 },
                    content: '<h3>Mile End Skatepark</h3>',
                    names: ['mile end skatepark', 'mile end'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.527929, lng: -0.131549 },
                    content: '<h3>Euston Bank</h3>',
                    names: ['euston bank', 'euston'],
                    area: 'central',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.527299, lng: -0.132221 },
                    content: '<h3>Euston Brick Banks</h3>',
                    names: ['euston brick banks', 'euston'],
                    area: 'central',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.425754, lng: -0.093675 },
                    content: '<h3>Bloblands Skatepark</h3>',
                    names: ['bloblands skatepark', 'bloblands'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.455733, lng: -0.190459 },
                    content: '<h3>Kimber Skatepark</h3>',
                    names: ['kimber skatepark', 'kimber'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.562268, lng: -0.085033 },
                    content: '<h3>Clissold Park Skatepark</h3>',
                    name: 'clissold park skatepark',
                    names: ['clissold park skatepark', 'clissold park'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.567501, lng: -0.104705 },
                    content: '<h3>Finsbury Park Skatepark</h3>',
                    names: ['finsbury park skatepark', 'finsbury park'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.510540, lng: -0.000417 },
                    content: '<h3>Zebra Ledge</h3>',
                    names: ['zebra ledge'],
                    area: 'east',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.510503, lng: -0.003151 },
                    content: '<h3> East India Ledges</h3>',
                    names: ['east india ledges', 'east india'],
                    area: 'east',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.508031, lng: -0.008035 },
                    content: '<h3>Black Wall Banks</h3>',
                    names: ['black wall banks'],
                    area: 'east',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.490129, lng: -0.022728 },
                    content: '<h3>Mudchute Skatepark</h3>',
                    names: ['mudchute skatepark', 'mudchute'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.452072, lng: -0.113728 },
                    content: '<h3>Brixton Pink Hubba</h3>',
                    names: ['brixton pink hubba', 'brixton'],
                    area: 'south',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.485617, lng: -0.108536 },
                    content: '<h3>Kennington Bowl</h3>',
                    names: ['kennington bowl', 'kennington'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.421163, lng: -0.071196 },
                    content: '<h3>118 Banks</h3>',
                    names: ['118 banks'],
                    area: 'south',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.552764, lng: -0.036070 },
                    content: '<h3>Hackney Bumps</h3>',
                    names: ['hackney bumps', 'hackney'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.552764, lng: -0.036070 },
                    content: '<h3>Hackney Playground</h3>',
                    names: ['hackney playground', 'hackney'],
                    area: 'east',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.538216, lng: -0.060315 },
                    content: '<h3>London Fields</h3>',
                    names: ['london fields'],
                    area: 'east',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.487672, lng: 0.025399 },
                    content: '<h3>Bank to Ledge</h3>',
                    names: ['bank to ledge'],
                    area: 'east',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.517269, lng: -0.070746 },
                    content: '<h3>Brick Lane Manual Pad</h3>',
                    names: ['brick lane manual pad', 'brick lane'],
                    area: 'east',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.539387, lng: -0.439413 },
                    content: '<h3>Pole Hill Skatepark</h3>',
                    names: ['pole hill skatepark', 'pole hill'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.460609, lng: -0.428272 },
                    content: '<h3>Bedfont Skatepark</h3>',
                    names: ['bedfont skatepark', 'bedfont'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.471134, lng: -0.217669 },
                    content: '<h3>Bishops Park Bowl</h3>',
                    names: ['bishops park bowl', 'bishops park'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.546225, lng: -0.270894 },
                    content: '<h3>Harrow Skatepark</h3>',
                    names: ['harrow skatepark', 'harrow'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.574166, lng: 0.105215 },
                    content: '<h3>Newbury Skatepark</h3>',
                    names: ['newbury skatepark', 'newbury'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.533537, lng: 0.121775 },
                    content: '<h3>Castle Green Skatepark</h3>',
                    names: ['castle green skatepark', 'castle green'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.557664, lng: 0.188379 },
                    content: '<h3>Romford Skatepark</h3>',
                    names: ['romford skatepark', 'romford'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.603745, lng: 0.114585 },
                    content: '<h3>Hainault Skatepark</h3>',
                    names: ['hainault skatepark', 'hainault'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.558002, lng: 0.015166 },
                    content: '<h3>Leytonstone Skatepark</h3>',
                    names: ['leytonstone skatepark', 'leytonstone'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.594771, lng: -0.021089 },
                    content: '<h3>Walthamstow Skatepark</h3>',
                    names: ['walthamstow skatepark', 'walthamstow'],
                    area: 'east',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.594771, lng: -0.021089 },
                    content: '<h3>Tottenham Skatepark</h3>',
                    names: ['tottenham skatepark', 'tottenham'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.595626, lng: -0.130839 },
                    content: '<h3>Alexandra Palace Skatepark</h3>',
                    names: ['alexandra palace skatepark', 'alexandra palace'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.618751, lng: -0.162821 },
                    content: '<h3>Friary Park Skatepark</h3>',
                    names: ['friary skatepark', 'friary'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.702304, lng: -0.206276 },
                    content: '<h3>Potters Bar Skatepark</h3>',
                    names: ['potters bar skatepark', 'potters bar'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.441589, lng: -0.090383 },
                    content: '<h3>Belair skatepark</h3>',
                    names: ['Belair Skatepark', 'belair'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.402569, lng: -0.132355 },
                    content: '<h3>Pollards Hill Skatepark</h3>',
                    names: ['pollards hill skatepark', 'pollards hill'],
                    area: 'south',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.418300, lng: -0.419519 },
                    content: '<h3>Sunbury Skatepark</h3>',
                    names: ['sunbury skatepark', 'sunbury'],
                    area: 'west',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.411454, lng: -0.307887 },
                    content: '<h3>John Lewis 3</h3>',
                    names: ['john lewis 3', 'kingston'],
                    area: 'west',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.460159, lng: -0.301515 },
                    content: '<h3>Richmond Quarter-Pipe</h3>',
                    names: ['richmond quarter-pipe', 'richmond quarter'],
                    area: 'west',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.561757, lng: -0.130333 },
                    content: '<h3>Whittington Park Skatepark</h3>',
                    names: ['whittington park skatepark', 'whittington park'],
                    area: 'north',
                    type: 'park'
                },
                {
                    coordinates: { lat: 51.605266, lng: -0.212087 },
                    content: '<h3>Mill Hill Bank</h3>',
                    names: ['mill hill bank', 'mill hill'],
                    area: 'north',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.614788, lng: -0.254969 },
                    content: '<h3>Edgware Rail</h3>',
                    names: ['edgware rail', 'edgware'],
                    area: 'north',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.576453, lng: -0.220650 },
                    content: '<h3>Brent Cross Ledge</h3>',
                    names: ['brent cross ledge', 'brent cross'],
                    area: 'north',
                    type: 'street'
                },
                {
                    coordinates: { lat: 51.585107, lng: -0.281866 },
                    content: '<h3>Kingsbury stairs</h3>',
                    names: ['kingsbury stairs', 'kingsbury'],
                    area: 'north',
                    type: 'street'
                }
            ];
        }