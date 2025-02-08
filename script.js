const imageElement = document.getElementById('image-full');
const imageConteiner = document.getElementById('image-overlay').classList;

const splash = document.getElementById('splash').classList;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < 10)
    {
        splash.add('fullscreen');
    }
    else
    {
        splash.remove('fullscreen');
    }
});

function OpenImageView(image)
{
    imageElement.src = image;
    imageConteiner.remove('invisible');
}

function CloseImageView()
{
    imageConteiner.add('invisible');
    imageElement.src = "";
}

