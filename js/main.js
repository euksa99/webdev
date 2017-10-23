var newItemCounter =1;
//var ourList = document.getElementById("our-list");
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline")
//var listItems = document.getElementById("our-list").getElementsByTagName("li")
var listItems = document.querySelectorAll(""#our-list li");

ourList.addEventListener("click", activateItem);


function activateItem(e){
 if (e.target.nodeName=="LI"){
   ourHeadline.innerHTML = e.target.innerHTML;
   for(i=0; i <e.target.parentNode.children.length; i++)
   {
     e.target.parentNode.children[i].classList.remove("active");
   }
   e.target.classList.add("active");
 }

}

ourButton.addEventListener("click", createdNewItem);

function createdNewItem(){
  ourList.innerHTML += "<li>SomethingNew "+ newItemCounter + "</li>";
  newItemCounter++;

}
