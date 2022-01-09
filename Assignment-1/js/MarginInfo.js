//variable
var myName;
var myID;
var myLogin;
var myCampus;
var myProgram;
//function
$(document).ready(function() {

  console.log("in doc ready");
//get values
  myName = localStorage.getItem("myName");
  myID = localStorage.getItem("myID");
  myLogin = localStorage.getItem("mylogin");
  myCampus = localStorage.getItem("myCampus");
  myProgram = localStorage.getItem("myProgram");
//filling information in H tags
//value will show in webpage 
  $("h1").html(`MyName is ${myName}`).css("color", "Green").css("font-family", "Calibri");
  $("h2").html(`My Student ID is ${myID}`).css("color","yellow").css("font-weight", "bold");
  $("h3").html(`My Sheridan Login is ${myLogin}`).css("color", "white");
  $("h4").html(`My Sheridan Campus is ${myCampus}`).css("font-family", "Arial").css("font-style", "italic").css("color", "skyblue");
  $("h5").html(`My Sheridan Program is ${myProgram}`).css("color", "coral").css("text-transform", "lowercase").css("font-family", "Georgia");
});