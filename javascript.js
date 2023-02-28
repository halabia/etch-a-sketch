const container = document.querySelector('#container');
for (i=0;i<16*16;i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    container.append(content);
    const button = document.getElementsByClassName("content");
    button[i].addEventListener('mouseenter', function (e) {
    e.target.style.background = 'blue';
  });
}


