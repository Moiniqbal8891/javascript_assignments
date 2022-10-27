 let guestList = ["Zia Khan", "Daniyal nigori", "sir zeehsan"];
    //before add 3 more guest 
    for(let i=0; i<guestList.length; i++){
    if(guestList[i] == "Maria"){
    console.log("your are invited for big dinner Miss " + guestList[i]);
    }  
    else{
    console.log("your are invited for big dinner Sir " + guestList[i]);

    }  }



    guestList.push("iqbal");// it will add new guest at the end of array
    let arrayLength = Math.round(guestList.length/2);
    guestList.splice(2,0,"faraz");
    console.log(guestList);
    //after add  more guest 
    for(let i=0; i<guestList.length; i++){
    if(guestList[i] == "Maria"){
    console.log("your are invited for big dinner Miss " + guestList[i]);
    }  
    else{
    console.log("your are invited for big dinner Sir " + guestList[i]);

    }  }