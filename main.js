// Start the display screen
let display = document.getElementById('display');


//convert html collection into an array with Array.from() method
let buttons = Array.from(document.getElementsByClassName('btn'));

// console.log('click'); // console.log(e); // console.log(e.target); // console.log(e.target.innerText);
buttons.map( buttons => {
    buttons.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
             
        }
        
    });
});

console.log('buttons');



