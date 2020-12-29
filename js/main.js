const 
    headerText = document.querySelector('.header-text span'),
    texts = ['счастья', 'релакса', 'позитива']

let currentText = 0

setInterval(() => {
    headerText.classList.remove('open')
    setTimeout(() => {
        currentText === texts.length - 1 ? currentText = 0 : ++currentText
        headerText.textContent = texts[currentText]
    }, 300)
    setTimeout(() => headerText.classList.add('open'), 600)
}, 2000)

const 
    header = document.querySelector('header'),
    heading = document.querySelector('.heading'),
    servicesSection = document.querySelector('#services'),
    services = document.querySelectorAll('#services ul li'),
    aboutSection = document.querySelector('#about'),
    offersSection = document.querySelector('#offers')

window.addEventListener('scroll', () => {
    const top = window.scrollY + 50

    if (top >= heading.offsetHeight / 2) {
        header.classList.add('open')
    } else {
        header.classList.remove('open')
    }

    if (top >= servicesSection.getBoundingClientRect().y) {
        services.forEach(({ classList }) => classList.add('open'))
    }

    if (top >= aboutSection.getBoundingClientRect().y) {
        aboutSection.classList.add('open')
    }

    if (top >= offersSection.getBoundingClientRect().y) {
        offersSection.classList.add('open')
    }
})

const 
    tabs = document.querySelectorAll('.offer-tabs ul li'),
    tabContents = document.querySelectorAll('#offers .info')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(({ classList }) => classList.remove('active'))
        tabContents.forEach(({ classList }) => classList.remove('active'))
        tabContents.forEach(({ classList }) => classList.remove('open'))

        tab.classList.add('active')
        tabContents[index].classList.add('active')

        setTimeout(() => tabContents[index].classList.add('open'), 100)
    })
})

const 
    hamburger = document.querySelector('.hamburger'),
    dropDownMenu = document.querySelector('.drop-down-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    dropDownMenu.classList.toggle('open')

    document.addEventListener('click', closeMenu)
})

const closeMenu = e => {
    if (
        !e.target.classList.value.match(/click/) &&
        !e.target.classList.value.match(/hamburger/)
    ) {
        hamburger.classList.remove('is-active')
        dropDownMenu.classList.remove('open')

        document.removeEventListener('click', closeMenu)
    }
}

const anchors = document.querySelectorAll('a[href^="#"]')

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault()
    
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        })
    })
})