
let myGroceryArray = []



function addToList(event){
    event.preventDefault();
    let newItem = document.getElementById("myItem").value;
    newItem = newItem.toLowerCase();
    
    if(newItem==""){
        alert("Please enter an item");
    }
    else if(myGroceryArray.includes(newItem)){
        alert("The item is already in your list");
    }
    else{        
        myGroceryArray.push(newItem);
        document.getElementById("myItem").value ="";  
        showList();  
    }    
}


function removeFromList(event){
    event.preventDefault();
    let itemToDelete = document.getElementById("myItem").value;
    itemToDelete = itemToDelete.toLowerCase();
    if(!myGroceryArray.includes(itemToDelete)){
        alert("No such item in the list");
    }
    else{
        for (i=0; i<myGroceryArray.length ; i++){
            if(myGroceryArray[i]==itemToDelete){
                myGroceryArray.splice(i, 1);
            }
        }
        document.getElementById("myItem").value ="";
        showList();    
    }  
}




function showList(){
    document.getElementById("fullList").innerHTML = "";
    for (i=0; i<myGroceryArray.length ; i++){
        document.getElementById("fullList").innerHTML += `<li>`+myGroceryArray[i]+`</li>`;
    }
}




function clearArray(){
    myGroceryArray = [];
}










