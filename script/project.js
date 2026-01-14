document.addEventListener('click', e => {
    if (e.target.matches('img')) {
        localStorage.setItem('imageView', e.target.src)

        window.location.href = 'image.html'
    }
})

document.addEventListener("change", e => {
    let domeEdis = e.target.value
    if (e.target.closest("#project_filter")) {
        if (domeEdis == "apis") {
            document.querySelectorAll(".api").forEach(item => {
                item.style.display = "flex"
            })
            document.querySelectorAll(".dom").forEach(item => {
                item.style.display = "none"
            })
            document.querySelectorAll(".css").forEach(item => {
                item.style.display = "none"
            })
        }
        else if (domeEdis == "dom") {
             document.querySelectorAll(".api").forEach(item => {
                item.style.display = "none"
            })
            document.querySelectorAll(".dom").forEach(item => {
                item.style.display = "flex"
            })
            document.querySelectorAll(".css").forEach(item => {
                item.style.display = "none"
            })
        }
        else if (domeEdis == "css") {
             document.querySelectorAll(".api").forEach(item => {
                item.style.display= "none"
            })
            document.querySelectorAll(".dom").forEach(item => {
                item.style.display = "none"
            })
            document.querySelectorAll(".css").forEach(item => {
                item.style.display = "flex"
            })
        }
        else {
            document.querySelectorAll(".project").forEach(item => {
                item.style.display = "flex"
            })
        }
    }
})

document.querySelectorAll('a:not(#own_home_page)').forEach(item => {
    item.target = "_blank"
})

// toggles and hamberger functionality
document.querySelector(".hum__bar").addEventListener("click", () => {
    document.querySelector(".nav-bar ul").classList.toggle("active")
    document.querySelector(".toggle_container").classList.toggle("active")
})
let toggleBtn = document.querySelector('#toggle_filter_mode')
toggleBtn.addEventListener("change", () => {
    
        document.body.classList.toggle("active")
        document.querySelector("header").classList.toggle("active")
        document.querySelector(".logo h1").classList.toggle("active")
        document.querySelector(".logo h2").classList.toggle("active")
        document.querySelector(".hum__bar").classList.toggle("active")
        document.querySelector("footer").classList.toggle("active")
        document.querySelector("#project_filter").classList.toggle("active")
        document.querySelectorAll("a").forEach(item => {
            item.classList.toggle("active")
        })
        document.querySelectorAll(".heading").forEach(item => {
            item.classList.toggle("active")
        })
        document.querySelectorAll(".how_it_made").forEach(item => {
            item.classList.toggle("active")
        })
        document.querySelectorAll(".project").forEach(item => {
            item.classList.toggle("active")
        })

        if (toggleBtn.checked) {
            document.getElementById("toggle_text").textContent = "Night Mode"
        }else{
            document.getElementById("toggle_text").textContent = "light Mode"
        }
        
    
})