window.onload = slideEffect();

function slideEffect(){
    function toggleButton(toggle){
        button.style.pointerEvents = toggle;
    }
    const animationSlider = document.querySelector('.animationSlider');
    const button = document.querySelector('.header__btn');
    // Block buttos until animation is finished
    toggleButton('none');
    animationSlider.classList.add('loadingScreen');
    setTimeout(function(){
        // Unblock button
        toggleButton('');
        animationSlider.classList.remove('loadingScreen');
    }, 1400);
};