var MyFirstName;
var myLast_Name;
var my_ID;
var my_Login;
var my_Home_Country;
var my_Program;

//array to hold category and animal list 
var category_List = new Array();
var animal_Detail_List = new Array();
//category
class Category {
    constructor(cattype, logo) {
      this.cattype = cattype;
      this.logo = logo;
    }
}
  //animal details 
class AnimalDetails {
    constructor(animal, category, scientific, colors, photoDepiction) {
      this.animal = animal;
      this.category = category;
      this.scientific = scientific;
      this.colors = colors;
      this.photoDepiction = photoDepiction;
    }
}

$(document).ready(function() {

    console.log("in doc ready");
  
     //jason file 
   $.getJSON("data/A2-JSON.json", function(data) {
   
    localStorage.clear();
    let myInfo = data.A2Personal;
    //set value 
    localStorage.setItem("MyFirstName", myInfo.FirstName);
    localStorage.setItem("myLast_Name", myInfo.LastName);
    localStorage.setItem("my_ID", myInfo.StudentID);
    localStorage.setItem("my_Login", myInfo.UserName);
    localStorage.setItem("my_Program", myInfo.Program);
    localStorage.setItem("my_Home_Country", myInfo.HomeCountry);
  
    //get value 
    MyFirstName = localStorage.getItem("MyFirstName");
    myLast_Name = localStorage.getItem("myLast_Name");
    my_ID = localStorage.getItem("my_ID");
    my_Login = localStorage.getItem("my_Login");
    my_Program = localStorage.getItem("my_Program");
    my_Home_Country = localStorage.getItem("my_Home_Country");
  
  //for header 
  $("header").html(
   `<h4> Assignment2 / ${MyFirstName} ${myLast_Name}/ ${my_ID} / ${my_Login}</h4>`);
  $("header").addClass("headers");
  
     //for footer 
     $("footer").html
       (
        `<h5>My Sheridan Program:${my_Program}<br>
         My Home Country: ${my_Home_Country} <h5>
        `
       ); 
     
      for (cat of data.Categories) {
        var categories = new Array();
        categories.push(cat);
        console.log(categories);
        category_List.push(new Category(cat.cattype, cat.logo));
      }
  
      localStorage.setItem("category_List", JSON.stringify(category_List));	
      
      for (animal of data.AnimalDetails) {
        var aDetails = new Array();
        aDetails.push(animal);
        console.log(aDetails);
        animal_Detail_List.push(new AnimalDetails(animal.animal, animal.category, animal.scientific, animal.colors, animal.photoDepiction));
      }
      //will set value 
      localStorage.setItem("animal_Detail_List", JSON.stringify(animal_Detail_List));
      //calling
      mainScreen(data);
   
    });
  
     
  });
  
  // mainScreen display data 
  function mainScreen(data) {
     
  
    $("animalList").html("");
    $("imgcss").html("");
      for(let i=0; i < category_List.length; i++) {
          $("#animalList").append(
              `
              <p>
                  <li id='${i}'>
                      
                      <a href='pages/pge2.html'>
                          ${category_List[i].cattype}
                      </a>
                  </li> 
              <p>
           `
      )
      $("#images").append(
              `	<li id='${i}'>
            <img src="images/${category_List[i].logo}"></img> 
          </li> 
         <p>
        `
      )   
    }
  }
  
   //when click on , show details 
  $(document).on("click", "#animalList > li", function() {
      localStorage.setItem(
          "choice",
          $(this).closest("li").attr("id")
      );
      
  
  });