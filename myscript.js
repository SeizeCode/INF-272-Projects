//window. onload start after objects loaded by browser
//window.onload=function(){
//create movie array of all movies
var Movies=[
    //movie1
    {id:1,
    tittle:" 6 UNDERGROUND",
    director:"Michael Bay",
    runtime:"2h 8min",
    release_year:"2019",
    description:"Six individuals from all round the globe,each the very best at what they do,have been chosen not only for their skill,but  for a unique desire to delete their pasts to change their future."
    ,
    poster_url:"6 Undergroundhttps://g.co/kgs/quMVsp",
    cinema_number:1,
    ticket_price:150,
    tickets_in_cart:0,
    },
    //movie2
    {id:2,
        tittle:"DEEP WATER",
        director:"Adrian Lyne",
        runtime:"2h 33min",
        release_year:"2022",
        description:"A well-to-do husband who allows his wife to have affairs in order to avoid a divorce becomes a prime suspect in the disappearance of her lovers.",
        poster_url:"Deep Water https://g.co.kgs/A2HJVF",
        cinema_number:2,
        ticket_price:205,
        tickets_in_cart:0,
    },
    //movie3
    {id:3,
        tittle:"MASTER",
        director:"Mariama Diallo",
        runtime:"1h 31min",
        release_year:"2022",
        description:"Three women strive to find their place at a prestigious New Englad university that may disguise something sinister.",
        poster_url:"Master https://g.co.kgs.DJkHD",
        cinema_number:3,
        ticket_price:180,
        tickets_in_cart:0,
    },
    //movie4
    {id:4,
        tittle:"The Marksman",
        director:"Robert Lorenzo",
        runtime:"1h 48min",
        release_year:"2021",
        description:"Jim Handson,a returned Marine living on the Mexican border,tries to save a mother and her son as they are being hunted by a cartel.After the mother dies,Jim must take the child to Chicago.",
        poster_url:"The Marksman http://g.co.kgs/G1H9Jg",
        cinema_number:4,
        ticket_price:141,
        tickets_in_cart:0,
        }
];
//image objects
var image1='<img src="images/image1.jpg" alt="Movie1" width="100%" alt="Movie1">';
var image2='<img src="images/image2.jpg" alt="Movie2" width="100%" alt="Movie2">';
var image3='<img src="images/image3.jpg" alt="Movie3" width="100%" alt="Movie3">';
var image4='<img src="images/image4.jpg" alt="Movie4" width="100%" alt="Movie4">';

var images=[];//image array(empty)
images.push(image1,image2,image3,image4);//array of images
//local storage for pictues
for(var i=0;i<images.length;i++){
    //push image array into local storage
    let im1=localStorage.setItem("img1",images[0]);
    let im2=localStorage.setItem("img2",images[1]);
    let im3=localStorage.setItem("img3",images[2]);
    let im4=localStorage.setItem("img4",images[3]);
    i++;
}
//local storage
//local storage for movies

var table1 =document.getElementById("table1");//1st movie
var table2 =document.getElementById("table2");//2nd movie
var table3 =document.getElementById("table3");//3rd movie
var table4 =document.getElementById("table4");//4th movie






//addm movie and image objects into html card content
    table1.innerHTML+=//first movie
    '<div>'+
    `<p>${localStorage.getItem("img1")}</p>`+//image1 in the array localstorage
    //`<p>${Movies[0].id}</p>`+// Movie unique identifier
    `<p><b>${Movies[0].tittle}</b></p>`+
    `<p>${Movies[0].description}</p>`+//description
    `<div align="right">
    <p><b>Ticket Price: R${Movies[0].ticket_price.toString()}</b></p>
    </div><hr>`+//ticket price
    '<div class="container-fluid">'+//div for buttons
    '<input type="button" onclick="showdetails()" value="Show details" class="btn btn-link" style="border:2px solid"data-toggle="modal" data-target="#jsmodal">'+'<br><br>'+
    '<input type="button"onclick="ticketfunction()" value="BOOK TICKET" class="btn btn-success">'+
    '</div>'
    
    '</div>';
//add movie and image objects into html card-content
    table2.innerHTML+=//2ND movie
    '<div>'+
    `<p>${localStorage.getItem("img2")}</p>`+//image 2 in the array
    //`<p>${Movies[1].id}</p>`+ Movie unique identifier
    `<p><b>${Movies[1].tittle}</b></p>`+
    `<p>${Movies[1].description}</p>`+//description
    `<div align="right"><br>
    <p><b>Ticket Price: R${Movies[1].ticket_price}</b></p>
    </div>`+//ticket price
    '<div class="container">'+//div for buttons
    '<input type="button"onclick="showdetails()"  value="Show details" class="btn btn-link" style="border:2px solid">'+'<br><br>'+
    '<input type="button"onclick="ticketfunction()" value="BOOK TICKET" class="btn btn-success">'+
    '</div>'
    '</div>';

    //add movie and image objects into html card-content
    table3.innerHTML+=//3RD movie
    '<div>'+
    `<p>${localStorage.getItem("img3")}</p>`+
    //`<p>${Movies[2].id}</p>`+ Movie unique identifier
    `<p><b>${Movies[2].tittle}</b></p>`+
    `<p>${Movies[2].description}</p>`+//description
    `<div align="right"><br><br>
    <p><b>Ticket Price: R${Movies[2].ticket_price}</b></p>
    </div><hr>`+//ticket price
    '<div class="container">'+//div for buttons
    '<input type="button"onclick="showdetails()"  value="Show details" class="btn btn-link" style="border:2px solid">'+'<br><br>'+
    '<input type="button"onclick="ticketfunction()" value="BOOK TICKET" class="btn btn-success">'+
    '</div>'
    '</div>';

    //add movie and image objects into html card-content
    table4.innerHTML+=//4TH movie
    '<div>'+
    `<p>${localStorage.getItem("img4")}</p>`+
    //`<p>${Movies[3].id}</p>`+ Movie unique identifier
    `<p><b>${Movies[3].tittle}</b></p>`+
    `<p>${Movies[3].description}</p>`+//description
    `<div align="right">
    <p><b>Ticket Price: R${Movies[3].ticket_price}</b></p>
    </div><hr>`+//ticket price
    '<div class="container-fluid">'+//div for buttons
    '<input type="button"onclick="showdetails()"  value="Show details" class="btn btn-link" style="border:2px solid">'+'<br><br>'+
    '<input type="button"onclick="ticketfunction()" value="BOOK TICKET" class="btn btn-success">'+
    '</div>'
    '</div>';

//}//windows.onoload commentted out





