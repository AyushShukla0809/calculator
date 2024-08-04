let output= document.getElementById("inputText");
let btn= document.querySelectorAll("button");
let btnArray= Array.from(btn);
let str='';
btnArray.forEach(btn =>{
btn.addEventListener('click', e=>{
    if(e.target.innerHTML=="DEL"){
str=str.substring(0,str.length-1);
output.value = str;
}

else if(e.target.innerHTML=="AC"){
    str='';
    output.value=str;
}
 
else if(e.target.innerHTML=="ANS"){
    str=eval(str);
    output.value=str;
}

else{
    str += e.target.innerHTML;
    output.value=str;
}

})
})