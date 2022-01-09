var myName;
var myID;
var myLogin;
var myCampus;
var myProgram;

var newTerm;
var newCourse;
var tArray = new Array();
var cArray = new Array();


class termProgData {
  constructor(termNumber, termName){
    this.termNumber = termNumber;
    this.termName = termName;
  }
}

class courseCodes{
  constructor(termNum, courseType, courseCode, imageName) {
    this.termNum = termNum;
    this.courseType = courseType;
    this.courseCode = courseCode;
    this.imageName = imageName;
  }
}


$(document).ready(function() {

  console.log("ready");
    //jason
  $.getJSON("pamargin_jason/A1-JSON.json", function(data) {
    localStorage.clear();
    let myInfo = data.AboutMe;
    //setting va;ue
    localStorage.setItem("myName", myInfo.myName);
    localStorage.setItem("myID", myInfo.myID);
    localStorage.setItem("mylogin", myInfo.myLogin);
    localStorage.setItem("myCampus", myInfo.myCampus);
    localStorage.setItem("myProgram", myInfo.myProgram);

    //getting value 
    myName = localStorage.getItem("myName");
    myID = localStorage.getItem("myID");
    myLogin = localStorage.getItem("mylogin");
    myCampus = localStorage.getItem("myCampus");
    myProgram = localStorage.getItem("myProgram");
    //calling 
    loadTermInfo(1);


    //header
    $("header").html(
      `<h4>SYST24444 Assignment #1 for ${myName} / ${myID}</h4>`);
      
    $("header").addClass("headerClass");
    
    
    
      //footer
    $("footer").html(
      `<h5>Login- ${myLogin} / 
        Campus- ${myCampus} / 
        Program- ${myProgram}<h5>
      `);
    });
    //change style 
    $("#toggle").click(function() {
      $(".termList").toggleClass("changeStyle");
    });
    //will highlight programs
    $("#highlight").click(function() {
        $("p:contains('Prog')").css("background-color", "RED");
    })
//term program
    var termProg = [
      {"termNumber" : 1, "termName" : " Term One" },
      {"termNumber" : 2, "termName" : " Term Two" },
      {"termNumber" : 3, "termName" : " Term Three" },
      {"termNumber" : 4, "termName" : " Term Four" }
    ]
      for (let t of termProg) {
        newTerm = new termProgData(t.termNumber, t.termName);
        tArray.push(newTerm);
      }

      console.log(tArray);
      //information of term
    var courseDetails = [
      {"termNum" : 1 , "courseType" : "TELE", "courseCode" : "13167", "imageName" : "tele.png"},
      {"termNum" : 1 , "courseType" : "Prog", "courseCode" : "10082", "imageName" : "java.png"},
      {"termNum" : 1 , "courseType" : "SYST", "courseCode" : "10049", "imageName" : "syst.png"},
      
      {"termNum" : 2 , "courseType" : "SYST", "courseCode" : "13416", "imageName" : "linux.png"},
      {"termNum" : 2 , "courseType" : "SYST", "courseCode" : "10199", "imageName" : "syst.png"},
      {"termNum" : 2 , "courseType" : "Prog", "courseCode" : "24178", "imageName" : "java.png"},

      {"termNum" : 3 , "courseType" : "DBAS", "courseCode" : "27198", "imageName" : "db.png"},
      {"termNum" : 3 , "courseType" : "SYST", "courseCode" : "28296", "imageName" : "linux.png"},
      {"termNum" : 3 , "courseType" : "Prog", "courseCode" : "32758", "imageName" : "java.png"},
      
      {"termNum" : 4 , "courseType" : "DBAS", "courseCode" : "32100", "imageName" : "db.png"},
      {"termNum" : 4 , "courseType" : "SYST", "courseCode" : "2444", "imageName" : "mobile.jpg"},
      {"termNum" : 4 , "courseType" : "Prog", "courseCode" : "32356", "imageName" : "c.png"},
    ]

    for (let c of courseDetails) {
      newCourse = new courseCodes(
        c.termNum, c.courseType,
        c.courseCode, c.imageName);
        cArray.push(newCourse);
    }
//on click it will show particular term info 
$("#t1").click(function(){
  loadTermInfo(1);
});
$("#t2").click(function(){
  loadTermInfo(2);
});
$("#t3").click(function(){
  loadTermInfo(3);
});
$("#t4").click(function(){
  loadTermInfo(4);
});


//will load term information 
function loadTermInfo(termNum) {

       
       $(".termList h3").html(`${termProg[termNum -1].termName}`);
       $(".termList div").html("");
      
       for (let x of cArray) {
        if(x.termNum == termNum){
          $(".termList div").append(
              `<p>Subject:${x.courseType}${x.courseCode}  <img src="images/${x.imageName}"></img></p>`     
           );
        }         
      }
}
});