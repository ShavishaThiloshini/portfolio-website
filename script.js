// Skill indicators //

const skills = document.querySelectorAll('.skill');

skills.forEach(skill=>{
    let p = skill.dataset.percent;
    skill.style.setProperty('--percent', p);
});


// Project popup system //

const openButtons = document.querySelectorAll(".openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.querySelector(".closeModal");

// Modal elements
const modalImg   = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalDesc  = document.querySelector(".modal-desc");
const modalGit   = document.querySelector(".modal-github");
const modalLive  = document.querySelector(".modal-live");

// Open modal with dynamic content
openButtons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        modalOverlay.style.display = "flex";

        modalImg.src   = btn.dataset.img;
        modalTitle.innerText = btn.dataset.title;
        modalDesc.innerText  = btn.dataset.desc;
        modalGit.href  = btn.dataset.github;
        modalLive.href = btn.dataset.live;
    });
});

// Close controls
closeBtn.addEventListener("click", ()=> modalOverlay.style.display = "none");
modalOverlay.addEventListener("click", (e)=>{ if(e.target === modalOverlay) modalOverlay.style.display="none"; });
document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") modalOverlay.style.display="none"; });

// ===Contact form emails=== //
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_bdc47le","template_10jenvl", this,"gu3GWoeIuus6GURrH")
    .then(()=>{
        alert("Message Sent Successfully!");
        this.reset();
    })
    .catch(()=>{
        alert("Message Failed! Check console.");
    });
});