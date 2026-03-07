document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});


const pdfFiles = [
    "pdf/MCH.02.01.01.pdf",
    "pdf/MCH.03.01.01.pdf",
    "pdf/MCH.04.01.01.pdf",
    "pdf/MCH.05.01.01.pdf",
    "pdf/MCH.06.01.01.pdf"
];

let current = 0;
const iframe = document.getElementById("pdf-frame");

document.getElementById("prev").addEventListener("click", ()=>{
    current = (current - 1 + pdfFiles.length) % pdfFiles.length;
    iframe.src = pdfFiles[current];
});

document.getElementById("next").addEventListener("click", ()=>{
    current = (current + 1) % pdfFiles.length;
    iframe.src = pdfFiles[current];
});