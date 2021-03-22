// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    if (paragraph.textContent.includes("error")) {
        paragraph.classList.add('error');
    }
    if (paragraph.textContent.includes('success')) {
        paragraph.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');



// paragraphs[0].classList.add('error');
// paragraphs[1].classList.add('success');
// paragraphs[3].classList.add('success');
// paragraphs[4].classList.add('error');
// paragraphs[6].classList.add('error');
// paragraphs[7].classList.add('success');

const listItems = document.querySelectorAll('li');

listItems.forEach(listItem => {
    if (listItem.textContent.includes('red')) {
        listItem.classList.add('red');
    } else if (listItem.textContent.includes('black')) {
        listItem.classList.add('black');
    } else if (listItem.textContent.includes('blue')) {
        listItem.classList.add('blue');
    }
});