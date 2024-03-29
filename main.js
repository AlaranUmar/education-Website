var light_mode = document.querySelector(".light");
light_mode.onclick = function () {
 document.body.classList.toggle("light-theme")
}
var dark_mode = document.querySelector(".dark");
dark_mode.onclick = function () {
 document.body.classList.toggle("dark-theme")
}

// Change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0)
})


// show/ hide answers on click
const faqs = document.querySelectorAll(".faq");
faqs.forEach( faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("open");
        
        // change icon
    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === 'uil uil-plus') {
        icon.className = "uil uil-minus";
    }
    else {
        icon.className = "uil uil-plus";
    }
    })
})