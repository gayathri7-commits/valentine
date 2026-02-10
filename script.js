const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let currentScale = 1;

if(noBtn) {
    console.log("No button found! Ready to teleport.");
    
    noBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        console.log("No clicked!");

        const x = Math.floor(Math.random() * (window.innerWidth - 150));
        const y = Math.floor(Math.random() * (window.innerHeight - 50));

        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';

        currentScale += 0.5;
        yesBtn.style.transform = `scale(${currentScale})`;
        yesBtn.style.zIndex = "1000"; 
    });
}