// alert("loading")
// --------------------------------------------------------------------------------------
function addNewWEField(){
    // console.log("Adding new field for work experience")

    

    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")


    
    



    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton")

    weOb.insertBefore(newNode,weAddButtonOb)

    

}



function addNewAQFiled(){
    // console.log("Adding new field")


    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("aqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")



    let aqOb=document.getElementById("aq")
    let aqAddButtonOb=document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode,aqAddButtonOb)
}

function addNewSKILLFiled(){
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("skillField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")



    let skillOb=document.getElementById("skill")
    let skillAddButtonOb=document.getElementById("skillAddButton")

    skillOb.insertBefore(newNode,skillAddButtonOb)
}

//generating CV

function generateCV(){
    console.log("generate")

    //name putting 

    let nameField=document.getElementById("nameField").value
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML="Name:"+nameField;

    // name putting 2

    document.getElementById("nameT2").innerHTML=nameField


    //contact
    
    // let contactField=document.getElementById("contactField").value
    // let contactT=document.getElementById('contactT')
    // contactT.innerHTML=contactField

    // -----------------shortcut-----------------

    document.getElementById("emailT").innerHTML="Email:"+document.getElementById("emailField").value

    document.getElementById("contactT").innerHTML="Contact:"+document.getElementById("contactField").value

    document.getElementById("genderT").innerHTML="Gender:"+document.getElementById("genderField").value

    document.getElementById("dobT").innerHTML="DOB:"+document.getElementById("dobField").value



    //address

    document.getElementById("addressT").innerHTML="Address:"+document.getElementById("addressField").value


    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value


    //going to set objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value


    // now we are going for work experience


    let wes=document.getElementsByClassName("weField")

    let str=''

    for(let e of wes){
        str=str+`<li> ${e.value} </li>`
    }
    document.getElementById("weT").innerHTML=str;


    // now we are going for academic qualification


    let aqs=document.getElementsByClassName("aqField")
    let str1='';

    for(let e of aqs){
        str1=str1+`<li> ${e.value} </li>`
    }
    document.getElementById("aqT").innerHTML=str1

    //now we are going for skills

    
    let skills=document.getElementsByClassName("skillField")
    let str2='';

    for(let e of skills){
        str2=str2+`<li> ${e.value} </li>`
    }
    document.getElementById("skillT").innerHTML=str2



    // ----------------------------------------------------------------------------


    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display="block"
    document.getElementById("print").style.display="block"


}


//printing cv

function printCV(){
    window.print()
}

