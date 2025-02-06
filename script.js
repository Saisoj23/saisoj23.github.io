window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < 10)
    {
        document.getElementById('splash').classList.add('fullscreen');
    }
    else
    {
        document.getElementById('splash').classList.remove('fullscreen');
    }
    console.log(scrolled);
});