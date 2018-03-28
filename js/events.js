//define functions here

$(document).ready(function(){

// call functions here
getIt();

});

function getIt(){
  $("p").on('click',function(){
    alert('Hey!');
  })
}

function frameIt() {
  $("img").on('load',function(){
    var element;
    element = $("img")
    element.classList.add("tasty");
  })




}