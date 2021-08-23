const opt1=document.querySelector('#opt1');
const opt2=document.querySelector('#opt2');
const form1=document.querySelector('#form1');
const form2=document.querySelector('#form2');
const btn1=document.querySelector('#submit1');
const btn2=document.querySelector('#submit2');
const output=document.querySelector('#output');

opt1.addEventListener('click',()=>{
    form1.style.display='block';
    form2.style.display='none';
    output.innerHTML='';
})

opt2.addEventListener('click',()=>{
    form2.style.display='block';
    form1.style.display='none';
    output.innerHTML='';
})


btn1.addEventListener('click',(event)=>{
    event.preventDefault();

    var a=form1.elements[0].value;
    var b=form1.elements[1].value;
    var c=form1.elements[2].value;

    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);

    if(isNaN(a) || isNaN(b) || isNaN(c))
        output.innerHTML='pls fill all the fields.';

    else{

        var s=(a+b+c)/2;
        let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
        output.innerHTML='The area of the triangle is '+area;
    }
})

btn2.addEventListener('click',(event)=>{
   event.preventDefault();

    var base=parseInt(form2.elements[0].value);
    var height=parseInt(form2.elements[1].value);

    if(isNaN(base) || isNaN(height))
        output.innerHTML='pls fill all the fields.';

    else{
    let area=(base*height)/2;
    output.innerHTML='The area of the triangle is '+area;
    }
})