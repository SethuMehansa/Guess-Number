    
let randomnumber=Math.floor((Math.random()*10)+1);
console.log(randomnumber);
let count=3;  
function compare(){
    console.log(count--); 
    let finalrandomnumber=randomnumber;
   console.log(finalrandomnumber);
   
let btn= document.getElementById("btn");
let output= document.getElementById("output");
let chance= document.getElementById("chance");
let num=Number( document.getElementById("number").value);

if(count==3){
 chance.innerHTML="Chances left :3"
}else if(count==2){
    chance.innerHTML="Chances left :2"
}else if(count==1){
    chance.innerHTML="Chances left :1"
}else if(count==0){
    chance.innerHTML="Chances left :0"
}else {
    chance.innerHTML="Out of chances.."
}
     if(finalrandomnumber>num){
        output.innerHTML="Too low...try again"
        console.log("low");
        
    }else if (finalrandomnumber<num){
        output.innerHTML="Too high...try again"
        console.log("high");
    }else if(finalrandomnumber==num){
        output.innerHTML="😁Correct number is "+randomnumber
        console.log("win");
    }
}