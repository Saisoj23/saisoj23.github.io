let splash;

splash = document.getElementById('splash').classList;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < 10)
    {
        splash.add('fullscreen');
        nav.add('override-hidden');
    }
    else
    {
        splash.remove('fullscreen');
        nav.remove('override-hidden');
    }
});