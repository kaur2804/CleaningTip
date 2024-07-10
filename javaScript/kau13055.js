 var rowID;
 var Fall2023Array = new Array();
 var cleanerArray=new Array();
 var jsondata;

 function createMain()
{
     fetch(`./JSON/A1-JSON.json`)
	.then(res => res.json())
	.then(data => {
        jsondata=data;
		 console.log(data)
        loadPage(data);
        viewImage(data);
       
        
         
     });
     
     
}


function loadPage(data)
{
   
     document.querySelector("header").innerHTML = `<h2>Fall 2023 / Assignment #1 ${data.Fall2023.formalName}</h2> `;
     const section2 = document.querySelector('#section2'); // Use querySelector to select by ID

                // Extract personal information from JSON
                const personalInfo = data.Fall2023;
                const personalInformation = `  <strong>
                    <h2 id="name"> My Name: <u>${personalInfo.formalName}</u></h2>
                    <div id="info">
                    <p> My Student Number: <br> <u>${personalInfo.collegeID}</u></p>
                    <p> My Sheridan Login:  <u>${personalInfo.collegeLogin}</u></p>
                    <p> My Sheridan Program:  <u>${personalInfo.collegeProgram}</u></p>
                    <p> My Sheridan Campus: <u> ${personalInfo.collegeCampus}</u></p></strong></div>
                `;

                section2.innerHTML=personalInformation;
}




function rotate(){
    const pic =document.querySelector('#pic');
    pic.classList.add('kau13055');
}
function removeRotate(){
    const pic =document.querySelector('#pic');
    pic.classList.remove('kau13055');
}

function viewImage(data){
 
const profilePic = document.querySelector('#pic').setAttribute('src',data.Fall2023.formalPic);

}
 
   
function save(data) {
        localStorage.setItem("jsondata", JSON.stringify(data));
        jsondata=data;
        console.log(jsondata);  
}

function saveAndRedirect()
{        save(jsondata);
        redirect();
}
function redirect(){
    window.location.href ="./pages/secondPage.html";
}
    
 
function findIndex(index) {
    localStorage.setItem("rowId", index);
}



 
 
 