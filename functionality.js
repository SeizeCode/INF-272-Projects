//display properties: Title,director/s,release year, and run time of the object/movie

  //modal view
  //alert()
  var ticketcount=0;//increament
  
//onclick function to show movie 1 details in modal view
function showdetails()//anonymous function
{
   alert("no info yet");
}

function cartfunction()//anonymous function to count number of tickets booked into the card
{
   ticketcount++;//count every click
   document.getElementById("totaltickets").innerText=ticketcount;
   document.getElementById("totaltickets").style.color="lightgreen";//change color
   document.getElementById("totaltickets").style.fontSize="20px";
}
//book ticket onclick function//global function for cartcount,cart functionality
function ticketfunction()
{
   cartfunction();//call
  
}

