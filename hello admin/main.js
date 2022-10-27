const usernames = ["zia khan","daniyal nigori","admin", "zeehsan hanif","faraz"]

for(let i=0; i<usernames.length; i++){
        if(usernames[i] == "admin"){
            console.log("would you like to see a status report? " + usernames[i]);
    }
    else{
        console.log("Hello " + usernames[i] +", thank you for logging in again");
              
    }
}
