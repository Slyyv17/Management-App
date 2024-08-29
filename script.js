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
// Buttons to trigger containers
// Buttons to trigger containers
// Selecting buttons and containers
const tskBtn = document.querySelector(".tsk-btn");
const projBtn = document.querySelector(".prj-btn");
const noteBtn = document.querySelector(".note-btn");

// Containers
const tskCont = document.querySelector(".tsk-cont");
const prjCont = document.querySelector(".prj-cont");
const noteCont = document.querySelector(".note-cont");

// Date container and Next button
const nextBtn = document.querySelector(".next-btn");
const dateContainer = document.querySelector(".date-container");

// Event listeners for opening containers
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

// Event listeners for all close buttons
const closeBtns = document.querySelectorAll(".close-btn");
closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        tskCont.style.display = "none";
        prjCont.style.display = "none";
        noteCont.style.display = "none";
    });
});

// Next button functionality
nextBtn.addEventListener("click", function() {
  const taskName = document.getElementById("task-name").value;
  const aboutTask = document.getElementById("about-task").value;

  if (taskName && aboutTask) {
    // Hide the workflow section
    document.querySelector(".work-flow").style.display = "none";

    // Display the date container
    dateContainer.style.display = "flex";

    // Scroll to the date container to ensure it's visible
    dateContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    alert("Please fill out the task name and description before proceeding.");
  }
});

