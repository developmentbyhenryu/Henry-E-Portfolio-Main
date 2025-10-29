//service_b3zabto
//0SvJ7PH6GpWI1AYPI
//template_x409425

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendForm(
    //     'service_b3zabto',
    //     'template_x409425',
    //     event.target,
    //     '0SvJ7PH6GpWI1AYPI'
    // ).then(() => {
        
    // })
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    setTimeout(() => {
        loading.classList.remove(modal__overlay--visible)

    }, 1000);
}