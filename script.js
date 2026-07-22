const roles = [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "AI Enthusiast",
    "Java Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    let currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


const bars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("animate");

        }

    });

});

bars.forEach(bar => {

    observer.observe(bar);

});

// ==========================
// Scroll Reveal Animation
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            console.log(entry.target);

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach((element) => {
    revealObserver.observe(element);
});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
const projects = {

    rehab: {

        title: "RehabSystem",

        text: "A desktop application developed in C# for managing Gender-Based Violence cases. The system includes secure record management, counsellor assignments, appointment scheduling and automated PDF report generation using iTextSharp.",

        github: "https://github.com/haste713"

    },

    fittrack: {

        title: "FitTrack",

        text: "A cross-platform fitness mobile application built using .NET MAUI and the MVVM architecture. Users can monitor workouts, manage fitness goals and track their overall progress.",

        github: "https://github.com/haste713"

    },

    hotel: {

        title: "Hotel Management Database",

        text: "Designed and implemented a fully normalized Oracle SQL database supporting guest management, room bookings, catering services, employees and payment processing.",

        github: "https://github.com/haste713"

    },

    network: {

        title: "Segmented Business Network",

        text: "Designed a secure Cisco Packet Tracer enterprise network implementing VLANs, routing, subnetting, inter-VLAN communication and internet connectivity for multiple departments.",

        github: "https://github.com/haste713"

    }

};
// ===========================
// PROJECT MODAL
// ===========================

function openModal(project){

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");
    const github = document.getElementById("modalGithub");

    modal.style.display = "flex";

    switch(project){

        case "rehab":

            title.innerHTML = "RehabSystem";

            text.innerHTML =
            "RehabSystem is a desktop application developed using C#, Windows Forms, SQL Server and iTextSharp. It manages Gender-Based Violence cases, counsellor assignments, appointments, secure records and automated PDF report generation.";

            github.href = "https://github.com/haste713";

        break;

        case "fittrack":

            title.innerHTML = "FitTrack";

            text.innerHTML =
            "FitTrack is a cross-platform fitness application developed using .NET MAUI and the MVVM architecture. Users can monitor workouts, manage fitness goals and track their progress.";

            github.href = "https://github.com/haste713";

        break;

        case "hotel":

            title.innerHTML = "Hotel Management Database";

            text.innerHTML =
            "A fully normalized Oracle SQL database designed for hotel operations including bookings, guests, payments, employees and catering management.";

            github.href = "https://github.com/haste713";

        break;

        case "network":

            title.innerHTML = "Business Network";

            text.innerHTML =
            "A Cisco Packet Tracer enterprise network implementing VLANs, routing, subnetting, DHCP and secure communication between multiple departments.";

            github.href = "https://github.com/haste713";

        break;

    }

}

function closeModal(){

    document.getElementById("projectModal").style.display = "none";

}

window.onclick = function(event){

    const modal = document.getElementById("projectModal");

    if(event.target === modal){

        closeModal();

    }

}