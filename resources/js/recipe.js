const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav-links')
const Progress = document.querySelector('.progress-bar-wrapper')
const progressBarPercents = [97,93,80,85,90]

window.addEventListener("scroll",()=>{
    mainfunction()
});

const mainfunction =() =>{
    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }

    sections.forEach((section,i) => {
        if(window.pageYOffset >= section.offsetTop - 10)  {
            navbarLinks.forEach(navbarLinks => {
                navbarLinks.classList.remove('change')
            })
             navbarLinks[i].classList.add("change");
        }
    })

    if(window.pageYOffset + window.innerHeight >= Progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el,i) =>{
            el.style.width =`${progressBarPercents[i]}%`
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
        })
    }
}

mainfunction();

window.addEventListener('resize',()=>{
    window.location.reload();
})