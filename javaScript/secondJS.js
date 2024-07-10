var jsonData;
var cleanerArray = [];
var rowId;

class CleanerArray {
    constructor(name, components, direction, cautions, pic) {
        this.name = name;
        this.components = components;
        this.direction = direction;
        this.cautions = cautions;
        this.pic = pic;
    }
}

  function loadPage2() {
    jsonData = JSON.parse(localStorage.getItem("jsondata"));
    rowId = localStorage.getItem("rowId");
    
    console.log(jsonData);
 
 
    document.querySelector("#info").innerHTML =
        ` Fall 2023 / Assignment #1 / Cleaning Tips <br> <i><u>Click buttons below for Reference Links</u></i> <br>`;

    document.querySelector("#link1").setAttribute("href", jsonData.citeReferenceRecipes);
    document.querySelector("#link2").setAttribute("href", jsonData.citeReferenceImages);

    document.querySelector("#cleanerName").innerHTML = "";
    for (let [index, value] of jsonData.cleaners.entries()) {
        cleanerArray.push(new CleanerArray(value.cleanerName, value.components, value.directions, value.caution, value.imgPic));

        document.querySelector("#cleanerName").innerHTML +=
            `
            <li>
                <button id ="index" onclick='findIndex(${index})'>${value.cleanerName}</button> 
            </li>
        `;
    }
}



function displayPlanets(examdata) {
    const planetNamesContainer = document.querySelector("#planetNames");
    planetNamesContainer.innerHTML = ''; // Clear the existing content

    for (let planet of examdata.planetary.collection) {
        planetNamesContainer.innerHTML += `
            <p>${planet.nameOfPlanet}</p>
        `;
    }
}

function displayCleanerData(index) {
    const cleaner = jsonData.cleaners[index];

    const cleanerInfo = document.querySelector("#outputArea");
    cleanerInfo.innerHTML = ` 
   <div id="image"> <img src="../images/${cleaner.imgPic}" alt="${cleaner.cleanerName}" id="cleanerImage"> <h4> <u><i>ALL PURPOSE SCENTED</i></u></h4></div>
            <ul class="info-list">
                <li><strong>Components:</strong></li>
                <ul class="component-list">
                    ${componentList(cleaner.components)}
                </ul><br>
                <li><strong>Directions:</strong> ${cleaner.directions}</li><br>
                <li><strong>Cautions:</strong> ${cleaner.caution}</li>
            </ul>
      
    `;
}
function componentList(components) {
    let componentListHTML = '';
    for (const component of components) {
        componentListHTML += `<li>${component}</li>`;
    }
    return componentListHTML;
}


function findIndex(index) {
    localStorage.setItem("rowId", index);
    displayCleanerData(index);
}

function goToIndex() {
    
    location.assign("../index.html");  
}
