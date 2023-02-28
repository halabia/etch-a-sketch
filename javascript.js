const container = document.querySelector('#container');

// create 16x16 grid
for (i=0;i<16*16;i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    container.append(content);
}

let etch = (picker) => {
    // fills in boxes with user-selected colour
for (i=0;i<16*16;i++) {
    const button = document.getElementsByClassName("content");
    button[i].addEventListener('mouseenter', function (e) {
    e.target.style.background = picker;
    });
}
}

let erase = () => {
    // clears all boxes
for (i=0;i<16*16;i++) {
    const button = document.getElementsByClassName("content");
    button[i].style.backgroundColor = "white";
    };
}


// change fill colour based on user selection
const redButton = document.querySelector('#red');
redButton.addEventListener('click', () => {
    etch("red")
  });
const blueButton = document.querySelector('#blue');
blueButton.addEventListener('click', () => {
    etch("blue")
});
const greenButton = document.querySelector('#green');
greenButton.addEventListener('click', () => {
    etch("green")
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function (e) {
    erase()
});

