let title;
let content;

content = document.getElementsByClassName('folder-content');
title = document.getElementsByClassName('folder-title');

function OpenFolder(index)
{
    content[index].classList.toggle("visible");
    title[index].classList.toggle("visible")
}