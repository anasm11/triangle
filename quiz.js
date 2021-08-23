const form=document.querySelector('form');

const btn=document.querySelector('#submit-btn');
const output=document.querySelector('#output');

btn.addEventListener('click',(event)=>{
    var score=0;
    event.preventDefault();

    const a=document.querySelector('input[name="q1"]:checked');
    const b=document.querySelector('input[name="q2"]:checked');
    const c=document.querySelector('input[name="q3"]:checked');
    const d=document.querySelector('input[name="q4"]:checked');
    const e=document.querySelector('input[name="q5"]:checked');
    const f=document.querySelector('input[name="q6"]:checked');

    if(!isNaN(a) || !isNaN(b) || !isNaN(c) || !isNaN(d) || !isNaN(e) || !isNaN(f))
        output.innerHTML='Pls enter all the answers.'

    else{
        if(a.value=='90')
            score++;

        if(b.value=='obtuse')
            score++;

        if(c.value=='one')
          score++;

        if(d.value=='opt-two')
            score++;

        if(e.value=='equi')
            score++;

        if(f.value=='isosceles')
            score++;

        output.innerHTML='Your score is '+score;
    }
})