const increaseBtn = document.getElementById('add');
const decreaseBtn = document.getElementById('minus');
const count = document.getElementById('count');
let value = 0;

increaseBtn.addEventListener('click',function(){
    value = parseInt(value)+1
    count.innerText = value
})

decreaseBtn.addEventListener('click',function(){
    if (value > 0) { 
        value -= 1;
    }
    count.innerText = value;
})

