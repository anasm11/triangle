const btn=document.querySelector('button');
const ang1=document.querySelector('#angle1');
const ang2=document.querySelector('#angle2');
const ang3=document.querySelector('#angle3');
const output=document.querySelector('#output');

btn.addEventListener('click',()=>{
    if(isNaN(parseInt(ang1.value)) || isNaN(parseInt(ang2.value)) || isNaN(parseInt(ang3.value))){
        output.innerHTML='Enter all the values.'
    }
    else{
        if(parseInt(ang1.value)+parseInt(ang2.value)+parseInt(ang3.value)!=180){
            output.innerHTML='The entered values of angles do not make a triangle'
        }

        else output.innerHTML='Yes. The entered angles form a triangle.'
    }
})