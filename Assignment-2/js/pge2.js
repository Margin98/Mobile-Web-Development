var MyFirstName;
var myLast_Name;
var my_ID;
var my_Login;
var my_Home_Country;
var my_Program;
//array to holdf values 
var category = new Array();
var details = new Array();
var choice;

$(document).ready(function() {

   console.log("in doc ready");
   choice = localStorage.getItem("choice");
   //get arrays value 
   category = JSON.parse(localStorage.getItem("category_List"));;
   details = JSON.parse(localStorage.getItem("animal_Detail_List"));

   

  //get values 
  MyFirstName = localStorage.getItem("MyFirstName");
  myLast_Name = localStorage.getItem("myLast_Name");
  my_ID = localStorage.getItem("my_ID");
  my_Login = localStorage.getItem("my_Login");
  my_Program = localStorage.getItem("my_Program");
  my_Home_Country = localStorage.getItem("my_Home_Country");


  
 //header 
$("header").html(
  `<h4> Assignment-2 / ${MyFirstName} ${myLast_Name}/ ${my_ID} / ${my_Login}</h4>`);
 $("header").addClass("headerClass");
 
    //footer 
    $("footer").html
      (
       `<h5>My Sheridan Program:${my_Program}<br>
        My Home Country: ${my_Home_Country} <h5>
       `
      ); 


$("h3").html(`Animals from the ${category[choice].cattype} Category`)
          .css("color", "black")
          .css("text-align", "center");

         
//details 
for (let i=0; i < details.length; i++){

  if (category[choice].cattype === details[i].category){
  
    $(".list").append(`<b>Name: ${details[i].animal}</b>
                      with scientific name of <b>${details[i].scientific}</b>
                      has a basic colour range of: ${details[i]. colors}  <br>
                      <p><img src="${details[i].photoDepiction}" width="55"></img></p>`);     
}}
    $(".list").css("font-size","14px");
});