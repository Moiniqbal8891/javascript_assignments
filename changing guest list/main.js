
let guestList = ["Zia Khan", "Daniyal nigori", "sir zeehsan"];
//let suppose sir daniyal nigori cant make dinner with us 
guestList.splice(1,1,"Miss Maria");

for(let i=0; i<guestList.length; i++){
    console.log(guestList[i]);
}
