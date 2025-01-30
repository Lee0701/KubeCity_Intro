/*
  index.js
  KubeCity_Intro

  Created by Js Na on 2025/01/31.
  Copyright © 2025 Js Na, All rights reserved.
*/

function MainBackParallax() {
    const scrollY = window.scrollY;
    const mainBack = document.getElementById('MainBack');
    mainBack.style.top = `-${0.5 * scrollY}px`;
}
function CheckPageInView() {
    const scrollY = window.scrollY;
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        // if the full page is in view classList.add('appear');
        if (scrollY > pages[i].offsetTop - window.innerHeight * 0.7) {
            pages[i].classList.add('appear');
        }
        else {
            pages[i].classList.remove('appear');
        }
    }
}

window.addEventListener('scroll', function() {
    //if scrollY is very high so that the background image is not visible, then stop the parallax effect
    if (window.scrollY < window.innerHeight) {
        MainBackParallax();
    }
    CheckPageInView();
});

document.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
        document.getElementById("KubeHeader").classList.add("showBackground");
    } else {
        document.getElementById("KubeHeader").classList.remove("showBackground");
    }
});

MainBackParallax();
CheckPageInView();
