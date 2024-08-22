const addBtn = document.querySelector(".add-btn");
const remBtn = document.querySelector(".rem-btn");
const btnTab = document.querySelector(".btn-tab");

addBtn.addEventListener("click", function() {
    // Slide the tab up and show it
    btnTab.style.display = "grid";
    setTimeout(() => {
        btnTab.classList.add("visible");  // Slide up with animation
        btnTab.classList.remove("hidden");
    }, 50); // Add slight delay for smoothness

    addBtn.style.display = "none";
    remBtn.style.display = "block";
});

remBtn.addEventListener("click", function() {
    // Slide the tab down and hide it
    btnTab.classList.add("hidden");   // Slide down with animation
    btnTab.classList.remove("visible");

    setTimeout(() => {
        btnTab.style.display = "none";
    }, 500); // Match the duration of the slide animation

    remBtn.style.transform = "rotate(360deg)";
    remBtn.style.transition = "transform 0.5s ease"; // Rotate the remove button

    setTimeout(() => {
        remBtn.style.display = "none";
        addBtn.style.display = "block";
    }, 500); // Wait for rotation before switching buttons
});

// tsk, prj and note btn 
const tskBtn = document.querySelector(".tsk-btn");
const projBtn = document.querySelector(".prj-btn");
const noteBtn = document.querySelector(".note-btn");

// their containers
const tskCont = document.querySelector(".tsk-cont");
const prjCont = document.querySelector(".prj-cont");
const noteCont = document.querySelector(".note-cont");

tskBtn.addEventListener("click", function() {
    tskCont.style.display = "flex";
    prjCont.style.display = "none";
    noteCont.style.display = "none";
});

projBtn.addEventListener("click", function() {
    prjCont.style.display = "flex";
    tskCont.style.display = "none";
    noteCont.style.display = "none";
});

noteBtn.addEventListener("click", function() {
    noteCont.style.display = "flex";
    prjCont.style.display = "none";
    tskCont.style.display = "none";
});

// the close button 
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
    tskCont.style.display = "none";
    prjCont.style.display = "none";
    noteCont.style.display = "none"
});