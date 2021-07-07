const cityName = document.querySelector('.header__city-button');

cityName.textContent = localStorage.getItem('lomoda_location') || "Ваш город?"

cityName.addEventListener('click', ()=>{
    const city = prompt('Could you write your city?')
    cityName.textContent =  city;   
    localStorage.setItem('lomoda_location', city)
})

// blocking scroll

const disableScroll = ()=>{
    const widthScroll = window.innerWidth - document.body.offsetWidth
    document.body.dbScrollY = window.scrollY
    document.body.style.cssText = `
        position: fixed;
        width:100%;
        top: ${-window.scrollY}px;
        left: 0;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px
    `
}
const enableScroll = ()=>{
    document.body.style.cssText = "";
    window.scroll({
        top: document.body.dbScrollY
    })
}

// modal window

const subHeaderCart = document.querySelector('.subheader__cart')
const cartOverlay = document.querySelector('.cart-overlay')

const cartModalOpen = ()=>{
    cartOverlay.classList.add('cart-overlay-open')
    disableScroll()
}
const cartModalClose = ()=>{
    cartOverlay.classList.remove('cart-overlay-open')
    enableScroll()
}
subHeaderCart.addEventListener('click', cartModalOpen)

cartOverlay.addEventListener('click', (event)=>{
    const target = event.target;

    if(target.classList.contains('cart__btn-close') || target.matches('.cart-overlay')){
        cartModalClose()
    }
})