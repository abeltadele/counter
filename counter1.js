const valueEl = document.querySelector(".value");
const btnEl = document.querySelectorAll(".btn");
let count = 0;

btnEl.forEach((btn)=>{
  btn.addEventListener("click",(orange)=>{
    const Style = orange.currentTarget.classList;
    if (Style.contains("decrease")){
       count--;
    } else if(Style.contains("increase")){
      count++;
    }
    else{
        count = 0;
    }
   
    valueEl.textContent = count;
    if(count<0){
        valueEl.style.color = "red"; 
     } else if(count>0){
        valueEl.style.color = "green";
     }else{
        valueEl.style.color = "black";
     }
  });
});