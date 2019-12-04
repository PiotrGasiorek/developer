function slideEffect(){
    const animationSlider = document.querySelector('.animationSlider');
    animationSlider.classList.add('loadingScreen');
    setTimeout(function(){
        animationSlider.classList.remove('loadingScreen');
    }, 1400);
};

slideEffect();