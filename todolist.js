//create arrays to be accessed globaly
var Modules=[];//modulearray
var Tasks=[];//taskarray
var Todolist=[];//todoarray

//create function that gets triggered when the user clicks add buttoon for Modules
function addmodule()
{
    //retrieve input values/text Module code and Module Lecture
    var ModuleCode=document.getElementById("ModuleID").value;
    var ModuleLecture=document.getElementById("LectureID").value;

    //add input value/text into the array "Modules"
    Modules.push({id:ModuleId,code:ModuleCode,lecture:ModuleLecture});

    //time stamp
    var ModuleId=Date.now();
    var Tbody=document.getElementById("ModuleTable");

    //if module code and module lecture fields are empty
  if(ModuleCode=="" || ModuleLecture=="")
  {
    alert("please fill both module code and lecturer");
    document.getElementById("ModuleID").style.borderBlockColor="red";
    document.getElementById("LectureID").style.borderBlockColor="red";
  }
  else
  {
    //when they contain information
    //document.getElementById("ModuleID").style.backgroundColor="white";
    document.getElementById("ModuleID").style.borderBlockColor="white";
    document.getElementById("LectureID").style.borderBlockColor="white";
    //success message
   alert("Successfully added!   "+"Module: "+ ModuleCode+"  "+"--"+"Module lecturer:  "+ModuleLecture);

   //while loop through Modules array and add current index into the select input type
    var o=0;//index
  while(o<Modules.length)
  {
    document.getElementById("modlesel").innerHTML+=
    '<select>'+

    `<option>${Modules[o].code}</option>`+

    '</select>'
    o++;//increament
  } 
      //populate table with values fomr updated array

    for(var i=0;i<Modules.length;i++)//loop through each module object and append into the tablebody
    {
      Tbody.innerHTML+=
      `<tr onclick="removemodule(this)" data-id="${Modules[i].id}">`+
      `<td>${Modules[i].code}</td>`+
			`<td>${Modules[i].lecture}</td>`+
      
			'</tr>';
      i++;
    }
  }
}
//delete function
   var index;
   var table=document.getElementById("ModuleTable");//varibales

  function removemodule(){
  for(var i=0;i<table.rows.length;i++)//loop through the entire table rows
  {
      table.rows[i].onclick=function()//add onclick on each row
      {
        index=this.parentElement.rowIndex;
        table.deleteRow(index);
        document.getElementById("modlesel").innerHTML="";
      }
  }
}

//task section
function AddDate()//function to be called ,3'ggerd
{
  //retrieve input values from task textbox and date input type
  var task=document.getElementById("TaskID").value;
  var date=document.getElementById("DateID").value;
  var taskkey=Date.now();//time stamp
  var tasktable=document.getElementById("tasktable");
  //push data into the array
  Tasks.push({id:taskkey,taskk:task,day:date});
  if(task=="" || date=="")//if task and date input types are empty
  {
    alert("please fill both task code and date ");//alert message
    //change input type back-color to red
    document.getElementById("TaskID").style.borderBlockColor="red";
    document.getElementById("DateID").style.borderBlockColor="red";
  }
  else//else stattemt
  {
    //when they contain information
    //change input type back-color to white/clear
    document.getElementById("TaskID").style.borderBlockColor="white";
    document.getElementById("DateID").style.borderBlockColor="white";
    //success message
    alert("Successfully added!   "+"Task Name: "+ task+" "+"--"+"  "+"Date:  "+date);
    
      //populate table with input.value(s)
      for(var i=0;i<Tasks.length;i++)//loop through arrya of task to get current index into the table
      {
        //populate table
        tasktable.innerHTML+='<tr>'+
        `<td>${Tasks[i].taskk}</td>` +
        `<td>${Tasks[i].day}</td>` +
        '</tr>'
        i++;//increament
      }
      //populate table with input.value(s)
    for(var i=0;i<Tasks.length;i++)
    {
      document.getElementById("tasksel").innerHTML+=
      '<select>'+

      `<option>${Tasks[i].taskk}</option>`+
      
      '</select>'
      i++;//increament
    }
  }
}
//todo  section

function Todo()
{
  //retrieve input values from module,task textbox and description input type
  var modulelist=document.getElementById("modlesel").value;
  var tasklist=document.getElementById("tasksel").value;
  var descriptionlist=document.getElementById("DescriptionID").value;
  var date=document.getElementById("DateID").value;
  Todolist.push({modi:modulelist,taski:tasklist,dscr:descriptionlist,dayy:date});

  if(!modulelist|| !tasklist|| !descriptionlist)//if fields are empty
  {
    alert("please select option in all required fields ");
    document.getElementById("modlesel").style.borderBlockColor="red";
    document.getElementById("tasksel").style.borderBlockColor="red";
    document.getElementById("DescriptionID").style.borderBlockColor="red";

  }
 else //when they contain information add into the tablebody
  {//default back-color
    document.getElementById("modlesel").style.borderBlockColor="black";
    document.getElementById("tasksel").style.borderBlockColor="black";
    document.getElementById("DescriptionID").style.borderBlockColor="black";
    var k=0;//index
    while(k<Todolist.length)//loop through task array to get current index array,then into populate select
    {
      document.getElementById("todotable").innerHTML+='<tr>'+//select inpute type extracted
      `<td>${Todolist[k].modi}</td>`+
      `<td>${Todolist[k].taski}</td>`+
      `<td>${Todolist[k].dscr}</td>`+
      `<td>${Todolist[k].dayy}</td>`+
      //current object
      '</tr>';
      k--;//dcreament
    }
  }
  //deleting a row when it's click
 
}


