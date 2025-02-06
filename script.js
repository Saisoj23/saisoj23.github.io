window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < 100)
    {
        document.getElementById('splash').classList.add('fullscreen');
    }
    else
    {
        document.getElementById('splash').classList.remove('fullscreen');
    }
    console.log(scrolled);
});