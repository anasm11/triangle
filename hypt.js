const a=document.querySelector('#leg1');
const b=document.querySelector('#leg2');
const btn=document.querySelector('#check');
const output=document.querySelector('#output');

btn.addEventListener('click',()=>{
    if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value)))
        output.innerHTML='pls enter both the legs.'

    else{
        output.innerHTML='The hypotenuse is '+Math.sqrt(Math.pow(a.value,2)+Math.pow(b.value,2)).toFixed(2)
    }
})


