const array=[]; //APPENDING LIST OF CONENTS
//ON CLICKING THE ADD BUTTON FUNCTION WILL BE CALLED TO ENTER THE CONTENTS
function add()
			{
               let list = prompt("Enter the list : "); //DIALOGUE BOX TO ENTER THE CONTENTS
               		if(list==null)  
               		{
               			div.remove();  //REMOVING THE CONTENTS WHEN USER CHOOSES CANCEL
               		}
               array.push(list);   //PUSHING THE CONTENTS TO ARRAY 
               var div = document.createElement('div'); //CREATING DIV ELEMENT
               const p=document.createElement('p');		  //CREATING P TAG
               div.appendChild(p);						          //Appending 'p' tag to 'div' tag
    		       p.innerHTML = list;					 	          //Getting 'p' tag innerhtml 
               div.className = 'border';				        //MAKING CLASS NAME OF DIV AS border
               var edit=document.createElement('button');//CREATING Edit button
               edit.innerHTML="+";                       //Getting innerhtml OF EDIT BUTTON 
               edit.className='edit';                    //MAKING CLASS NAME OF EDIT BUTTON AS edit
               var delet=document.createElement('button');//CREATING Delete button
               delet.innerHTML="-";                       //Getting innerhtml OF DELETE BUTTON
               delet.className="delete";                  //MAKING CLASS NAME OF DELETE BUTTON AS delet
               div.appendChild(edit);					            //Appenidng edit to div 
               div.appendChild(delet);					          //Appenidng delete to div
               document.body.appendChild(div);            //Appenidng div to document
			         edit.onclick=function()                    //Calling edit function to upgrade the content
					       {
						        let li = prompt("Enter the list : ",p.innerHTML);//DIALOGUE BOX TO ADD MORE CONTENTS
						        p.innerHTML=li;	                      //GETTING UPDATED CONTENTS
					       }
			         delet.onclick=function()					          //Calling delete function to delete the content 
               		{
               			var r=confirm("Do you want to delete?");//DIALOGUE BOX TO CONFIRM FOR DELETION
               			if(r==true)
             				div.remove();                           //IF IT IS YES IT WILL DELETE THE CONTENTS
					}		
  			}