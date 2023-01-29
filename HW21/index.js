const colorArray = ['red', 'blue', 'orange'];

// Create div
const element = document.createElement('div');
element.classList.add('main');
element.style.backgroundColor = 'yellow';
document.body.append(element);

// Background
let backgroundColor = prompt('Select color for div: red, blue, orange \nor click "Cancel" if you not want select.');

while(backgroundColor !== null && !colorArray.includes(backgroundColor)) {
    backgroundColor = prompt(`Error: "${backgroundColor}" is not a color.\nSelect color for div: red, blue, orange \nor click "Cancel" if you not want select.`);
}

if(colorArray?.includes(backgroundColor)) {
    element.style.backgroundColor = backgroundColor;
    alert('Ok, we change the color');
} else {
    element.style.backgroundColor = 'transparent';
    alert('Ok, we delete the color');
}

// Shadow

const shadowDiv = confirm('Add shadow to div? \n"Cansel" - no; "Ok" - yes');

if(shadowDiv) {
    element.style.boxShadow = "10px 20px 30px grey";
}

// Text

const blockText = prompt('Input text for div');

if(blockText) {
    element.innerText = blockText;
} else {
    alert('Ok, we don`t input any text')
}