// Add & Remove Button Functionality
const addBtn = document.querySelector(".add-btn");
const remBtn = document.querySelector(".rem-btn");
const btnTab = document.querySelector(".btn-tab");

addBtn.addEventListener("click", function () {
  btnTab.style.display = "grid";
  setTimeout(() => {
    btnTab.classList.add("visible");
    btnTab.classList.remove("hidden");
  }, 50);

  addBtn.style.display = "none";
  remBtn.style.display = "block";
});

remBtn.addEventListener("click", function () {
  btnTab.classList.add("hidden");
  btnTab.classList.remove("visible");

  setTimeout(() => {
    btnTab.style.display = "none";
  }, 500);

  remBtn.style.transform = "rotate(360deg)";
  remBtn.style.transition = "transform 0.5s ease";

  setTimeout(() => {
    remBtn.style.display = "none";
    addBtn.style.display = "block";
  }, 500);
});

// Task, Project, and Notes Button Functionality
const tskBtn = document.querySelector(".tsk-btn");
const projBtn = document.querySelector(".prj-btn");
const noteBtn = document.querySelector(".note-btn");
const tskResultBtn = document.querySelector(".tsk-result-btn");

const tskCont = document.querySelector(".tsk-cont");
const prjCont = document.querySelector(".prj-cont");
const noteCont = document.querySelector(".note-cont");
const tskResult = document.querySelector(".tsk-result");
const taskResultContent = document.querySelector(".task-result-content");

// Add close functionality to all containers
const closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const parentContainer = this.closest('.tsk-cont, .prj-cont, .note-cont, .tsk-result, .prj-result, .note-result');
    if (parentContainer) {
      parentContainer.style.display = "none";
    }
  });
});

