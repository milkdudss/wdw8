// WRITE YOUR CODE IN HERE:

let container = document.querySelector('#container');
for (let i=0; i <= 99; i++ ){
    let buttons = document.createElement('button');
buttons.innerText = 'look at me';
    container.appendChild(buttons);
}
