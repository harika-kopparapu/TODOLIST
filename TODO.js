const array=[]; 
//THIS FUNCTION IS HELPFUL IN ENTERING THE LIST OF CONTENTS 
function add()
			{
               	let list = prompt("Enter the list : "); 					//DIALOGUE BOX TO ENTER THE TODO LIST CONTENTS
               		if(list==null)  
               		{
               			div.remove();  										//REMOVING THE LIST WHEN USER CHOOSES CANCEL
               		}
               	array.push(list);   					 
               	var div = document.createElement('div'); 
               	const p=document.createElement('p');		  
               	div.appendChild(p);						       
    			p.innerHTML = list;					 	  					//GETTING ENTERED LIST 
               	div.className = 'border';				  
               	var edit=document.createElement('button');					//BUTTON TO EDIT
               	edit.innerHTML="+";                       
               	edit.className='edit';                    
               	var delet=document.createElement('button');					//BUTTON TO DELETE
               	delet.innerHTML="-";                       
               	delet.className="delete";                  
               	div.appendChild(edit);					    
               	div.appendChild(delet);					   
               	document.body.appendChild(div);            
				edit.onclick=function()                    					//THIS FUNCTION IS USED TO EDIT THE LIST
				    {
				        let li = prompt("Enter the list : ",p.innerHTML);	//DIALOGUE BOX TO ADD MORE LIST TO EXISTING LIST
				        p.innerHTML=li;	                      				//GETTING UPDATED CONTENTS
				    }
			    delet.onclick=function()					          		//THIS FUNCTION IS USED TO DELETE THE LIST 
               		{
               			var r=confirm("Do you want to delete?");			//DIALOGUE BOX TO CONFIRM FOR DELETION
               			if(r==true)
             			div.remove();                         			  	
					}		
  			}