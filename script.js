// Add & Remove Button Functionality
const addBtn = document.querySelector(".add-btn");
const remBtn = document.querySelector(".rem-btn");
const btnTab = document.querySelector(".btn-tab");

addBtn.addEventListener("click", function () {
    btnTab.style.display = "grid";
    setTimeout(() => {
        btnTab.classList.add("visible");  // Slide up with animation
        btnTab.classList.remove("hidden");
    }, 50); // Add slight delay for smoothness

    addBtn.style.display = "none";
    remBtn.style.display = "block";
});

remBtn.addEventListener("click", function () {
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

// Task, Project, and Notes Button Functionality
const tskBtn = document.querySelector(".tsk-btn");
const projBtn = document.querySelector(".prj-btn");
const noteBtn = document.querySelector(".note-btn");

const tskCont = document.querySelector(".tsk-cont");
const prjCont = document.querySelector(".prj-cont");
const noteCont = document.querySelector(".note-cont");
const tskResult = document.querySelector(".tsk-result"); // Task result container
const taskResultContent = document.querySelector(".task-result-content"); // Content of the task result

// Buttons to switch between task, project, and notes
tskBtn.addEventListener("click", function () {
    tskCont.style.display = "flex";
    prjCont.style.display = "none";
    noteCont.style.display = "none";
    tskResult.style.display = "none"; // Hide the result section when switching
});

projBtn.addEventListener("click", function () {
    prjCont.style.display = "flex";
    tskCont.style.display = "none";
    noteCont.style.display = "none";
    tskResult.style.display = "none";
});

noteBtn.addEventListener("click", function () {
    noteCont.style.display = "flex";
    prjCont.style.display = "none";
    tskCont.style.display = "none";
    tskResult.style.display = "none";
});

// Close Buttons Functionality
const closeBtns = document.querySelectorAll(".close-btn");
closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        tskCont.style.display = "none";
        prjCont.style.display = "none";
        noteCont.style.display = "none";
        tskResult.style.display = "none";
    });
});

// Task Submission and Task Result Button
const nextBtn = document.querySelector(".next-btn");
const taskNameInput = document.getElementById("task-name");
const aboutTaskInput = document.getElementById("about-task");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const tskResultBtn = document.querySelector(".tsk-result-btn");

// Function to handle task submission and validation
nextBtn.addEventListener("click", function () {
    const taskName = taskNameInput.value.trim();
    const aboutTask = aboutTaskInput.value.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    // Validation: Ensure task name, description, and dates are filled
    if (!taskName || !aboutTask || !startDate || !endDate) {
        alert("Please fill out all fields before proceeding.");
        return;
    }

    // Function to display task result
    tskSubmitContainer(taskName, aboutTask, startDate, endDate);

    // Hide the task creation form and show the task result section
    tskCont.style.display = 'none';
    tskResult.style.display = 'flex';

    // Disable 'Next' button after submission
    nextBtn.style.display = "none";
});

// Disable Past Dates in Date Pickers
const today = new Date().toISOString().split('T')[0];
startDateInput.setAttribute('min', today);

// Ensure the end date cannot be before the selected start date
startDateInput.addEventListener('change', function () {
    const selectedStartDate = startDateInput.value;
    if (selectedStartDate) {
        endDateInput.setAttribute('min', selectedStartDate);
    }
});

// Function to handle task result button
tskResultBtn.addEventListener("click", function () {
    tskResult.style.display = 'flex';
});

// Function to display task result
function tskSubmitContainer(taskName, aboutTask, startDate, endDate) {
    taskResultContent.innerHTML = `
        <div class="task-item">
            <h3>Task Details</h3>
            <p><strong>Task Name:</strong> ${taskName}</p>
            <p><strong>About Task:</strong> ${aboutTask}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
        </div>
    `;
}

// Function to clear the task container after submission
function clearTskCont() {
    taskNameInput.value = '';
    aboutTaskInput.value = '';
    startDateInput.value = '';
    endDateInput.value = '';
}