tskBtn.addEventListener("click", function () {
  tskCont.style.display = "flex";
  prjCont.style.display = "none";
  noteCont.style.display = "none";
  tskResult.style.display = "none";
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

// open task result container
tskResultBtn.addEventListener("click", function () {
  tskResult.style.display = "flex";
  tskCont.style.display = "none";
  prjCont.style.display = "none";
  noteCont.style.display = "none";
  prjResultBox.style.display = "none";
});

// Status Selection
const statusBtn = document.getElementById("status-btn");
const statusBox = document.querySelector(".status-box");
let selectedStatus = "";

statusBtn.addEventListener("click", function () {
  if (statusBox.style.display === "none" || statusBox.style.display === "") {
    statusBox.style.display = "block";
  } else {
    statusBox.style.display = "none";
  }
});

// Listen for clicks on list items and store the selected status
const listItems = document.querySelectorAll('.status-box ul li');
listItems.forEach(item => {
  item.addEventListener('click', function () {
      selectedStatus = this.textContent; // Store the selected status
      console.log("Selected option: " + selectedStatus);
    statusBox.style.display = "none"; // Hide the box after selection
  });
});

// Task Submission and Validation
const nextBtn = document.querySelector(".next-btn");
const taskNameInput = document.getElementById("task-name");
const aboutTaskInput = document.getElementById("about-task");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");

// Set minimum date for start date input to today
const today = new Date().toISOString().split('T')[0];
startDateInput.setAttribute('min', today);

// Update end date minimum based on start date
startDateInput.addEventListener('change', function () {
  const startDate = new Date(startDateInput.value).toISOString().split('T')[0];
  endDateInput.setAttribute('min', startDate);
});

// Task Submission and Validation
nextBtn.addEventListener("click", function () {
  const taskName = taskNameInput.value.trim();
  const aboutTask = aboutTaskInput.value.trim();
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  // Validation: Check for all inputs including status
  if (!taskName || !aboutTask || !startDate || !endDate) {
    alert("Please fill out all fields before proceeding.");
    return;
  }
  if (!selectedStatus) {
    alert("Please select a status.");
    return;
  }

  // Display task result
  displayTaskResult(taskName, aboutTask, startDate, endDate, selectedStatus);

  // Clear the task creation form
  clearTskCont();
});

// Function to display task result
function displayTaskResult(taskName, aboutTask, startDate, endDate, status) {
  let statusColor = '';

  // Set color based on selected status
  switch (status) {
    case 'Not Started':
      statusColor = 'gray';
      break;
    case 'In Progress':
      statusColor = 'blue';
      break;
    case 'Completed':
      statusColor = 'green';
      break;
    case 'On Hold':
      statusColor = 'orange';
      break;
    default:
      statusColor = 'black'; // Default color
  }

  // Check if taskResultContent is found
  if (taskResultContent) {
    // Append task result with status color
    taskResultContent.insertAdjacentHTML('beforeend', `
      <div class="task-item">
        <div class="task-header">
          <h3>${taskName}</h3>
          <button class="more-btn"> 
            <i class="uil uil-ellipsis-v"></i>
          </button>
        </div>
        <div class="task-pg">
          <p>${aboutTask}</p>
        </div>
        <p><strong>Start-date:</strong> ${startDate}</p>
        <p><strong>End-date:</strong> ${endDate}</p>
        <p class="status-result"><strong>Status:</strong> <span style="background-color: ${statusColor};">${status}</span></p>
      </div>

      <!-- More button options -->
      <div class="more-options" style="display: none;">
        <ul>
          <li>Edit</li>
          <li>Delete</li>
          <li>Priority</li>
        </ul>
      </div>
    `);
  } else {
    console.error('taskResultContent not found');
  }

  // Ensure tskResult is visible
  if (tskResult) {
    tskResult.style.display = 'flex'; // Show the task result container
  } else {
    console.error('tskResult container not found');
  }
}

// Function to clear the task form
function clearTskCont() {
  taskNameInput.value = '';
  aboutTaskInput.value = '';
  startDateInput.value = '';
  endDateInput.value = '';
  selectedStatus = ''; // Reset the selected status
}

// Debugging
document.addEventListener("DOMContentLoaded", function () {
  if (!taskResultContent) {
    console.error('taskResultContent is not found');
  }
  if (!tskResult) {
    console.error('tskResult is not found');
  }
});

// Hide the status box if clicking outside of it
document.addEventListener("click", function (e) {
  const isClickedInsideBox = statusBox.contains(e.target);
  const isClickedOnButton = statusBtn.contains(e.target);

  if (!isClickedInsideBox && !isClickedOnButton) {
    statusBox.style.display = "none";
  }
});

// Hide the more options dropdown when clicking outside of it
document.addEventListener("click", function (e) {
  // Get all the currently visible more-options elements
  const allMoreOptions = document.querySelectorAll(".more-options.show");

  allMoreOptions.forEach((moreOptions) => {
    const moreBtn = moreOptions.previousElementSibling.querySelector(".more-btn"); // Find the related more-btn

    // Check if the click happened outside of both the more-options and the related more-btn
    if (!moreOptions.contains(e.target) && !moreBtn.contains(e.target)) {
      moreOptions.classList.remove("show"); // Hide the dropdown
    }
  });
});


// Event delegation for dynamically created "More" buttons
taskResultContent.addEventListener("click", function (e) {
  if (e.target.closest(".more-btn")) {
    const taskItem = e.target.closest(".task-item");
    const moreOptions = taskItem.nextElementSibling; // The next sibling is the .more-options container
    if (moreOptions) {
      moreOptions.style.display = moreOptions.style.display === "none" ? "block" : "none";
    }
  }
});


// Getting elements for project functionality
const prjNextBtn = document.querySelector(".next-btn-prj");
const prjNameInput = document.getElementById("prj-name");
const aboutPrjInput = document.getElementById("about-prj");
const startDatePrjInput = document.getElementById("start-date-prj");
const endDatePrjInput = document.getElementById("end-date-prj");
const prjStatusBtn = document.getElementById("status-btn-prj");
const prjStatusBox = document.querySelector(".status-box-prj");
const prjResultBtn = document.querySelector(".prj-result-btn");
const prjResultBox = document.querySelector(".prj-result");
const prjResultContent = document.querySelector(".prj-result-content");
let selectedPrjStatus = "";

// Set the current date as the minimum start date
const prjToday = new Date().toISOString().split('T')[0];
startDatePrjInput.setAttribute('min', prjToday);

// Update the minimum end date based on the start date selection
startDatePrjInput.addEventListener('change', function () {
  const startDatePrj = new Date(startDatePrjInput.value).toISOString().split('T')[0];
  endDatePrjInput.setAttribute('min', startDatePrj);
});

// Handling project form submission
prjNextBtn.addEventListener("click", function () {
    const prjName = prjNameInput.value.trim();
    const aboutPrj = aboutPrjInput.value.trim();
    const startDatePrj = startDatePrjInput.value;
    const endDatePrj = endDatePrjInput.value;

    if (!prjName || !aboutPrj || !startDatePrj || !endDatePrj) {
        alert("Please fill out all fields before proceeding.");
        return;
    }
    if (!selectedPrjStatus) {
        alert("Please select a status.");
        return;
    }

    // Display project result
    displayPrjResult(prjName, aboutPrj, startDatePrj, endDatePrj, selectedPrjStatus);

    // Clear the project form
    clearPrjCont();
});

// Function to display the project result
function displayPrjResult(prjName, aboutPrj, startDatePrj, endDatePrj, status) {
    let statusColor = '';

    // Set color based on selected status
    switch (status) {
        case 'Not Started':
            statusColor = 'gray';
            break;
        case 'In Progress':
            statusColor = 'blue';
            break;
        case 'Completed':
            statusColor = 'green';
            break;
        case 'On Hold':
            statusColor = 'orange';
            break;
        default:
            statusColor = 'black'; // Default color
    }

    // Append project result with status color
    prjResultContent.insertAdjacentHTML('beforeend', `
        <div class="prj-item" style="border-left: 4px solid ${statusColor};">
            <div class="prj-header">
                <h3>${prjName}</h3>
                <button class="more-btn"> 
                  <i class="uil uil-ellipsis-v"></i>
                </button>
            </div>
            <div class="prj-pg">
                <p>${aboutPrj}</p>
            </div>
            <p><strong>Start-date:</strong> ${startDatePrj}</p>
            <p><strong>End-date:</strong> ${endDatePrj}</p>
            <p class="status-result"><strong>Status:</strong> <span style="background-color: ${statusColor};">${status}</span></p>
        </div>

        <!-- More button options -->
        <div class="more-options" style="display: none;">
            <ul>
                <li>Edit</li>
                <li>Delete</li>
                <li>Priority</li>
            </ul>
        </div>
    `);
}

// Clear the project form after submission
function clearPrjCont() {
    prjNameInput.value = '';
    aboutPrjInput.value = '';
    startDatePrjInput.value = '';
    endDatePrjInput.value = '';
    selectedPrjStatus = '';
}

// Toggle the project status box
prjStatusBtn.addEventListener("click", function () {
    prjStatusBox.style.display = prjStatusBox.style.display === "none" ? "block" : "none";
});

// Select a project status from the list
const prjListItems = document.querySelectorAll('.status-box-prj ul li');
prjListItems.forEach(item => {
    item.addEventListener('click', function () {
        selectedPrjStatus = this.textContent; // Store the selected project status
        console.log("Selected project status: " + selectedPrjStatus);
        prjStatusBox.style.display = "none"; // Hide the box after selection
    });
});

// To be able to open the project result container
prjResultBtn.addEventListener("click", function () {
  prjResultBox.style.display = "flex";
  taskResultContent.style.display = "none";
  tskCont.style.display = "none";
  prjCont.style.display = "none";
  noteCont.style.display = "none";
})

// Hide the project status box if clicking outside of it
document.addEventListener("click", function (e) {
  const isClickedInsidePrjBox = prjStatusBox.contains(e.target);
  const isClickedOnPrjButton = prjStatusBtn.contains(e.target);

  if (!isClickedInsidePrjBox && !isClickedOnPrjButton) {
    prjStatusBox.style.display = "none";
  }
});

// Hide the note status box if clicking outside of it
document.addEventListener("click", function (e) {
  const isClickedInsideNoteBox = noteResultContent.contains(e.target);
  const isClickedOnNoteButton = note_create_btn.contains(e.target);

  if (!isClickedInsideNoteBox && !isClickedOnNoteButton) {
    noteResultContent.style.display = "none";
  }
});

// For Note container
//Getting elements for note functionality
const note_create_btn = document.querySelector(".note-create-btn");
const note_title = document.getElementById("note-title");
const note_content = document.getElementById("subject");
const noteResultBox = document.querySelector(".note-result");
const noteResultContent = document.querySelector(".note-result-content");
const noteResultBtn = document.querySelector(".note-result-btn");

const noteTitleInput = note_title.va;
const noteContentInput = note_content;

// Handling note form submission
function createNote() {
  const noteTitle = note_title.value.trim();
  const noteContent = note_title.value.trim();

  if (!noteTitle || !noteContent) {
    alert("Please fill out all fields before proceeding.")
    return;
  }

  // Display note result
  displayNoteResult(noteTitle, noteContent);

  clearNoteCont();
}

// Function to display the note result
function displayNoteResult(noteTitle, noteContent) {
  noteResultContent.insertAdjacentHTML('beforeend', `
    <div class="note-item">
      <h3>${noteTitle}</h3>
      <p>${noteContent}</p>
    </div>
  `);
}

// function to clear the note form
function clearNoteCont() {
  note_title.value = '';
  note_content.value = '';
}

// Adding event listener to the create note button
note_create_btn.addEventListener("click", createNote);

// Hide the note result content if clicking outside of it
document.addEventListener("click", function (e) {
  const isClickedInsideNoteBox = noteResultContent.contains(e.target);
  const isClickedOnNoteButton = note_create_btn.contains(e.target);

  if (!isClickedInsideNoteBox && !isClickedOnNoteButton) {
    noteResultContent.style.display = "none";
  }
});

// To be able to open the note result container
noteResultBtn.addEventListener("click", function () {
  noteResultContent.style.display = "flex";
  tskCont.style.display = "none";
  prjCont.style.display = "none";
  noteCont.style.display = "none";
  prjResultBox.style.display = "none";
});

// Event delegation for dynamically created "More" buttons in notes
noteResultContent.addEventListener("click", function (e) {
  if (e.target.closest(".more-btn")) {
    const noteItem = e.target.closest(".note-item");
    const moreOptions = noteItem.nextElementSibling; // The next sibling is the .more-options container
    if (moreOptions) {
      moreOptions.style.display = moreOptions.style.display === "none" ? "block" : "none";
    }
  }
});

// Add a functionality to display the note result container
noteResultBtn.addEventListener("click", function () { 
  noteResultBox.style.display = "flex";
  tskCont.style.display = "none";
  prjCont.style.display = "none";
  noteCont.style.display = "none";
  prjResultBox.style.display = "none";
})