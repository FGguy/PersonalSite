const navbarels = document.querySelectorAll('.navbu');
const sections = document.querySelectorAll('.silly');

let currentSection = 'about';
window.addEventListener('scroll', () => {
    sections.forEach( secs => {
        if(window.scrollY>= (secs.offsetTop-200)){
            currentSection = secs.id;
        }
    })

    // Calculate the distance between the bottom of the viewport and the bottom of the document
    const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);

    // Define a threshold (e.g., 10 pixels) to trigger the end of the page
    const threshold = 10;

    if (distanceToBottom < threshold) {
    // You've reached the end of the page
    currentSection = sections[sections.length-1].id;
    }
    navbarels.forEach( els => {
        if(els.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            els.classList.add('active');
        }
    })
})
