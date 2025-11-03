const navBar = document.querySelector('.nav-bar ul')
const toggleBar = document.querySelector('.hum__bar')

toggleBar.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

document.querySelector('.for__my-project').addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView({ behavior : "smooth" } )
})