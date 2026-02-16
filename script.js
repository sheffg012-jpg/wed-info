const text = [
    "computer maintenance",
    "electronic repairs",
    "graphic design"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){

    currentText = text[i];

    if(!isDeleting){
        document.querySelector(".typing").textContent =
        currentText.substring(0, j++);
    }else{
        document.querySelector(".typing").textContent =
        currentText.substring(0, j--);
    }

    if(j === currentText.length + 1){
        isDeleting = true;
        setTimeout(type,1000);
        return;
    }

    if(j === 0){
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();
document.querySelectorAll(".premium-btn").forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const rect = btn.getBoundingClientRect();

        btn.style.setProperty(
            "--x",
            e.clientX - rect.left + "px"
        );

        btn.style.setProperty(
            "--y",
            e.clientY - rect.top + "px"
        );
    });

});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


// EXPAND on hover
document.querySelectorAll("a, button, .card, .gallery-item")
.forEach(el=>{
    el.addEventListener("mouseenter",()=>{
        cursor.style.width="42px";
        cursor.style.height="42px";
    });

    el.addEventListener("mouseleave",()=>{
        cursor.style.width="18px";
        cursor.style.height="18px";
    });
});
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    sec.classList.add("hidden");
    observer.observe(sec);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 200;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");

        if(link.href.includes(current)){
            link.classList.add("active");
        }
    });

});
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove",(e)=>{

    setTimeout(()=>{
        trail.style.left = e.clientX + "px";
        trail.style.top = e.clientY + "px";
    },60);

});


