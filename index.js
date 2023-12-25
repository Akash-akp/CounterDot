let plusbtn = document.getElementById('plusbtn');
let minusbtn = document.getElementById('minusbtn');
let countr = document.getElementById('countr');

countr.innerText = 0;
plusbtn.addEventListener("click",()=>countr.innerText++);
minusbtn.addEventListener("click",()=>countr.innerText--);