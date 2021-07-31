var fetch = require('node-fetch')

_takePhoto = async() => {


    let pointAddress = [
        [24.988076, 121.547923], //管院
        [25.034768, 121.521797], //中正紀念堂
        [25.040347, 121.560254], //國父紀念館
        [24.998666, 121.581094], //木柵動物園
        [25.004810, 121.538040], //三角冰
        [25.004710, 121.538378], //咖啡廳
    ]

    let userAddressInfo = [0, 0, 0, 0, 0, 0]
    for (var i = 0; i <= pointAddress.length - 1; i++) {
        const getCertainPointUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=25.0056622,121.5378398&destination=` + pointAddress[i].toString() + `&key=AIzaSyA6aaKBA92hNkTGwdJGEs1QAIbjGoixmQI`;

        const getCertainPoint = await fetch(getCertainPointUrl);
        const getCertainPointJson = await getCertainPoint.json();
        const getCertainPointJsonRoutes = getCertainPointJson.routes[0];
        const getCertainPointJsonRoutesTime = getCertainPointJsonRoutes.legs[0];
        const getCertainPointJsonDistance = getCertainPointJsonRoutesTime.distance.value;
        console.log(getCertainPointJsonDistance)
        console.log(getCertainPointUrl)
        if (getCertainPointJsonDistance < 350) {
            userAddressInfo[i] = 1;
            console.log(userAddressInfo)
        }
        // console.log(pointAddress[0].toString())
    }
}

_takePhoto()