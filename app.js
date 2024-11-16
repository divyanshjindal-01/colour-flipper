document.getElementById("selector").addEventListener('click',()=>{
    const randomcolor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    console.log(randomcolor);
    document.getElementById('bkc').innerHTML = `background color is: ${randomcolor}<br>`;

    document.body.style.backgroundColor = randomcolor;
});
document.getElementById("selector").addEventListener('click',()=>{
    const randomcolor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    console.log(randomcolor2);

    document.getElementById('btn').innerHTML = `button color is: ${randomcolor2}`;

    document.getElementById('selector').style.backgroundColor = randomcolor2;
});
