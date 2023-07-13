// let myObj = {
//     name: `vishwa`,
//     id: 12,
//     age: 26,
//     color: `blue`,
//     hobby: undefined
// }
// // //console.log(myObj[`name`]);
// myObj.name = `shah`
// // //console.log(myObj)
// myObj.grade = `third`
// // //console.log(myObj)
// delete myObj.grade
// //console.log(myObj)


// function displayLookup(val) {
//     res = ``;

//     let myObj2 = {
//         name: `vishwa`,
//         id: 12,
//         age: 26,
//         color: `blue`,
//         hobby: undefined
//     }
//     res = myObj[val]
//     return res;
// }

// //console.log(displayLookup("color"))

// let myObj = {
//     myName: `v`,
//     age: 12,
//     grade: `second`,
//     color: `blue`
// }

// function testObject(checkProperty) {
//     if (myObj.hasOwnProperty(checkProperty)) {
//         return myObj[checkProperty];
//     }
//     else {
//         return "property not found"
//     }
//     return "change Me!"

// }
// //console.log(testObject("gender"))


// let myObj = [{
//     name: `s`,
//     age: 24,
//     gender: `female`,
//     artist: `deb`,
//     title: `art-life`,
//     release_year: 1995,
//     formats: [`cd`, `youtube`, `facebook`]
// }, {
//     name: `v`,
//     age: 14,
//     gender: `male`,
//     artist: `john`,
//     title: `music-life`,
//     release_year: 1991,
//     formats: [`cd`, `youtube`, `facebook`]
// }
// ];
// //console.log(myObj)


// let myStorage = {
//     car: {
//         inside: {
//             "glove box": "maps",
//             "passengers seat": "many"

//         },

//         outside: {
//             trunk: `jack`
//         }
//     }
// }

// let myContents = myStorage.car.outside[`trunk`];
// //console.log(myContents)

let myCollection = {
    "123": {
        "album": `my dance`,
        "artist": `john`,
        "tracks": [
            "Let it Rock",
            "You give it all"

        ]
    },
    "124": {
        "album": `my music`,
        "artist": `webb`,
        "tracks": [
            "Gone Gone Gone "

        ]
    },
    "125": {
        "album": `Trending`,
        "artist": `Alan Walker`,
        "tracks": [
            "Fade Away",
            "Light"

        ]
    }
}

let collectionCopy = JSON.parse(JSON.stringify(myCollection));

function updateRecords(id, prop, value) {

    if (value === "") {
        delete myCollection[id][prop];
    } else if (prop === "tracks") {
        myCollection[id][prop] = myCollection[id][prop] || [];
        myCollection[id][prop].push(value);

    } else {
        myCollection[id][prop] = value;

    }
    return myCollection;
}

//console.log(updateRecords(125, "artist", "light"));