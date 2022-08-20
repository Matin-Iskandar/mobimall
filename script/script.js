const loginBtn = document.querySelector('.header__top-login a')
const loginClose = document.querySelector('.close-btn')
const login = document.querySelector('.login')

loginBtn.addEventListener('click', () => {
    login.style.display = 'block'
})

loginClose.addEventListener('click', () => {
    login.style.display = 'none'
})

const mobileSearch = document.querySelector('.mobile__search')
const mobileSearchBtn = document.querySelector('.mobile__header-links a')
let isVisibleMS = false

mobileSearchBtn.addEventListener('click', () => {
    if (isVisibleMS) {
        isVisibleMS = false
        mobileSearch.style.display = 'none'
    } else {
        mobileSearch.style.display = 'block'
        isVisibleMS = true
    }

})

const mobileNavBtn = document.querySelector('.mobile__header-menu i')
const mobileNav = document.querySelector('.mobile__nav')
let isVisibleMV = false

mobileNavBtn.addEventListener('click', () => {
    mobileSearch.style.display = 'none'

    if (isVisibleMV) {
        isVisibleMV = false
        mobileNav.style.display = 'none'
    } else {
        mobileNav.style.display = 'block'
        isVisibleMV = true
    }
})

const mobileLoginBtn = document.querySelector('#mobile-login')

mobileLoginBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    isVisibleMV = false
    login.style.display = 'block'
})

const mobileNavItem = document.querySelectorAll('.mobile__nav-list .mobile__nav-item')
const mobileSubNav = document.querySelectorAll('.mobile__subnav-list')
const mobileSubNavLink = document.querySelectorAll('.mobile__subnav-list .mobile__subnav-item:first-child .mobile__subnav-link')

mobileNavItem.forEach((item, index) => {
    if (index < 5) {
        item.addEventListener('click', (e) => {
            mobileSubNav[index].style.display = 'block'
        })
    }
})

mobileSubNavLink.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        mobileSubNav[index].setAttribute('style', "")
    })
})





